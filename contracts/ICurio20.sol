//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

// Natice Curio Cards token contract interface
interface ICurio20 {
    function balanceOf(address account) external view returns (uint256);
}
