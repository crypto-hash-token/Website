import { useState } from 'react'
import { ethers } from 'ethers'
import { Web3Modal } from 'web3modal'

import Image from 'next/image'
import HASHToken from '../public/HASHToken.png'
import discord from '../public/Discord.png'
import twitter from '../public/Twitter.png'
import discordHover from '../public/DiscordHover.png'
import twitterHover from '../public/TwitterHover.png'

export default function Render() {
  return (
    <>
    <section id="Head">
      <div class="bg-black px-20 pt-10">
       <p class="flex flex-col justify-center items-center py-10 px-20 text-yellow-400 text-3xl font-D3">
        RENDER
       </p>
      </div>
   </section>

   <section id="Camera">
    <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>

      <style>
        .arjs-loader {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .arjs-loader div {
        text-align: center;
        font-size: 1.25em;
        color: white;
      }
      </style>

      <!-- rawgithack development URL -->
      <script src='https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js'></script>

    <body style='margin : 0px; overflow: hidden;'>
      <!-- minimal loader shown until image descriptors are loaded -->
        <div class="arjs-loader">
          <div>Loading, please wait...</div>
        </div>
      <a-scene
        vr-mode-ui="enabled: false;"
        renderer="logarithmicDepthBuffer: true;"
        embedded arjs='trackingMethod: best; sourceType: webcam; debugUIEnabled: false;'>

        <!-- use rawgithack to retrieve the correct url for nft marker (see 'trex' below) -->
        <a-nft
          type='nft' url='https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/trex-image/trex'
          smooth='true' smoothCount='10' smoothTolerance='0.01' smoothThreshold='5'>
         <a-entity
             gltf-model='https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf'
             scale="5 5 5"
             position="100 100 0"
             >
         </a-entity>
        </a-nft>
      <a-entity camera></a-entity>
     </a-scene>
    </body>
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
