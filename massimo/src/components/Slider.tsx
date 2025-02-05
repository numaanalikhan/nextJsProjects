"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
const data =[
  {
    id:1,
    title:"ALWAYS FRESH & ALWAYS CRISPY & ALWAYS HOT",
    url:"/slide1.png"
  },
  {
    id:2,
    title:"WE DELIVER YOUR ORDER WHEREVER YOU ARE IN NY",
    url:"/slide2.png"
  },
  {
    id:3,
    title:"THE BEST PIZZA TO SHARE WITH YOUR FAMILY",
    url:"/slide3.jpg"
  },
]
function Slider() {
  const [currentSlide,setCurrentSlide] = useState(0)
  useEffect(()=>{
   const intervalSlide = setInterval(()=>{
      setCurrentSlide((prev)=>prev===data.length-1 ? 0 :prev+1)
    },2000)

    return ()=>clearInterval(intervalSlide)

   
  },[])
  return (
    <div className='flex flex-col  h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row'>
      {/*Text Container */}
      <div className='flex-1 flex flex-col items-center justify-center gap-20 bg-fuchsia-50'>
        <h1 className='font-bold text-red-500 text-center text-5xl lg:text-6xl xl:text-7xl'>{data[currentSlide].title}</h1>
        <button className='bg-red-500 text-white px-8 text-xl py-4 font-bold rounded-md'>Order Now</button>
      </div>
      {/*Image Container */}
      <div className='relative flex-1'>
        <Image src={data[currentSlide].url} alt='slide' fill={true} className='object-cover'/>
      </div>
    </div>
  )
}

export default Slider