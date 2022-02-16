import { useState } from 'react'
import { ethers } from 'ethers'
import { Web3Modal } from 'web3modal'

import Image from 'next/image'
import HASHToken from '../public/HASHToken.png'
import discord from '../public/Discord.png'
import twitter from '../public/Twitter.png'
import discordHover from '../public/DiscordHover.png'
import twitterHover from '../public/TwitterHover.png'

export default function Redeem() {
  return (
    <>
    <section id="Head">
      <div className="bg-black px-20 pt-10">
       <p className="flex flex-col justify-center items-center py-10 px-20 text-yellow-400 text-3xl font-D3">
        REDEEM
       </p>
      </div>
      <div>
        <p className="flex flex-col justify-center items-center pb-5 text-white text-lg font-D3">
         Smoke to Earn and Earn to Smoke
        </p>
      </div>
   </section>

   <section id="Capture">
    <div className="flex flex-col justify-center items-center bg-black">
      <div className="">
        <Image
          src={HASHToken}
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
        <button onClick={Redeem} className="font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg">
          Coming Soon
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
     <div className="col-12 col-md-8 pb-3">
       <p className="stage last py-5 h2 pl-md-5 text-white text-center text-sm font-D3">2022 crypto-hash.io All Rights Reserved</p>
     </div>
    </footer>

   </>
  )
}
