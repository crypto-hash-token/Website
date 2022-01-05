import { useState } from 'react'
import { ethers } from 'ethers'
import { create as ipfsHttpClient } from 'ipfs-Http-Client'
import { useRouter } from 'next/router'
import Web3Modal from 'web3modal'

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
    <div className="flex justify-center">
      <div className="w-1/2 flex flex-col pb-12">
        <button onClick={createItem} className="font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg">
          Connet Wallet
        </button>
      </div>
    </div>
  )
}
