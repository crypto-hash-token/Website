import { useState } from 'react'
import { ethers } from 'ethers'
import { Web3Modal } from 'web3modal'

import Image from 'next/image'
import cryptoHash from '../public/grid.png'

export default function Home() {
  return (
    <>

       <section id="Header">
       <div>
        <image class="bg-black py-5 rotate-30 translate-x-100" src="../public/grid.png">  </image>
       </div>
        <div class="bg-black py-5 row-span-2 rotate-30 translate-x-100">
          <div>
            <Image
              src={cryptoHash}
              width={1000}
              height={225}
            />
          </div>
          <div class="bg-black py-5 row-span-2 rotate-30 -translate-x-100">
            <div>
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
