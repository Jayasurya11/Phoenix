
import React from 'react'

const Bottom = () => {
  return (
    <div className='px-4 lg:px-12 flex flex-col lg:flex-row justify-evenly gap-4 my-4'>
        <div className='relative'>
            <img src="/banner/s_discount_img01.jpg"  className='h-[225px]'/>
            <div className='absolute left-5 top-0 lg:top-2 font-bold text-sm lg:text-lg flex flex-col justify-center py-4 items-center  h-full'>
                <p className='text-xs font-bold'>HEALTHY FOOD</p>
                <p>ORGANIC FARM </p>
                <p>FOR GANIC</p>
                <p className='text-sm'>Super offer upto 50%</p>
                <button className='border-1 border-gray-400 bg-gray-100 px-4 py-2 transition-all duration-500 text-sm rounded-xl   text-orange-500 hover:bg-orange-400 hover:text-white'>Shop</button>
            </div>
        </div>
        <div className='relative'>
            <img src="/banner/s_discount_img02.jpg" className='h-[225px]'/>
            <div className='absolute left-5 top-0 lg:top-2  text-sm font-bold lg:text-lg flex flex-col justify-center py-4 items-center h-full'>
                <p className='text-xs font-bold'>HEALTHY FOOD</p>
                <p>FRESH VEGETABLES</p>
                <p>Super offer up to 50%</p>
                <button className='border-1 border-gray-400 bg-gray-100 px-4 py-2 transition-all duration-500 text-sm rounded-xl   text-orange-500 hover:bg-orange-400 hover:text-white'>Shop</button>
            </div>
        </div>
        
    </div>
  )
}

export default Bottom