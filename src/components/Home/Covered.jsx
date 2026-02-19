import Image from 'next/image'
import React from 'react'

const Covered = () => {
    return (
        <div className='flex items-center justify-center bg-[#FFFBEE]'>
            <div className='flex md:flex-row items-center gap-10 flex-col jmd:ustify-between md:w-[1200px] md:py-0 py-20 w-full px-3'>
                <div className='flex flex-col gap-5'>
                    <div className='text-[16px] flex items-center px-[14px] py-[8px] justify-center text-[#48934D] font-semibold bg-gradient-to-r from-[#826400] from-[#FEE9A4] h-[38px] rounded-[12px]'>
                        Supercharged for 127+ countries  🚀
                    </div>
                    <h2 className='md:text-[40px] text-[30px] font-bold md:leading-12 leading-8'>
                        From Tokyo to <br className='md:block hidden'/>
                        Timbuktu, we’ve got <br className='md:block hidden'/>
                        you <span className='text-[#B62619] italic'>covered</span>
                    </h2>
                </div>
                <Image height={100} width={550} src={"/flags.svg"} alt='img' />
            </div>
        </div>
    )
}

export default Covered