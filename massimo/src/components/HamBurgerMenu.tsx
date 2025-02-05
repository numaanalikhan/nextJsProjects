"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Cart from "@/components/Cart";

const list = [
  {
    id: 0,
    title: "HomeMenu",
    url: "/",
  },
  {
    id: 1,
    title: "Menu",
    url: "/menu",
  },
  {
    id: 2,
    title: "Working Hours",
    url: "/",
  },
  {
    id: 3,
    title: "Contact",
    url: "/",
  },
];


//temp 
const user = false;
function HamBurgerMenu() {
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <div onClick={handleMenu}>
        <Image
          src={open ? "/close.png" : "/open.png"}
          alt="ham"
          width={20}
          height={20}
        />
      </div>

     {
        open && (
            <div onClick={handleMenu} className="text-white left-0 top-24  bg-red-600 absolute w-full flex flex-col items-center justify-center gap-5 text-3xl font-bold h-[calc(100vh-6rem)] ">
            {list.map((title) => {
              return (
                <Link href={title.url} key={title.id} >
                  {title.title}
                </Link>
              );
            })}

            {
                user ? <Link href='/orders'>Orders</Link> :  <Link href="/login">login</Link>
            }
    
            <Cart />
            
          </div>
        )
     }
    </>
  );
}

export default HamBurgerMenu;
