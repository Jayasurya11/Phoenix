import React, { useState } from 'react'
import { Card } from "flowbite-react";

const SingleItem = ({name,num}) => {
    const [count,setCount]=useState(1);
    const handleIncDec=(val)=>{
        if(val==="Inc"){
            setCount((curr)=>curr+1)
        }else{
            if(count!=1){
                setCount((curr)=>curr-1);
            }
            
        }
        
        
    }
  return (
    <Card className='h-[300px]'
    >
        <img src={`/products/p${num+1}.png`} className='h-[150px] '/>
      <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        {name}
      </h5>
      <div className=' rounded-2xl border mx-1 lg:mx-8 bg-gray-300  flex justify-between items-center px-2 py-1  border-gray-600'><button className='bg-white border rounded-full w-6 lg:w-8 h-6  lg:h-8' onClick={(e)=>handleIncDec("Dec")}>-</button>{count}<button className='bg-white rounded-full w-6 lg:w-8 h-6 lg:h-8' onClick={(e)=>handleIncDec("Inc")}>+</button></div>
      
    </Card>
  )
}

export default SingleItem