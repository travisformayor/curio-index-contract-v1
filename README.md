# Curio Index Contract

The Curio Index smart contract is a single point for querying Curio Cards balance information for the 2017 card smart contracts, the 2021 wrapper contract, and a collection of sets for wrapped cards. In place of performing 30 separate balance lookups of the original 2017 card contracts, this smart contract lets you perform one address balance lookup. It then pulls the balance from all thirty 2017 card contracts and the wrapper balance. For looking up the balance of specific sets, the contract returns the number of complete sets a given address has wrapped cards for.

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