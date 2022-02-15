import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from 'web3modal'

import Image from 'next/image'
import discord from '../public/Discord.png'
import twitter from '../public/Twitter.png'
import discordHover from '../public/DiscordHover.png'
import twitterHover from '../public/TwitterHover.png'

import {
  nftmarketplaceaddress, nftaddress
} from '../config'

import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
import Market from '../artifacts/contracts/HASHMarket.sol/HASHMarket.json'

export default function MyAssets() {
  const [nfts, setNfts] = useState([])
  const [loadingState, setLoadingState] = useState('not-loaded')
  useEffect(() => {
    loadNfts()
  }, [])
  async function loadNfts() {
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()

    const marketContract = new ethers.Contract(nftmarketplaceaddress, Market.abi, signer)
    console.log(marketContract)
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider)
    console.log(tokenContract)
    const data = await marketContract.fetchMyNFTs()


    const items = await Promise.all(data.map(async i => {
      const tokenUri = await tokenContract.tokenURI(i.tokenId)
      const meta = await axios.get(tokenUri)
      let price = ethers.utils.formatUnits(i.price.toString(),'ether')
      let item = {
        price,
        tokenId: i.tokenId.toNumber(),
        seller: i.seller,
        owner: i.owner,
        image: meta.data.image,
      }
      return item
    }))
    setNfts(items)
    setLoadingState('loaded')
  }
  if (loadingState == 'loaded' && !nfts.length) return (
  <>
    <h1 className="flex justify-center py-10 px-20 text-yellow-400 text-3xl font-D3">No Assets Owned</h1>
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
    <div className="flex justify-center">
      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
        {
          nfts.map((nft, i) => (
            <div key={i} className="boarder shadow rounded-xl overflow-hidden">
              <img src={nft.image} className="rounded" />
              <div className="p-4 bg-black">
                <p className="text-2xl front-bold text-white">Price - {nft.price} Eth </p>
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
