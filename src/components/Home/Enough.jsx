import Image from 'next/image'
import React from 'react'

const Enough = () => {
    return (
        <div className='bg-[#0B0527] flex flex-col items-center gap-[5rem] min-h-[592px] py-20'>
            <div>
                <h2 className='text-[40px] font-semibold text-[#FFFFFF] text-center leading-12 p'>
                    Just <span className='text-[#FED449] italic'>enough</span> to get you going <br className='md:block hidden'/> everyday
                </h2>
            </div>
            <div className='md:w-[1200px] w-full px-3 flex md:flex-row flex-col gap-4 md:justify-between'>
                <div className='flex flex-col gap-4'>
                    <Image height={100} width={386.67} src={"/hold.svg"} alt='image' />
                    <div className='bg-[#35219C] md:w-[386.67px] w-full flex flex-col justify-center px-6 h-[168px] rounded-[10px]'>
                        <h2 className='text-white text-[28px] font-semibold'>
                            Personal Transfers
                        </h2>
                        <p className='text-[#EFDBFC] text-[16px] font-normal'>
                            Send Love, Send Support, Send Smiles!
                        </p>
                    </div>
                </div>
                <div className='flex md:flex-col flex-col-reverse gap-4'>
                    <div className='bg-[#E58A13] md:w-[386.67px] w-full flex flex-col justify-center px-6 h-[168px] rounded-[10px]'>
                        <h2 className='text-white text-[28px] font-semibold'>
                            Business Transfers
                        </h2>
                        <p className='text-[#EFDBFC] text-[16px] font-normal'>
                            Boss Moves? We've got your business transfers handled.
                        </p>
                    </div>
                    <Image height={100} width={386.67} src={"/sit.svg"} alt='image' />
                </div>
                <div className='flex flex-col gap-4'>
                    <Image height={100} width={386.67} src={"/light.svg"} alt='image' />
                    <div className='bg-[#EE2635] md:w-[386.67px] w-full flex flex-col justify-center px-4 h-[168px] rounded-[10px]'>
                        <h2 className='text-white text-[28px] font-semibold'>
                            Currency exchange
                        </h2>
                        <p className='text-[#EFDBFC] text-[16px] font-normal'>
                            Unlock the best exchange rates, and say hello to savings.
                        </p>
                    </div>
                </div>
            </div>
            <button className='w-[192px] text-[21px] font-semibold h-[57px] rounded-[12px] bg-[#FCFCFC] text-[#2E3539]'>
                Start Sending
            </button>
        </div>
    )
}

export default Enough