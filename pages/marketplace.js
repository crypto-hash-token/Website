// import { ethers } from 'ethers'
const ethers = require("ethers")
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from 'web3modal'

import Image from 'next/image'
import discord from '../public/Discord.png'
import twitter from '../public/Twitter.png'
import discordHover from '../public/DiscordHover.png'
import twitterHover from '../public/TwitterHover.png'

import {
  nftaddress, nftmarketplaceaddress
} from '../config'

import NFT from '/artifacts/contracts/NFT.sol/NFT.json'
import Market from '/artifacts/contracts/HASHMarket.sol/HASHMarket.json'

let rpcEndpoint = null

if (process.env.NEXT_PUBLIC_WORKSPACE_URL) {
  rpcEndpoint = process.env.NEXT_PUBLIC_WORKSPACE_URL
}

export default function Marketplace() {
  const [nfts, setNfts] = useState([])
  const [loadingState, setLoadingState] = useState('not-loaded')
  useEffect(() => {
    loadNFTs()
  }, [])
  async function loadNFTs() {
    const provider = new ethers.providers.JsonRpcProvider()
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider)
    const marketContract = new ethers.Contract(nftmarketplaceaddress, Market.abi, provider)
    const data = await marketContract.fetchMarketItems()

    const items = await Promise.all(data.map(async i => {
      const tokenUri = await tokenContract.tokenURI(i.tokenId)
      const meta = await axios.get(tokenUri)
      let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
      let item = {
        price,
        tokenId: i.tokenId.toNumber(),
        seller: i.seller,
        owner: i.owner,
        image: meta.data.image,
        name: meta.data.name,
        description: meta.data.description,
      }
      return item
    }))
    setNfts(items)
    setLoadingState('loaded')
  }
  async function buyNft(nft) {
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.provider.Web3Provider(connection)
    const signer = provider.getsigner()
    const contract = new ethers.contract(nftmarketplaceaddress, Market.abi, signer)

    const price = ethers.utils.parseUnits(nft.price.toString(), 'ether')
    const transaction = await contract.createMarketSale(nftaddress, nft.tokenId, {
      value: price
    })
    await transaction.wait()
    loadNFTs()
  }
  if (loadingState == 'loaded' && !nfts.length) return (
    <>
      <h1 className="flex flex-col justify-center items-center px-20 py-10 text-yellow-400 text-3xl font-D3">No items in Marketplace</h1>

      <footer className="flex flex-col justify-center items-center bg-black pt-5">
        <div>
          <div>
            <Image
              src={twitter}
              width={100}
              height={100}
            />
            <Image
              src={discord}
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="col-12 col-md-8 pb-3">
          <p className="stage last py-5 h2 pl-md-5 text-white text-center text-sm font-D3">2022 crypto-hash.io All Rights Reserved</p>
        </div>
      </footer>

    </>
  )
  return (
    <>
      <div className="flex justify-cetner">
        <div className="pc-4" style={{ maxWidth: '1600px' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            {
              nfts.map((nft, i) => (
                <div key={i} className="boarder shadow rounded-xl overflow-hidden">
                  <img src={nft.image} />
                  <div className="p-4">
                    <p style={{ height: '64px' }} className="text-2xl font-semibold">{nft.name}</p>
                    <div style={{ height: '70px', overflow: 'hidden' }}>
                      <p className="text-gray-400">{nft.description}</p>
                    </div>
                  </div>
                  <div className="p-4 bg-black">
                    <p className="text-2xl mb-4 font-bold text-white">{nft.price} ETH</p>
                    <button className="w-full bg-pink-500 text-white font-bold py-2 px-12 rounded" onClick={() => buyNft(nft)}>Buy</button>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <footer className="flex flex-col justify-center items-center bg-black pt-5">
        <div>
          <div>
            <Image
              src={twitter}
              width={100}
              height={100}
            />
            <Image
              src={discord}
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="col-12 col-md-8 pb-3">
          <p className="stage last py-5 h2 pl-md-5 text-white text-center text-sm font-D3">2022 crypto-hash.io All Rights Reserved</p>
        </div>
      </footer>

    </>
  )
}
