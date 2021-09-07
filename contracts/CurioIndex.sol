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

ID 301: Phneep set
ID 302: Cryptograffit set
ID 303: other artist... etc

ID 310: Full Set
ID 311: 1-10 set

Collabland can then be programmed to look for IDs for a set by looking at ID 1, or 2, etc

The new curio site can fetch all balances both wrapped and unwrapped in one call, by doing balanceOfBatch with IDs 101, 102...130, 201, 202...230

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
        uint256[] memory batchBal;

        if (_id < 200) {
            require(_id > 100, "Invalid ID under 101");
            require((_id - 100) < 31, "Invalid ID for unwrapped curio");
            // handle as unwrapped
            // id is 101 and we want 0 (first array position), so subract 101
            bal = unwrappedCards[_id - 101].balanceOf(_owner);
            console.log("received balance from cro%s: %s", _id - 100, bal);
        } else if (_id < 300) {
            require((_id - 200) < 31, "Invalid ID for wrapped curio");
            // handle as wrapped
            // id is 204 and we want 4, so subtract 200
            bal = curioWrapperContract.balanceOf(_owner, _id - 200);
            console.log("received balance: %s", bal);
        } else {
            // handle as wrapped set
            // function balanceOfBatch(address[] calldata _owners, uint256[] calldata _ids) external view returns (uint256[] memory);

            // First only check for the Story Set
            uint256[] memory setCards = new uint256[](10); // allocate length 10 in memory
            setCards[0] = 1;
            setCards[1] = 2;
            setCards[2] = 3;
            setCards[3] = 4;
            setCards[4] = 5;
            setCards[5] = 6;
            setCards[6] = 7;
            setCards[7] = 8;
            setCards[8] = 9;
            setCards[9] = 10;

            address[] memory ownerArray = new address[](10);
            for (uint256 i = 0; i < setCards.length; i++) {
                ownerArray[i] = _owner;
            }

            console.log("set cards length: %s", setCards.length);
            console.log("owner array length: %s", ownerArray.length);

            batchBal = curioWrapperContract.balanceOfBatch(ownerArray, setCards);
            console.log("recieved balances for story set: %s", batchBal[0]);

            uint256 smallest = batchBal[0];
            for (uint256 i = 1; i < batchBal.length; i++) {
                if (smallest > batchBal[i]) {
                    smallest = batchBal[i];
                }
            }

            bal = smallest;
        }

        return bal;
    }
}
