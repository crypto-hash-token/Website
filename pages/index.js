import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from 'web3modal'

<<<<<<< HEAD
<<<<<<< HEAD
import Image from 'next/image'
import cryptoHash from '../public/grid.png'
=======
import {
  nftaddress, nftmarketplaceaddress
} from '../config'
>>>>>>> parent of 864a1f1 (Updated Home Page and Added Mint Page)

import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
import Market from '../artifacts/contracts/HASHMarket.sol/HASHMarket.json'

let rpcEndpoint = null

<<<<<<< HEAD
      <section id="roadmap">
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-4"></div>
            <div class="col-12 col-lg-8">
              <h2 class="text-black mb-5 text-center text-6xl font-bold font-D3">Roadmap</h2>
            </div>
          </div>
          <div class="row text-black mb-4">
            <div class="col-12 col-md-4 text-center text-2xl">
              <h3 class="h1">Stage 1</h3>
            </div>
            <div class="col-12 col-md-8">
              <p class="stage py-1 h2 pl-md-5 text-center text-md">Produce Crypto Hash Joints</p>
            </div>
          </div>
          <div class="row text-black mb-4">
            <div class="col-12 col-md-4 text-center text-2xl">
              <h3 class="h1">Stage 2</h3>
            </div>
            <div class="col-12 col-md-8">
              <p class="stage py-1 h2 pl-md-5 text-center text-md">Deploy CryptoHash Bonding Curve</p>
            </div>
          </div>
          <div class="row text-black mb-4">
            <div class="col-12 col-md-4 text-center text-2xl">
              <h3 class="h1">Stage 3</h3>
            </div>
            <div class="col-12 col-md-8">
              <p class="stage py-1 h2 pl-md-5 text-center text-md">Distribute Products to Partner Retailers</p>
            </div>
          </div>
          <div class="row text-black mb-4">
            <div class="col-12 col-md-4 text-center text-2xl">
              <h3 class="h1">Stage 4</h3>
            </div>
            <div class="col-12 col-md-8">
              <p class="stage last py-1 h2 pl-md-5 text-center text-md">Launch Crypto Hash Marketplace & NFT Drops</p>
            </div>
          </div>
=======
import {
  nftaddress, nftmarketplaceaddress
} from '../config'

import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
import Market from '../artifacts/contracts/HASHMarket.sol/HASHMarket.json'

export default function Home() {
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
        return Item
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
   loadNFts()
 }

  if (loadingState == 'loaded' && !nfts.length) return (
    <h1 className="px-20 py-10 text-3xl">No items in Marketplace</h1>
  )

  return (
    <div className="flex justify-cetner">
      <div className="pc-4" style={{ maxWidth: '1600px'}}>
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
>>>>>>> parent of 86bdd57 (Cleaned up some things)
        </div>
      </section>
=======
if (process.env.NEXT_PUBLIC_WORKSPACE_URL) {
  rpcEndpoint = process.env.NEXT_PUBLIC_WORKSPACE_URL
}
>>>>>>> parent of 864a1f1 (Updated Home Page and Added Mint Page)

export default function Home() {
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
        return Item
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
  if (loadingState == 'loaded' && !nfts.length) return (<h1 className="px-20 py-10 text-3xl">No items in Marketplace</h1>)
  return (
    <div className="flex justify-cetner">
      <div className="pc-4" style={{ maxWidth: '1600px'}}>
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
  )
}
