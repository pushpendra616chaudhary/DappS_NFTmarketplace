require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
const fs = require('fs');
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 80001
    },
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/dwkjWGX6WYCm1aKlP1JiQyL0A6Jxbos8",
      accounts: ["d154ea2a8ad6617713df49b9d1b54681bd6485f0f0847077926719659a2fda79"]
    }
    
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};