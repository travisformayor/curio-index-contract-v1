//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

/*
ID 1: Robek set
ID 2: Marisol set
ID 3: other artist... etc

ID 10: Full Set
ID 11: 1-10 set

ID 101: Unwrapped CRO1
ID 102: Unwrapped CRO2... etc

ID 201: Wrapped CRO1
ID 202: Wrapped CRO2... etc

Collabland can then be programmed to look for IDs for a set by looking at ID 1, or 2, etc

The new curio site can fetch all balances both wrapped and unwrapped in one call, by doing balanceOfBatch with IDs 101, 102...130, 201, 202...230
*/

contract CurioIndex {
    function balanceOf(address _owner, uint256 _id) external view returns (uint256) {
        return 4;
    }
}
