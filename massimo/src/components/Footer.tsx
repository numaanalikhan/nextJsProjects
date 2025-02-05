import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div  className=' font-bold bg-red-500 flex justify-between items-center p-4 h-12 flex-wrap md:px-8 md:h-24 lg:px-20 xl:px-40'>
      <Link href='/' className='text-2xl'>MASIMOO</Link>
      <p>@ All rights reserved to MASIMOO</p>
    </div>
  )
}

export default Footer