# Curio Index Contract

The Curio Index smart contract is a single point for querying balance information for all of the 2017 Curio Card card smart contracts, the 2021 wrapper contract, and "Sets" for wrapped cards. Instead of needing to perform 30 seperate balance lookups for the 30 2017 card contracts, you can perform one address balance lookup on the Index and it will pull balances from all 30 2017 card contracts. Sets balance lookup will return the number of complete sets of cards an address has.

## ID Namespaces

- 100: Unwrapped Cards
  - 101 - 130
  - Unwrapped Native Cards 1 - 30
- 200: Wrapped Cards
  - 201 - 230
  - Wrapped Cards 1 - 30
- 300: Wrapped Sets
  - ID 301: story set (cards 1-10)
  - ID 302: cryptograffiti set (cards 11, 12, 13)
  - ID 303: phneep set (cards 14, 15, 16)
  - ID 304: cryptopop set (cards 17, 18, 19)
  - ID 305: robek set (cards 21, 22, 23)
  - ID 306: daniel friedman set (cards 24, 25, 26)
  - ID 307: marisol vengas set (cards 27, 28, 19)
  - ID 308: full set (cards 1 - 30)

## Contract Functions

```solidity
function balanceOf(address _owner, uint256 _id) external view returns (uint256)
```

```solidity
function balanceOfBatch(address[] calldata _owners, uint256[] calldata _ids) external view returns (uint256[] memory)
```

## Repo Files
- [Main Contract](contracts/CurioIndex.sol)
- [Contract Constants](contracts/Common.sol)
- [Curio Cards Native contract Interface](contracts/ICurio20.sol)
- [Curio Cards Wrapper contract Interface](contracts/IERC1155.sol)
- [Unit Tests](test/test.js)
- [Hardhat Config](hardhat.config.js)