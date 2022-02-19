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
    rinkeby: {
      url: 'https://rinkeby.infura.io/v3/95b5b9a081d94021a5028b149874b1ef',
      accounts: ["0xac89c17266ae6308c5099413557a3055dcd8cadea43ba5b53b02feced03363d4"]
    },
    },
    etherscan: {
      apiKey: "DD3IJSICG9T7GPP6PAHRTXM16PIRJZHQ3A"
    }
  };
