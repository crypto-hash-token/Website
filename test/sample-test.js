const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("HASHMarket", function () {
  it("Should create and execute market sales", async function () {
    const Market = await ethers.getContratFactory("HASHMarket")
    const Market = await Markey.deploy()
    await market.deployed()
    const marketAddress = market.address

    const NFT = await ethers.getContratFactory("HASHMarket")
    const nft = await NFT.deploy(marketAddress)
    await nft.deployed()
    const nftContractAddress = nft.address

    let listingPrice = await market.getListingPrice()
    listingPrice = listingPrice.toString()

    const auctionPrice = ether.utils.parseUnits('1', 'ether')

    await nft.createToken("www.tokenloaction.com")
    await nft.createToken("www.tokenloaction2.com")

    await market.createMarketItem(nftContractAddress, 1, auctionPrice, { vlaue: listingPrice })
    await market.createMarketItem(nftContractAddress, 2, auctionPrice, { vlaue: listingPrice })

    const [_, buyerAddress] = await ethers.getSigners()

    await market.connect(buyerAddress).createMarketSale(nftContractAddress, 1, { value: auctionPrice})

    const items = await market.fetchMarketItems()

    console.log('items: ', items)
  });
});
