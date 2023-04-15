// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.12;

/* solhint-disable reason-string */

import "../core/BasePaymaster.sol";
import "../../lib/LibMastaa.sol";

/**
 * A paymaster that will pay for everyone for a specific contract
 */
contract MaxTxPFacet is BasePaymaster {
    using UserOperationLib for UserOperation;

    //calculated cost of the postOp
    uint256 public constant COST_OF_POST = 35000;

    constructor(
        IEntryPoint _entryPoint,
        address _targetContract,
        uint256 _maxTx
    ) BasePaymaster(_entryPoint) {
        LibMastaa.SponsorStorage storage ms = LibMastaa.getSponsorStorage();
        ms.targetContract = _targetContract;
        ms.maxTxPerUser = _maxTx;
    }

    /**
     * Validate the request (for everyone for this contract):
     */
    function _validatePaymasterUserOp(
        UserOperation calldata userOp,
        bytes32 userOpHash,
        uint256 maxCost
    )
        internal
        view
        override
        returns (bytes memory context, uint256 validationData)
    {
        (userOpHash);
        (userOp);
        (maxCost);
        // verificationGasLimit is dual-purposed, as gas limit for postOp. make sure it is high enough
        require(
            userOp.verificationGasLimit > COST_OF_POST,
            "DepositPaymaster: gas too low for postOp"
        );
        require(
            userOp.paymasterAndData.length == 20,
            "DepositPaymaster: paymasterAndData should only contain address"
        );

        LibMastaa.SponsorStorage storage ms = LibMastaa.getSponsorStorage();
        require(
            address(bytes20(userOp.paymasterAndData[:20])) == ms.targetContract,
            "DepositPaymaster: wrong target contract"
        );

        require(
            ms.nonce[userOp.sender] < ms.maxTxPerUser,
            "DepositPaymaster: maximum number of sponsored transactions reached"
        );

        return (abi.encodePacked(userOp.sender), 0);
    }

    function _postOp(
        PostOpMode mode,
        bytes calldata context,
        uint256 actualGasCost
    ) internal override {
        (mode);
        (actualGasCost);

        // update nonce
        address sender = address(bytes20(context));
        LibMastaa.SponsorStorage storage ms = LibMastaa.getSponsorStorage();
        ms.nonce[sender] = ms.nonce[sender] + 1;
    }
}
