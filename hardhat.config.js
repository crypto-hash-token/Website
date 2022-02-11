require("dotenv").config();

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");

//const fs = require('fs')
//const privateKey = fs.readFileSync(".secret").toString()
const projectId = "95b5b9a081d94021a5028b149874b1ef"


module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: 'https://mainnet.infura.io/v3/95b5b9a081d94021a5028b149874b1ef',
      accounts: ["0x8526e61be67420a581ad5d1f41e0d5f27db48abe4e46b1537a9136d2662d40a4"]
    },
  //  mainnet: {
  //    url: 'https://polygon-mainnet.infura.io/v3/${projectId}',
  //    accounts: [privateKey]
  //  },
  },
};
