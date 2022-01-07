import { useState } from 'react'
import { ethers } from 'ethers'
import { Web3Modal } from 'web3modal'

import Image from 'next/image'
import cryptoHash from '../public/grid.png'

export default function Home() {
  return (
    <>

       <section id="Header">
        <div class="bg-black">
          <div class="-rotate-10 py-5 row-span-2 translate-x-75">
            <Image
              src={cryptoHash}
              width={1000}
              height={225}
            />
          </div>
          <div class="bg-black">
            <div class="-rotate-10 py-5 row-span-2 -translate-x-50">
              <Image
                src={cryptoHash}
                width={1000}
                height={225}
                />
            </div>
          </div>
        </div>
      </section>

    </>
   )
 }
