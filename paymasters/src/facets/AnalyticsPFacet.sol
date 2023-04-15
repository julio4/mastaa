// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

import "../../lib/LibMastaa.sol";

// Mock contract for testing (We can't use real datas because of the short time span)
contract AnalyticsPFacet {
    // TODO: add analytics functions
    function getTotalUsers() public view returns (uint256) {
        return 100;
    }
}
