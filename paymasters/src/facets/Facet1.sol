// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

import "../../lib/LibMastaa.sol";

contract Test1Facet {
    bytes32 constant FACET_STORAGE_POSITION = keccak256("facets.storage");

    function getStorage()
        internal
        pure
        returns (LibMastaa.SponsorStorage storage ms)
    {
        bytes32 position = FACET_STORAGE_POSITION;
        assembly {
            ms.slot := position
        }
    }

    function getMaxTxPerUser() public view returns (uint256) {
        return getStorage().maxTxPerUser;
    }
}
