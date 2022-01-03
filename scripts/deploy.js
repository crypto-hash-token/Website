const hre = require("hardhat");
const fs = require('fs');

async function main() {
  const HASHMarket = await hre.ethers.getContractFactory("HASHMarket");
  const hashMarket = await HASHMarket.deploy();
  await hashMarket.deployed();
  console.log("hashMarket deployed to:", hashMarket.address);

  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = await NFT.deploy(hashMarket.address);
  await nft.deployed();
  console.log("nft deployed to:", nft.address);

let config = `
export const nftmarketplaceaddress = "${nftMarket.nftaddress}"
export const nftaddress = "${nft.address}"
`

let data = JSON.sting(config)
fs.writeFileSync('config.js, JSON.parse(data)')

}

main()
  .then(() => process.exit(0))
  .catch(error => {
  console.error(error);
  process.exit = (1);
});
