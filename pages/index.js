import { useState } from 'react'
import { ethers } from 'ethers'
import { Web3Modal } from 'web3modal'

import Link from 'next/link'
import Mint from './mint'

import Image from 'next/image'
import cryptoHash from '../public/grid.png'
import cryptoHashLong from '../public/gridLong.png'
import discord from '../public/Discord.png'
import twitter from '../public/Twitter.png'
import discordHover from '../public/DiscordHover.png'
import twitterHover from '../public/TwitterHover.png'

export default function Home() {
  return (
    <>

    <section id="Header">
     <div className="flex flex-col justify-center items-center bg-black py-5">
       <div className="-rotate-5 py-5 row-span-3 row-start-3 translate-x-75">
         <Image
           src={cryptoHashLong}
           width={2000}
           height={225}
           layout="fixed"
         />
       </div>
       <div className="bg-black">
         <div className="-rotate-5 py-5 row-span-3 -translate-x-50">
           <Image
             src={cryptoHashLong}
             width={2000}
             height={225}
             layout="fixed"
             />
         </div>
       </div>
     </div>
   </section>

       <section id="about">
          <div className="bg-black px-20 py-20">
            <div className="row">
              <div className="col-12 col-lg-4"></div>
            <div className="col-12 col-lg-8">
          <p className="text-white h2 text-center text-lg font-D3 leading-loose">
          Crypto Hash is a Fair Launch Project and the Worlds First “Smoke to Earn” community Token. We are integrating unique technology to provide an alternative experience to crypto and cannabis users across the globe. HASH is Earned by redeeming Authentic Crypto Hash products sold only by our Authorized Retailers. Join us as we embark on a ride to the moon and beyond, oh and don’t forget to bring your robot!
          </p>
            </div>
          </div>
        </div>
      </section>

      <section id="roadmap">
        <div className="bg-black">
          <div className="row pb-20">
            <div className="col-12 col-lg-4"></div>
            <div className="col-12 col-lg-8">
              <h2 className="text-yellow-400 mb-5 text-center text-6xl text-bold font-D3">ROADMAP</h2>
            </div>
          </div>
          <div className="row text-pink-500 mb-4">
            <div className="col-12 col-md-4 text-center text-xl text-bold font-D3 pb-5">
              <h3 className="h1">STAGE 1</h3>
            </div>
            <div className="col-12 col-md-8">
              <p className="stage py-1 h2 pl-md-5 text-center text-lg font-D3 pb-5 text-white">Produce Crypto Hash Joints</p>
            </div>
          </div>
          <div className="row text-pink-500 mb-4">
            <div className="col-12 col-md-4 text-center text-xl text-bold font-D3 pb-5">
              <h3 className="h1">STAGE 2</h3>
            </div>
            <div className="col-12 col-md-8 pb-5">
              <p className="stage py-1 h2 pl-md-5 text-center text-lg font-D3 text-white">Deploy CryptoHash Bonding Curve</p>
            </div>
          </div>
          <div className="row text-pink-500 mb-4">
            <div className="col-12 col-md-4 text-center text-xl text-bold font-D3 pb-5">
              <h3 className="h1">STAGE 3</h3>
            </div>
            <div className="col-12 col-md-8 pb-5">
              <p className="stage py-1 h2 pl-md-5 text-center text-lg font-D3 text-white">Distribute Products to Partner Retailers</p>
            </div>
          </div>
          <div className="row text-pink-500 mb-4">
            <div className="col-12 col-md-4 text-center text-xl text-bold font-D3 pb-5">
              <h3 className="h1">STAGE 4</h3>
            </div>
            <div className="col-12 col-md-8 pb-5">
              <p className="stage last py-1 h2 pl-md-5 text-center text-lg font-D3 text-white">Launch Crypto Hash Marketplace & NFT Drops</p>
            </div>
          </div>
        </div>
      </section>

      <section id="Button">
        <div className="flex justify-center bg-black">
          <div className="w-1/2 flex flex-col pb-12">
            <button href="/mint" className="font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg">
              MINT
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
