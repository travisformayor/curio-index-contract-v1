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

// 0: story, 1: full, 2: phneep, 3: cryptograffiti, 4: cryptopop, 5: robek, 6: daniel friedman, 7: marisol vengas
ID 301: Story
ID 302: Full
ID 303: Cryptograffiti
ID 304: Phneep
etc
*/

contract CurioIndex is CommonConstants {
    function balanceOf(address _owner, uint256 _id) external view returns (uint256) {
        console.log("calling balanceOf for id %s", _id);

        uint256 bal;

        if (_id < 200) {
            require(_id > 100, "Invalid ID: unwrapped id under 101");
            require((_id - 100) < 31, "Invalid ID: unwrapped id over 130");
            // handle as unwrapped
            // if id is 101 and we want 0 (first array position), subract 101
            bal = unwrappedCards[_id - 101].balanceOf(_owner);
            console.log("received cro%s balance: %s", _id - 100, bal);
        } else if (_id > 200 && _id < 300) {
            require((_id - 200) < 31, "Invalid ID: wrapped curio id over 30");
            // handle as wrapped
            // if id is 201 and we want 1 (wrapper token id), subract 200
            bal = curioWrapperContract.balanceOf(_owner, _id - 200);
            console.log("received wrapped balance: %s", bal);
        } else {
            require((_id - 301) < 8, "Invalid ID: curio set id over 308");
            // handle as wrapped set
            // id is 301 and we want 0 (first array position), subract 301
            address[] memory ownerArray = new address[](cardSets[_id - 301].length);
            for (uint256 i = 0; i < cardSets[_id - 301].length; i++) {
                ownerArray[i] = _owner;
            }

            uint256[] memory batchBal = curioWrapperContract.balanceOfBatch(ownerArray, cardSets[_id - 301]);

            uint256 smallest = batchBal[0];
            for (uint256 i = 1; i < batchBal.length; i++) {
                if (smallest > batchBal[i]) {
                    smallest = batchBal[i];
                }
            }
            bal = smallest;
            console.log("recieved set %s balance: %s", _id, bal);
        }

        return bal;
    }
}
