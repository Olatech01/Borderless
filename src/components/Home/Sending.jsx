import Image from 'next/image'
import React from 'react'

const Sending = () => {
    return (
        <div className='bg-[#FAFAFA] py-20 flex items-center justify-center px-3'>
            <div className='flex md:flex-row flex-col items-center md:justify-between md:w-[1200px] w-full'>
                <Image height={804} width={403} src={"/phone.svg"} alt='image' />
                <div className='flex flex-col gap-4'>
                    <div className='w-[213px] text-[16px] flex items-center justify-center text-[#5F44EC] font-semibold bg-[#8A75EB]/20 h-[38px] rounded-[12px]'>
                        Start sending money 💸
                    </div>
                    <h2 className='md:text-[40px] text-[30px] md:leading-12 leading-8 text- font-medium'>
                        Just <span className='text-[#5F44EC]'>download our app</span> and <br className='md:block hidden'/> start sending money in three <br className='md:block hidden'/> minutes tops
                    </h2>
                    <p className='text-[21px] text-[#6C747D] font-normal'>
                        Hey there world traveler! It’s time for you <br className='md:block hidden'/> globetrotters to rejoice cos’ sending money abroad <br className='md:block hidden'/> just got stupid simple :)
                    </p>
                    <button className='bg-[#2E3539] text-[16px] font-semibold text-white w-[155px] h-[56px] rounded-[12px]'>
                        See how
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sending