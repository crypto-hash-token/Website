import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-black">
      <nav className="boarder-b p-6 bg-black text-center">
        <p className="text-8xl font-bold text-yellow-400 font-D3 text-center pt-10 pb-10">CRYPTO HASH</p>
        <div className="flex mt-4 justify-center">
          <Link href="/">
            <a className="mr-6 text-pink-500 font-D3">
              Home
            </a>
          </Link>
          <Link href="/redeem">
            <a className="mr-6 text-pink-500 font-D3">
               Redeem
            </a>
          </Link>
          <Link href="/mint">
            <a className="mr-6 text-pink-500 font-D3">
              Mint
            </a>
          </Link>
          <Link href="/marketplace">
            <a className="mr-6 text-pink-500 font-D3">
              Marketplace
            </a>
          </Link>
          <Link href="/my-assets">
            <a className="mr-6 text-pink-500 font-D3">
              My Digital Asset
            </a>
          </Link>
          <Link href="/render">
            <a className="mr-6 text-pink-500 font-D3">
               Render
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp




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
