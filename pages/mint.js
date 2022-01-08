import { useState } from 'react'
import { ethers } from 'ethers'
import { create as ipfsHttpClient } from 'ipfs-Http-Client'
import { useRouter } from 'next/router'
import Web3Modal from 'web3modal'

import Image from 'next/image'
import PreMint from '../public/PreMint.jpeg'
import discord from '../public/Discord.png'
import twitter from '../public/Twitter.png'
import discordHover from '../public/DiscordHover.png'
import twitterHover from '../public/TwitterHover.png'

const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

import {
  nftaddress, nftmarketplaceaddress
} from '../config'

import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
import Market from '../artifacts/contracts/HASHMarket.sol/HASHMarket.json'
//import Mint from '../artifacts/contracts/Mint.sol/Mint.json'

// Update to Function "Mint" Reference Mint.sol contract to generate Robots
// for Presale 250 Editions of ERC-1155, Could create a second "Premint" Function
export default function CreateItem () {
  const [fileUrl, setFileUrl] = useState(null)
  const [formInput, updateFormInput] = useState({ price: '', name: '', description: ''})
  const router = useRouter()

  async function onChange(e) {
    const file = e.target.files[0]
    try{
      const added = await client.add(
        file,
        {
          progress: (prog) => console.log('received: ${prog}')
        }
      )
      const url = 'https://ipfs.infura.io/ipfs/${added.path}'
      setFileUrl(url)
    } catch (e) {
      console.log(e)
    }
  }
  async function createItem() {
    const { name, description, price } = formInput
    if (!name || !description || !price || !fileUrl) return

    const data = JSON.stringify({
      name, description, image: fileUrl
    })
    try {
      const added = await client.add(data)
      const url = 'https://ipfs.infura.io/ipfs/${added.path}'

      createSale(url)
    } catch (error) {
      console.log('Error uploading files: ', error)
    }
  }

  return (
  <>
    <section id="Head">
      <div class="bg-black px-20 pt-10">
       <h1 class="flex flex-col justify-center items-center py-10 px-20 text-yellow-400 text-3xl font-D3">
        PRE-MINT
       </h1>
      </div>
      <div>
        <p class="flex flex-col justify-center items-center pb-5 text-yellow-400 text-lg font-D3">
         250 ERC 1155 Assets Redeemable for FREE Mint dunring Whitelist Sale
        </p>
      </div>
      <div>
      <h2 class="flex flex-col justify-center items-center text-yellow-400 text-2xl font-D3">
       .08 ETH Each
      </h2>
     </div>
    </section>

    <section id="Pre-Mint">
     <div class="flex flex-col justify-center items-center bg-black">
       <div class="">
         <Image
           src={PreMint}
           width={333}
           height={333}
           layout="fixed"
         />
       </div>
      </div>
    </section>

    <section id="Button">
      <div className="flex justify-center bg-black">
        <div className="w-1/2 flex flex-col pb-12">
          <button onClick={createItem} className="font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg">
            Connet Wallet
          </button>
        </div>
      </div>
    </section>

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
      <div class="col-12 col-md-8 pb-3">
        <p class="stage last py-5 h2 pl-md-5 text-white text-center text-sm font-D3">2022 crypto-hash.io All Rights Reserved</p>
      </div>
     </footer>
  </>
  )
}
