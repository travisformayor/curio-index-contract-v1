//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "./ICurio20.sol";
import "./IERC1155.sol";
import "./Common.sol";

/*
ID 101: Unwrapped CRO1
ID 102: Unwrapped CRO2... etc

ID 201: Wrapped CRO1
ID 202: Wrapped CRO2... etc

ID 301: Robek set
ID 302: Marisol set
ID 303: other artist... etc

ID 310: Full Set
ID 311: 1-10 set

Collabland can then be programmed to look for IDs for a set by looking at ID 1, or 2, etc

The new curio site can fetch all balances both wrapped and unwrapped in one call, by doing balanceOfBatch with IDs 101, 102...130, 201, 202...230

{
    101: ["unwrapped contract 1"]
    201: ["wrapper contract", 1]
    301: ["wrapper contract", [21, 22, 23]]
}

if id between 101-131
    use unwrapped contract
if id between 201-231
    use wrapped contract with id 1, 2, 3...
if id > 300
    use set mapping
*/

contract CurioIndex is CommonConstants {
    function balanceOf(address _owner, uint256 _id) external view returns (uint256) {
        console.log("calling balanceOf on curio wrapper for id %s", _id);

        uint256 bal;

        if (_id < 200) {
            // handle as unwrapped

        } else if (_id < 300) {
            require((_id - 200) < 31, "Invalid ID for wrapped curio");

            // handle as wrapped
            // id is 204... we want 4, so subtract 200
            bal = curioWrapperContract.balanceOf(_owner, _id - 200);
            console.log("received balance: %s", bal);

        } else {
            // handle as set

        }

        return bal;
    }
}
