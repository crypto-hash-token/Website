import { gsap } from 'gsap'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import discord from '../public/Discord.png'
import twitter from '../public/Twitter.png'



export default function Home() {

  const bgs_wrapper = useRef(null)
  const bg_1 = useRef(null)
  const bg_2 = useRef(null)
  const floating_mint_btn = useRef(null)
  const footer = useRef(null)

  useEffect(() => {
    gsap.to(bg_1.current, {
      scrollTrigger: {
        trigger: bgs_wrapper.current,
        start: 'top 50%',
        end: 'bottom top',
        scrub: true
      },
      x: '-500px'
    })
    gsap.to(bg_2.current, {
      scrollTrigger: {
        trigger: bgs_wrapper.current,
        start: 'top 50%',
        end: 'bottom top',
        scrub: true
      },
      x: '500px'
    })

    gsap.to('#crypto_heading', {
      scrollTrigger: {
        trigger: '#crypto_heading',
        start: 'top top',
        end: 'bottom 15%',
        scrub: true,
        onUpdate(e) {
          if (!floating_mint_btn?.current) return;
          floating_mint_btn.current.style.opacity = e.progress
          floating_mint_btn.current.style.pointerEvents = e.progress > 0 ? 'all' : 'none'
          floating_mint_btn.current.style.transform = `translateY(${(1 - e.progress) * 20}px)`
        }
      },
      opacity: 0
    })

  }, [bgs_wrapper, bg_1, bg_2, floating_mint_btn, footer])


  return (
    <>

      <section id="Header" className="mt-8 max-w-full overflow-hidden">
        <div className="flex flex-col justify-center overflow-hidden items-center bg-black md:gap-10 -rotate-5" ref={bgs_wrapper}>
          <div ref={bg_1} className="w-[6000px] bg-cover bg-repeat-x h-[225px] repeat_bg_mobile md:repeat_bg_desktop" style={{ backgroundImage: `url(/gridLong1.png)` }}>
          </div>
          <div ref={bg_2} className="w-[6000px] -mt-8 md:mt-0 bg-cover bg-repeat-x h-[225px] repeat_bg_mobile md:repeat_bg_desktop" style={{ backgroundImage: `url(/gridLong2.png)` }}>
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
              <p className="stage py-1 h2 pl-md-5 text-center text-lg font-D3 pb-5 text-white">Friends and Family Pre-Sale</p>
            </div>
          </div>
          <div className="row text-pink-500 mb-4">
            <div className="col-12 col-md-4 text-center text-xl text-bold font-D3 pb-5">
              <h3 className="h1">STAGE 2</h3>
            </div>
            <div className="col-12 col-md-8 pb-5">
              <p className="stage py-1 h2 pl-md-5 text-center text-lg font-D3 text-white">4/20 Launch Party</p>
            </div>
          </div>
          <div className="row text-pink-500 mb-4">
            <div className="col-12 col-md-4 text-center text-xl text-bold font-D3 pb-5">
              <h3 className="h1">STAGE 3</h3>
            </div>
            <div className="col-12 col-md-8 pb-5">
              <p className="stage py-1 h2 pl-md-5 text-center text-lg font-D3 text-white">Deploy Hash Token and Options Markets</p>
            </div>
          </div>
          <div className="row text-pink-500 mb-4">
            <div className="col-12 col-md-4 text-center text-xl text-bold font-D3 pb-5">
              <h3 className="h1">STAGE 4</h3>
            </div>
            <div className="col-12 col-md-8 pb-5">
              <p className="stage last py-1 h2 pl-md-5 text-center text-lg font-D3 text-white">Into the Metaverse</p>
            </div>
          </div>
        </div>
      </section>

      <section id="Button" className="sticky bottom-0 left-0 w-full flex justify-center pb-4 z-50">
        <Link href="/mintpass">
          <a className="font-bold bg-pink-500 hover:bg-pink-700 duration-150 text-white rounded text-base md:text-xl p-5 px-10 shadow-lg opacity-0 pointer-events-none" ref={floating_mint_btn} >
            MINT
          </a>
        </Link>
      </section>

      <footer className="flex flex-col justify-center items-center bg-black pt-5" ref={footer}>
        <div>
          <div>
          <a href="https://twitter.com/cryptohashtoken?s=21">
            <Image
              src={twitter}
              width={100}
              height={100}
            />
            </a>
            <a href="https://discord.gg/jWYvBXTn">
            <Image
              src={discord}
              width={100}
              height={100}
            />
            </a>
          </div>
        </div>
        <div className="col-12 col-md-8 pb-3">
          <p className="stage last py-5 h2 pl-md-5 text-white text-center text-sm font-D3">2022 crypto-hash.io All Rights Reserved</p>
        </div>
      </footer>
    </>
  )
}
