// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.12;

/* solhint-disable reason-string */

import "../core/BasePaymaster.sol";

/**
 * A free paymaster that will pay for everyone no matter what.
 */
contract OpenBarPFacet is BasePaymaster {
    using UserOperationLib for UserOperation;

    //calculated cost of the postOp
    uint256 public constant COST_OF_POST = 35000;

    constructor(IEntryPoint _entryPoint) BasePaymaster(_entryPoint) {}

    /**
     * Validate the request (always, for everyone):
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
