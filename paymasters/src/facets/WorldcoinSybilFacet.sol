// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {ByteHasher} from "../../lib/ByteHasher.sol";
import {IWorldID} from "../../interfaces/IWorldID.sol";

import "../../lib/LibMastaa.sol";
import "../core/BasePaymaster.sol";

contract WorldcoinSybilFacet is BasePaymaster {
    using ByteHasher for bytes;
    using UserOperationLib for UserOperation;

    uint256 private constant ROOT_OFFSET = 20;
    uint256 private constant NULLIFIER_OFFSET = 28;
    uint256 private constant PROOF_OFFSET = 36;

    /// @notice Thrown when attempting to reuse a nullifier
    error InvalidNullifier();

    /// @dev The World ID group ID (always 1)
    uint256 private constant groupId = 1;

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
        LibMastaa.WorldCoinStorage storage ms = LibMastaa.getWorldCoinStorage();
        ms.worldId = _worldId;
        ms.externalNullifier = abi
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
        uint256[8] memory proof
    ) public returns (bool isVerified) {
        LibMastaa.WorldCoinStorage storage ms = LibMastaa.getWorldCoinStorage();

        // First, we make sure this person hasn't done this before
        if (ms.nullifierHashes[nullifierHash]) return false;

        // We now verify the provided proof is valid and the user is verified by World ID
        ms.worldId.verifyProof(
            root,
            groupId,
            abi.encodePacked(address(this)).hashToField(), // we use this contract address as the unique signal
            nullifierHash,
            ms.externalNullifier,
            proof
        );

        // We now record the user has done this, so they can't do it again (proof of uniqueness)
        ms.nullifierHashes[nullifierHash] = true;
    }

    /**
     * Verify this sponsor request.
     */
    function _validatePaymasterUserOp(
        UserOperation calldata userOp,
        bytes32 /*userOpHash*/,
        uint256 requiredPreFund
    ) internal override returns (bytes memory context, uint256 validationData) {
        (requiredPreFund); // ignore arg

        LibMastaa.WorldCoinStorage storage ms = LibMastaa.getWorldCoinStorage();

        (
            uint256 root,
            uint256 nullifierHash,
            uint256[8] memory proof
        ) = parsePaymasterAndData(userOp.paymasterAndData);

        ms.senderNonce[userOp.getSender()]++;

        // Verify worldcoin proof
        verifyWorldcoinProof(root, nullifierHash, proof);

        //no need for other on-chain validation: entire UserOp should have been checked
        // by the external service prior to signing it.
        return ("", 0);
    }

    /*
     * paymasterAndData[:20] : address(this)
     * paymasterAndData[20:28] : root
     * paymasterAndData[27:36] : nullifierHash
     * paymasterAndData[36:] : proof
     */
    function parsePaymasterAndData(
        bytes calldata paymasterAndData
    )
        public
        pure
        returns (uint256 root, uint256 nullifierHash, uint256[8] memory proof)
    {
        root = uint256(bytes32(paymasterAndData[ROOT_OFFSET:NULLIFIER_OFFSET]));
        nullifierHash = uint256(
            bytes32(paymasterAndData[NULLIFIER_OFFSET:PROOF_OFFSET])
        );
        //proof = bytesToUintArray(paymasterAndData, PROOF_OFFSET);
    }

    // function bytesToUintArray(
    //     bytes calldata _bytes,
    //     uint256 _start
    // ) private pure returns (uint256[8] memory result) {
    //     require(_bytes.length >= _start + 32 * 8, "Invalid byte length");
    //     assembly {
    //         let offset := add(add(_bytes, 0x20), _start)
    //         for {
    //             let i := 0
    //         } lt(i, 8) {
    //             i := add(i, 1)
    //         } {
    //             mstore(
    //                 add(result, mul(i, 0x20)),
    //                 mload(add(offset, mul(i, 0x20)))
    //             )
    //         }
    //     }
    // }
}
