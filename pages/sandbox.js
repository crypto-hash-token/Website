import { useState } from 'react'
import { ethers } from 'ethers'
import { Web3Modal } from 'web3modal'

import Image from 'next/image'
import cryptoHash from '../public/grid.png'

export default function Home() {
  return (
    <>

       <section id="Header bg-black">
        <div class="container bg-black">
          <div class="translate-x-100">
            <Image
              src={cryptoHash}
              width={1000}
              height={225}
            />
          </div>
          <div class="-translate-x-100">
            <Image
              src={cryptoHash}
              width={1000}
              height={225}
            />
          </div>
        </div>
      </section>

    </>
   )
 }
