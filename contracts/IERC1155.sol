//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

// Wrapped Curio Cards token contract interface
interface IERC1155 {
    function balanceOf(address _owner, uint256 _id) external view returns (uint256);
    function balanceOfBatch(address[] calldata _owners, uint256[] calldata _ids) external view returns (uint256[] memory);
}
