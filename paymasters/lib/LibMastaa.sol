// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

import {IWorldID} from "../interfaces/IWorldID.sol";

library LibMastaa {
    struct SponsorStorage {
        uint256 maxTxPerUser;
    }

    bytes32 constant SPONSOR_STORAGE_POSITION = keccak256("facets.storage.sponsor");

    function getSponsorStorage() internal pure returns (LibMastaa.WorldCoinStorage storage ms) {
        bytes32 position = SPONSOR_STORAGE_POSITION;
        assembly {
            ms.slot := position
        }
    }

    bytes32 constant WORLDCOIN_STORAGE_POSITION = keccak256("facets.storage.worldcoin");

    struct WorldCoinStorage {
        /// @dev The World ID instance that will be used for verifying proofs
        IWorldID immutable worldId;

        /// @dev The contract's external nullifier hash
        uint256 immutable externalNullifier;

        /// @dev Whether a nullifier hash has been used already. Used to guarantee an action is only performed once by a single person
        mapping(uint256 => bool) nullifierHashes;

        /// @dev Keep track of wallet nonce
        mapping(address => uint256) senderNonce;
    }

    function getWorldCoinStorage() internal pure returns (WorldCoinStorage storage ms) {
        bytes32 position = WORLDCOIN_STORAGE_POSITION;
        assembly {
            ms.slot := position
        }
    }

}
