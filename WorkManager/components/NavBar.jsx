import React from 'react'
import Link from 'next/link'
function NavBar() {
  return (
    <div className='flex justify-between bg-gray-800 p-5 items-center'> 
        <div>
           <Link href="/"> Home</Link>
        </div>
        <div>
            <ul className='flex justify-between gap-2'>
            <li><Link href="!#">AddTask</Link></li>
            <li>ShowTasks</li>
            <li>anoter </li>
            </ul>
        </div>
        <div>
            <ul className='flex justify-between gap-2'>
                <li><Link href="/login">login</Link></li>
                <li><Link href="/signup">signup</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar