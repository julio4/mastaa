// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

library LibMastaa {
    struct Storage {
        uint256 value;
    }

    bytes32 constant WORLDCOIN_STORAGE_POSITION = keccak256("facets.storage.worldcoin");

    struct WorldCoinStorage {

    }

    function getWorldCoinStorage() internal pure returns (LibMastaa.Storage storage ms) {
        bytes32 position = WORLDCOIN_STORAGE_POSITION;
        assembly {
            ms.slot := position
        }
    }

}
