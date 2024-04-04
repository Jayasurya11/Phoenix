import React from 'react'

const Banner = () => {
  return (
    <div className='px-4 lg:px-12 flex flex-col lg:flex-row justify-evenly gap-4'>
        <div className='relative'>
            <img src="/banner/discount_img01.jpg"/>
            <div className='absolute right-5 top-0 lg:top-2 text-white font-bold text-sm lg:text-lg flex flex-col justify-center items-center h-full'>
                <p className='text-sm'>HEALTHY FOOD</p>
                <p>100% Organic</p>
                <p>UP TO 35%</p>
                <button className='bg-white px-4 py-2 transition-all duration-500 text-sm hover:rounded-xl text-orange-500'>Shop</button>
            </div>
        </div>
        <div className='relative'>
            <img src="/banner/discount_img02.jpg"/>
            <div className='absolute right-5 top-0 lg:top-2 text-white font-bold text-lg flex flex-col justify-center items-center h-full'>
                <p className='text-sm'>HEALTHY FOOD</p>
                <p>Hygienically</p>
                <p>Packed</p>
                <button className='bg-white px-4 py-2 transition-all duration-500 text-sm hover:rounded-xl text-orange-500'>Shop</button>
            </div>
        </div>
        <div className='relative'>
            <img src="/banner/discount_img03.jpg"/>
            <div className='absolute left-5 top-0 lg:top-2  font-bold text-lg flex flex-col justify-center items-center h-full'>
                <p className='text-sm'>HEALTHY FOOD</p>
                <p>BABY FAVOURITE</p>
                <p>UP TO 15%</p>
                <button className='bg-white px-4 py-2 transition-all duration-500 text-sm hover:rounded-xl text-orange-500'>Shop</button>
            </div>
        </div>
    </div>
  )
}

export default Banner