import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function NavBar() {
  return (
    <div className='flex justify-between p-4 items-center mx-8 shadow-white'>
      <h1>Work Manager</h1>
      <div className='flex justify-between gap-8 items-center'>
        <input placeholder='search task'/>

        <div className='bg-white w-4 h-4 rounded-full flex items-center justify-center border-black bottom-1'>
        <p className=' text-black font-bold'><Link href={"/addTask"}>+</Link></p>
        </div>

        <div className='relative flex'>

        <p>tasks</p>

        <div className='flex left-9 -top-1 absolute items-center justify-center bg-red-600 w-4 h-4 rounded-full'>
        <p className='text-[10px] font-bold text-white'>1</p>
        </div>

        </div>
        <p><Link href='/login'>Sign in</Link></p>

      </div>
    </div>
  )
}

export default NavBar