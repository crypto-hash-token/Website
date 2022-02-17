import { useState } from 'react'
import { ethers } from 'ethers'
import Web3Modal from 'web3modal'

import Image from 'next/image'
import PreMint from '../public/PreMint.jpeg'
import discord from '../public/Discord.png'
import twitter from '../public/Twitter.png'
import discordHover from '../public/DiscordHover.png'
import twitterHover from '../public/TwitterHover.png'

import { abi } from '/artifacts/contracts/MintPass.sol/MintPass.json'
import { mintpassaddress } from '../config'

// for Presale 250 Editions of ERC-1155
export default function MintPass () {
  const [formInput, updateFormInput] = useState({amount: ''})

  async function mint() {
    console.log(abi)
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner();
    const mintPassContract = await instantiateContract(signer);
    const { amount } = formInput
    if (!amount || amount > 2 || amount == 0) {
      alert("please specify either 1 or 2 as amount")
      return;
    }
    try{
      let tx = await mintPassContract.mint(amount, { value: (amount * 8 + '0000000000000000')});
      tx.wait();
      if(tx) alert(`${amount} tokens minted successfull :)`)
      if(!tx) alert(`transaction failed with error: ${tx.msg}`)
      console.log({tx})
    } catch (err) {
      console.log(err);
    }
  }

  async function instantiateContract(signer) {
    console.log(mintpassaddress);
    let contract = new ethers.Contract(mintpassaddress, abi, signer);
    return contract;
  }

  return (
  <>
    <section id="Head">
      <div className="bg-black px-20 pt-10">
       <h1 className="flex flex-col justify-center items-center py-10 px-20 text-yellow-400 text-3xl font-D3">
        MINTPASS
       </h1>
      </div>
      <div>
        <p className="flex flex-col justify-center items-center pb-5 text-white text-lg font-D3">
         250 ERC 1155 Assets Redeemable for FREE Mint
        </p>
      </div>
      <div>
      <h2 className="flex flex-col justify-center items-center text-white pb-3 text-2xl font-D3">
       0.1 ETH Each
      </h2>
     </div>
    </section>

    <section id="Pre-Mint">
     <div className="flex flex-col justify-center items-center bg-black">
       <div className="">
         <Image
           src={PreMint}
           width={333}
           height={333}
           layout="fixed"
         />
       </div>
      </div>
    </section>

        <section id="Selector">
          <div className="flex justify-center">
            <input
              placeholder="Qty, Limit 2 per Wallet"
              className="mt-8 border rounded p-4 bg-pink-200 text-center"
              onChange={e => updateFormInput({...formInput, amount: e.target.value})}
            />
          </div>
        </section>

    <section id="Button">
      <div className="flex justify-center bg-black">
        <div className="w-1/2 flex flex-col pb-12">
          <button onClick={mint} className="font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg">
            MINT
          </button>
        </div>
      </div>
    </section>

    <footer className="flex flex-col justify-center items-center bg-black pt-5">
      <div>
        <div>
          <a href="https://twitter.com/cryptohashtoken?s=21">
            <Image
              src={twitter}
              width={100}
              height={100}
            />
          </a>
          <a href="https://discord.com/invite/JhJrKYkn">
            <Image
              src={discord}
              width={100}
              height={100}
              longdesc="discord.gg"
            />
          </a>
       </div>
      </div>
      <div className="col-12 col-md-8 pb-3">
        <p className="stage last py-5 h2 pl-md-5 text-white text-center text-sm font-D3">2022 crypto-hash.io All Rights Reserved</p>
      </div>
     </footer>
  </>
  )
}
