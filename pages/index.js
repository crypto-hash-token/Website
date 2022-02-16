import { gsap } from 'gsap'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import discord from '../public/Discord.png'
import cryptoHashLong from '../public/gridLong.png'
import twitter from '../public/Twitter.png'



export default function Home() {

  useEffect(() => {
    gsap.to('#bg_1', {
      scrollTrigger: {
        trigger: '#bgs_wrapper',
        start: 'top 50%',
        end: 'bottom top',
        scrub: true
      },
      x: '-500px'
    })
    gsap.to('#bg_2', {
      scrollTrigger: {
        trigger: '#bgs_wrapper',
        start: 'top 50%',
        end: 'bottom top',
        scrub: true
      },
      x: '500px'
    })
  }, [])

  useEffect(() => {
    gsap.to('#crypto_heading', {
      scrollTrigger: {
        trigger: '#crypto_heading',
        start: 'top top',
        end: 'bottom 15%',
        scrub: true,
        onUpdate(e) {
          const floating_mint_btn = document.querySelector('#floating_mint_btn')

          floating_mint_btn.style.opacity = e.progress
          floating_mint_btn.style.transform = `translateY(${(1 - e.progress) * 20}px) translateX(-50%)`
        }
      },
      opacity: 0
    })
  }, [])


  return (
    <>

      <section id="Header" className="mt-8 max-w-full overflow-hidden">
        <div className="flex flex-col justify-center overflow-hidden items-center bg-black gap-10 -rotate-5" id="bgs_wrapper">
          <div id="bg_1" className="w-[6000px] bg-cover bg-repeat h-[225px]" style={{ backgroundSize: '2000px', backgroundImage: `url(/gridLong.png)` }}>
          </div>
          <div id="bg_2" className="w-[6000px] bg-cover bg-repeat h-[225px]" style={{ backgroundSize: '2000px', backgroundImage: `url(/gridLong.png)` }}>
          </div>
        </div>
      </section>

      <section id="about" className="mt-10" >
        <div className="bg-black px-20 py-20">
          <div className="row">
            <div className="col-12 col-lg-4"></div>
            <div className="col-12 col-lg-8">
              <p className="text-white h2 text-center text-lg font-D3 leading-loose">
              “Smoke to earn and earn to smoke” with crypto hash tokens. Earn yours with every purchase of crypto hash products. Our unique integrated technology provides cannabis users the experience to the worlds first smoke to earn community. Join us as we embark on a ride to the moon and beyond. Don’t forget, bring your ROBOT!
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

      {/* <section id="Button">
        <div className="flex justify-center bg-black">
          <div className="w-1/2 flex flex-col pb-12">
            <button href="/mint" className="font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg">
              MINT
            </button>
          </div>
        </div>
      </section> */}

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

      {/* Floating Mint Button --Start-- */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-fit opacity-0 translate-y-10 duration-200" id="floating_mint_btn" >
        <Link href="/mintpass">
          <a className="font-bold mt-4 bg-pink-500 hover:bg-pink-700 duration-150 text-white rounded text-base md:text-xl p-5 px-10 shadow-lg">
            MINT
          </a>
        </Link>
      </div>
      {/* Floating Mint Button --End-- */}

    </>
  )
}
