require("dotenv").config();

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");

const projectId = "95b5b9a081d94021a5028b149874b1ef"


module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337
    },
    rinkeby: {
      url: 'https://rinkeby.infura.io/v3/95b5b9a081d94021a5028b149874b1ef',
      accounts: [process.env.PRIVATE_KEY]
    },
    mainnet: {
      url: 'https://mainnet.infura.io/v3/95b5b9a081d94021a5028b149874b1ef',
      accounts: [process.env.PRIVATE_KEY_M]
    },
    },
    etherscan: {
      apiKey: "DD3IJSICG9T7GPP6PAHRTXM16PIRJZHQ3A"
    }
  };
