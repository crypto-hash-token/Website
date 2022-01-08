require("dotenv").config();

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");

//const fs = require("fs")
//const privateKey = fs.readFileSync(".secret").toString()
const projectId = "95b5b9a081d94021a5028b149874b1ef"


module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337
    },
//    mumbai: {
//      url: 'https://polygon-mumbai.infura.io/v3/${projectId}',
//      accounts: []
//    },
  //  mainnet: {
  //    url: 'https://polygon-mainnet.infura.io/v3/${projectId}',
  //    accounts: [privateKey]
  //  },
  },
};
