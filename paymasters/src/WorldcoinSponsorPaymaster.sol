// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {ByteHasher} from "./helpers/ByteHasher.sol";
import {IWorldID} from "./interfaces/IWorldID.sol";

import {BasePaymaster} from "../core/BasePaymaster.sol";

contract WorldcoinSponsorPaymaster is BasePaymaster {
    using ByteHasher for bytes;
    using UserOperationLib for UserOperation;

    uint256 private constant SIGNATURE_OFFSET = 20;

    ///////////////////////////////////////////////////////////////////////////////
    ///                                  ERRORS                                ///
    //////////////////////////////////////////////////////////////////////////////

    /// @notice Thrown when attempting to reuse a nullifier
    error InvalidNullifier();

    /// @dev The World ID instance that will be used for verifying proofs
    IWorldID internal immutable worldId;

    /// @dev The contract's external nullifier hash
    uint256 internal immutable externalNullifier;

    /// @dev The World ID group ID (always 1)
    uint256 internal immutable groupId = 1;

    /// @dev Whether a nullifier hash has been used already. Used to guarantee an action is only performed once by a single person
    mapping(uint256 => bool) internal nullifierHashes;

    /// @dev Keep track of wallet nonce
    mapping(address => uint256) public senderNonce;

    /// @param _entryPoint The ERC-4337 EntryPoint
    /// @param _worldId The WorldID instance that will verify the proofs
    /// @param _appId The World ID app ID
    /// @param _actionId The World ID action ID
    constructor(
        IEntryPoint _entryPoint,
        IWorldID _worldId,
        string memory _appId,
        string memory _actionId
    ) BasePaymaster(_entryPoint) {
        worldId = _worldId;
        externalNullifier = abi
            .encodePacked(abi.encodePacked(_appId).hashToField(), _actionId)
            .hashToField();
    }

    /// @param root The root of the Merkle tree (returned by the JS widget).
    /// @param nullifierHash The nullifier hash for this proof, preventing double signaling (returned by the JS widget).
    /// @param proof The zero-knowledge proof that demonstrates the claimer is registered with World ID (returned by the JS widget).
    /// @dev Verify the worldcoin proof and the unique nullifier hash1
    function verifyWorldcoinProof(
        uint256 root,
        uint256 nullifierHash,
        uint256[8] calldata proof
    ) public returns (bool isVerified) {
        // First, we make sure this person hasn't done this before
        if (nullifierHashes[nullifierHash]) return false;

        // We now verify the provided proof is valid and the user is verified by World ID
        (bool verified, ) = address(worldId).call(
            abi.encodePacked(
                worldId.verifyProof.selector,
                abi.encode(
                    root,
                    groupId,
                    abi.encodePacked(address(this)).hashToField(), // we use this contract address as the unique signal
                    nullifierHash,
                    externalNullifier,
                    proof
                )
            )
        );

        // update states if successfully verified
        if (verified) {
            // We now record the user has done this, so they can't do it again (proof of uniqueness)
            nullifierHashes[nullifierHash] = true;
        }

        return verified;
    }

    /**
     * verify this request.
     * the "paymasterAndData" is expected to be the paymaster and a signature over the entire request params
     * paymasterAndData[:20] : address(this)
     * paymasterAndData[20:27] : root
     * paymasterAndData[27:] : root
     */
    function _validatePaymasterUserOp(
        UserOperation calldata userOp,
        bytes32 /*userOpHash*/,
        uint256 requiredPreFund
    ) internal override returns (bytes memory context, uint256 validationData) {
        (requiredPreFund);

        bytes calldata signature = parsePaymasterAndData(
            userOp.paymasterAndData
        );

        // Verify proof with worldcoin
        // Worldcoin signature is64 bytes long ? todo check
        require(
            signature.length == 64,
            "VerifyingPaymaster: invalid signature length in paymasterAndData"
        );

        senderNonce[userOp.getSender()]++;

        //don't revert on signature failure: return SIG_VALIDATION_FAILED
        if (verifyingSigner != ECDSA.recover(hash, signature)) {
            return ("", _packValidationData(true, validUntil, validAfter));
        }

        //no need for other on-chain validation: entire UserOp should have been checked
        // by the external service prior to signing it.
        return ("", _packValidationData(false, validUntil, validAfter));
    }

    function parsePaymasterAndData(
        bytes calldata paymasterAndData
    ) public pure returns (bytes calldata signature) {
        signature = paymasterAndData[SIGNATURE_OFFSET:];
    }
}
