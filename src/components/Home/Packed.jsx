import React from 'react'
import { data } from '../constants/data'
import Image from 'next/image'

const Packed = () => {

    return (
        <div className='flex flex-col items-center py-20 gap-[5rem] justify-center'>
            <div className='flex flex-col items-center gap-5'>
                <div className='text-[16px] flex items-center px-[14px] py-[8px] justify-center text-[#48934D] font-semibold bg-[#48934D]/20 h-[38px] rounded-[12px]'>
                    Packed with powerful features 🔥
                </div>
                <h2 className='md:text-[40px] text-[30px] text-center md:leading-12 leading-8 font-bold'>
                    A whole lot more than just sending <span className='italic text-[#48934D]'>money</span>. <br className='md:block hidden'/> We’re on steroids!
                </h2>
                <p className='text-[21px] text-center leading-6 text-[#6C747D] font-normal'>
                    Hey there world traveler! It’s time for you globetrotters to rejoice cos’ sending <br className='md:block hidden'/> money abroad just got stupid simple :)
                </p>
            </div>
            <div className='md:w-[1200px] w-full grid md:grid-cols-3 grid-cols-1 space-x-7 space-y-10 px-3'>
                {data.map((item, index) => (
                    <div key={index} className='flex flex-col gap-2'>
                        <Image height={48} width={48} src={item.image} alt={item.title} />
                        <h2 className='text-[#2E3539] text-[21px] font-semibold'>
                            {item.title}
                        </h2>
                        <p className='text-[16px] font-normal text-[6C747D]'>
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Packed