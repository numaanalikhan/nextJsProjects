"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Cart() {
  return (
    <Link href='/cart' className='flex items-center justify-center text-3xl gap-2 md:text-base '>
        <div className='h-8 w-8 relative md:h-4 md:w-4'>
            <Image
            src='/cart.png'
            alt='cart'
            fill={true}
            />
        </div>
            <p>Cart (3)</p>
    </Link>
  )
}

export default Cart