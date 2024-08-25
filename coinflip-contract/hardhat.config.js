require('@nomiclabs/hardhat-etherscan');

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://goerli.infura.io/v3/YOUR_INFURA_PROJECT_ID",
      accounts: [`0x${YOUR_PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: "YOUR_ETHERSCAN_API_KEY"
  }
};
