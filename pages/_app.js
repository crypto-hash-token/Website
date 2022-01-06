import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="boarder-b p-6">
        <p className="text-4xl font-bold">CRYPTO HASH</p>
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-6 text-pink-500">
              Home
            </a>
          </Link>
          <Link href="/redeem">
            <a className="mr-6 text-pink-500">
              Redeem
            </a>
          </Link>
          <Link href="/mint">
            <a className="mr-6 text-pink-500">
              Mint
            </a>
          </Link>
          <Link href="/marketplace">
            <a className="mr-6 text-pink-500">
              Marketplace
            </a>
          </Link>
          <Link href="/my-assets">
            <a className="mr-6 text-pink-500">
              My Digital Asset
            </a>
          </Link>
          <Link href="/sandbox">
            <a className="mr-6 text-pink-500">
              Sandbox
            </a>
          </Link>
          <Link href="/create-item">
            <a className="mr-6 text-pink-500">
              Sell Digital Asset
            </a>
          </Link>
          <Link href="/creator-dashboard">
            <a className="mr-6 text-pink-500">
              Creator Dashboard
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
