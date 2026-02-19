import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='bg-[#0B0527] w-full flex flex-col py-10 items-center justify-end min-h-screen'>
      <div className='flex flex-col items-center md:pt-12'>
        <div className="relative mb-20">
          <Image src="/hero.svg" alt="Hero Image" width={1002} height={1022} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_50%,_#0B0527_75%)]" />
        </div>
        <div className='md:absolute flex flex-col items-center gap-5 px md:bottom-2 w-full'>
          <h2 className='text-center text-white md:text-[58px] text-[40px] font-medium md:leading-14 leading-10'>
            Sending money <span className='font-italic text-[#FED449]'>abroad</span> <br className='md:block hidden'/> just got cooler!
          </h2>
          <p className='text-center text-[#EFDBFC] font-normal'>
            Hey there world traveler! It’s time for you globetrotters to rejoice <br className='md:block hidden'/> cos’ sending money abroad just got stupid simple :)
          </p>
          <button className='w-[192px] text-[21px] font-semibold h-[57px] rounded-[12px] bg-[#FCFCFC] text-[#2E3539]'>
            Start Sending
          </button>
        </div>
      </div>
    </div>
  )
}


export default Hero