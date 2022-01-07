import { useState } from 'react'
import { ethers } from 'ethers'
import { Web3Modal } from 'web3modal'

import Image from 'next/image'
import cryptoHash from '../public/grid.png'
import discord from '../public/Discord.png'
import twitter from '../public/Twitter.png'

export default function Home() {
  return (
    <>

      <section id="Hero">
        <div class="hero-wrapper bg-black">
          <Image
            src={cryptoHash}
          />
        </div>
       </section>

       <section id="about">
          <div class="bg-black px-20 py-20">
            <div class="row">
              <div class="col-12 col-lg-4"></div>
            <div class="col-12 col-lg-8">
          <p class="text-white h2 text-center text-lg font-D3 leading-loose">
          Crypto Hash is a Fair Launch Project and the Worlds First “Smoke to Earn” community Token. We are integrating unique technology to provide an alternative experience to crypto and cannabis users across the globe. HASH is Earned by redeeming Authentic Crypto Hash products sold only by our Authorized Retailers. Join us as we embark on a ride to the moon and beyond, oh and don’t forget to bring your robot!
          </p>
            </div>
          </div>
        </div>
      </section>

      <section id="roadmap">
        <div class="bg-black">
          <div class="row pb-20">
            <div class="col-12 col-lg-4"></div>
            <div class="col-12 col-lg-8">
              <h2 class="text-yellow-400 mb-5 text-center text-6xl text-bold font-D3">ROADMAP</h2>
            </div>
          </div>
          <div class="row text-pink-500 mb-4">
            <div class="col-12 col-md-4 text-center text-xl text-bold font-D3 pb-5">
              <h3 class="h1">STAGE 1</h3>
            </div>
            <div class="col-12 col-md-8">
              <p class="stage py-1 h2 pl-md-5 text-center text-lg font-D3 pb-5 text-white">Produce Crypto Hash Joints</p>
            </div>
          </div>
          <div class="row text-pink-500 mb-4">
            <div class="col-12 col-md-4 text-center text-xl text-bold font-D3 pb-5">
              <h3 class="h1">STAGE 2</h3>
            </div>
            <div class="col-12 col-md-8 pb-5">
              <p class="stage py-1 h2 pl-md-5 text-center text-lg font-D3 text-white">Deploy CryptoHash Bonding Curve</p>
            </div>
          </div>
          <div class="row text-pink-500 mb-4">
            <div class="col-12 col-md-4 text-center text-xl text-bold font-D3 pb-5">
              <h3 class="h1">STAGE 3</h3>
            </div>
            <div class="col-12 col-md-8 pb-5">
              <p class="stage py-1 h2 pl-md-5 text-center text-lg font-D3 text-white">Distribute Products to Partner Retailers</p>
            </div>
          </div>
          <div class="row text-pink-500 mb-4">
            <div class="col-12 col-md-4 text-center text-xl text-bold font-D3 pb-5">
              <h3 class="h1">STAGE 4</h3>
            </div>
            <div class="col-12 col-md-8 pb-5">
              <p class="stage last py-1 h2 pl-md-5 text-center text-lg font-D3 text-white">Launch Crypto Hash Marketplace & NFT Drops</p>
            </div>
          </div>
        </div>
      </section>

      <footer class="flex items-center bg-black">
        <div>
          <Image class="flex items-center"
            src={twitter}
          />
          <Image
            src={discord}
          />
        </div>
        <div class="col-12 col-md-8">
          <p class="stage last py-1 h2 pl-md-5 text-white text-center text-sm font-D3">2022 crypto-hash.io All Rights Reserved</p>
        </div>
       </footer>

     </>
   )
 }
