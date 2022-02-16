import '../styles/globals.css'
import Link from 'next/link'
import { useEffect } from 'react'
import { gsap } from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
const ScrollTrigger = require('gsap/dist/ScrollTrigger')


gsap.registerPlugin(ScrollTrigger)

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="bg-black">
        <p className="text-8xl font-bold text-yellow-400 font-D3 text-center pt-20 pb-14" id="crypto_heading">CRYPTO HASH</p>
        <nav className="boarder-b p-6 bg-black text-center sticky top-0 left-0 w-full z-50">
          <div className="flex mt-4 justify-center">
            <Link href="/">
              <a className="mr-6 text-pink-500 font-D3">
                Home
              </a>
            </Link>
            <Link href="/mintpass">
              <a className="mr-6 text-pink-500 font-D3">
                Mint
              </a>
            </Link>
            <Link href="/redeem">
              <a className="mr-6 text-pink-500 font-D3">
                Redeem
              </a>
            </Link>
          </div>
        </nav>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp



//<Link href="/my-assets">
//  <a className="mr-6 text-pink-500 font-D3">
//    My Digital Asset
//  </a>
//</Link>
//<Link href="/sandbox">
//  <a className="mr-6 text-pink-500 font-D3">
//    Sandbox
//  </a>
//</Link>
//<Link href="/create-item">
//  <a className="mr-6 text-pink-500 font-D3">
//    Sell Digital Asset
//  </a>
//</Link>
//<Link href="/creator-dashboard">
//  <a className="mr-6 text-pink-500 font-D3">
//    Creator Dashboard
//  </a>
//</Link>
//<Link href="/render">
//  <a className="mr-6 text-pink-500 font-D3">
//     Render
//  </a>
//</Link>
//      <Link href="/marketplace">
//        <a className="mr-6 text-pink-500 font-D3">
//          Marketplace
//        </a>
//      </Link>
