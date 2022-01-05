import { useState } from 'react'
import { ethers } from 'ethers'
import { Web3Modal } from 'web3modal'

import Image from 'next/image'
import cryptoHash from '../public/grid.png'

export default function Home() {
  return (
    <>
       <Image
         src={cryptoHash}
       />

       <section id="about">
          <div class="container">
            <div class="row">
              <div class="col-12 col-lg-4"></div>
            <div class="col-12 col-lg-8">
          <p class="text-black h2 text-center text-md-left">
          "Crypto Hash is a Fair Launch Project and the Worlds First “Smoke to Earn” community Token. We are integrating unique technology to provide an alternative experience to crypto and cannabis users across the globe. HASH is Earned by redeeming Authentic Crypto Hash products sold only by our Authorized Retailers. Join us as we embark on a ride to the moon and beyond, oh and don’t forget to bring your robot!"
        </p>
            </div>
          </div>
        </div>
      </section>

      <section id="roadmap">
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-4"></div>
            <div class="col-12 col-lg-8">
              <h2 class="text-black mb-5 text-center text-lg-left">Roadmap</h2>
            </div>
          </div>
          <div class="row text-black mb-4">
            <div class="col-12 col-md-4 text-center text-md-right">
              <h3 class="h1">Stage 1</h3>
            </div>
            <div class="col-12 col-md-8">
              <p class="stage py-1 h2 pl-md-5 text-center text-md-left">Produce Crypto Hash Joints</p>
            </div>
          </div>
          <div class="row text-black mb-4">
            <div class="col-12 col-md-4 text-center text-md-right">
              <h3 class="h1">Stage 2</h3>
            </div>
            <div class="col-12 col-md-8">
              <p class="stage py-1 h2 pl-md-5 text-center text-md-left">Deploy CryptoHash Bonding Curve</p>
            </div>
          </div>
          <div class="row text-black mb-4">
            <div class="col-12 col-md-4 text-center text-md-right">
              <h3 class="h1">Stage 3</h3>
            </div>
            <div class="col-12 col-md-8">
              <p class="stage py-1 h2 pl-md-5 text-center text-md-left">Distribute Products to Partner Retailers</p>
            </div>
          </div>
          <div class="row text-black mb-4">
            <div class="col-12 col-md-4 text-center text-md-right">
              <h3 class="h1">Stage 4</h3>
            </div>
            <div class="col-12 col-md-8">
              <p class="stage last py-1 h2 pl-md-5 text-center text-md-left">Launch Crypto Hash Marketplace & NFT Drops</p>
            </div>
          </div>
        </div>
      </section>

      Add Footer Twitter - Discord - IG

     </>
   )
 }
