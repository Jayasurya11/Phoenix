import React from 'react'
import "../css/bootstrap.min.css"
import SingleItem from '../components/SingleItem'
import Carousel from '../components/Carousel'
import Banner from '../components/Banner'
import Bottom from '../components/Bottom'

const ContentPage = () => {
    const products=["Ashirvad","Fortune","Washing Liquids","Chillies","Fresh Butter"]
  return (
    <div className=''>
        <Carousel/>

        <Banner/>
        <h2 className='px-4 lg:px-12'>Our Products</h2>
        <div className='grid grid-cols-2 lg:grid-cols-5 gap-3 px-4 lg:px-12'>
            {products.map((item,index)=><SingleItem name={item} key={index} num={index}/>)}
        
        </div>
        <Bottom/>
    </div>
  )
}

export default ContentPage