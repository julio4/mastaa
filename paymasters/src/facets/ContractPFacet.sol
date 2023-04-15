// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.12;

/* solhint-disable reason-string */

import "../core/BasePaymaster.sol";
import "../../lib/LibMastaa.sol";

/**
 * A paymaster that will pay for everyone for a specific contract
 */
contract ContractPFacet is BasePaymaster {
    using UserOperationLib for UserOperation;

    //calculated cost of the postOp
    uint256 public constant COST_OF_POST = 35000;

    constructor(
        IEntryPoint _entryPoint,
        address _targetContract
    ) BasePaymaster(_entryPoint) {
        LibMastaa.SponsorStorage storage ms = LibMastaa.getSponsorStorage();
        ms.targetContract = _targetContract;
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

        return (new bytes(0), 0);
    }

    /**
     * Nope
     */
    function _postOp(
        PostOpMode mode,
        bytes calldata context,
        uint256 actualGasCost
    ) internal override {
        (mode);
        (context);
        (actualGasCost);
    }
}
