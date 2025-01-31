import Link from 'next/link'
import React from 'react'

function NavBar() {

const NavList = [
  {
    id:0,
    url:"/",
    title:"Home"
  },
  {
    id:1,
    url:"/portfolio",
    title:"Portfolio"
  },
  {
    id:2,
    url:"/blog",
    title:"Blog"
  },
  {
    id:3,
    url:"/about",
    title:"About"
  },
  {
    id:4,
    url:"/contact",
    title:"Contact"
  },
  {
    id:5,
    url:"/dashboard",
    title:"Dashboard"
  }
]
  return (
    <>
    <Link href="/">lamania</Link>
    {
      NavList.map((item)=>{
        return(
          <Link key={item.id} href={item.url}>{item.title}</Link>
        )
      })
    }
    </>
  )
}

export default NavBar