require("@nomiclabs/hardhat-waffle");

const ETH_NODE_URL = process.env.ETH_NODE_URL;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337,
      forking: {
        url: ETH_NODE_URL,
        blockNumber: 13181000
      },
    },
  },
};
