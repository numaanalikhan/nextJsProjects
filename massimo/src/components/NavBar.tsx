import React from "react";
import HamBurgerMenu from "./HamBurgerMenu";
import Link from "next/link";
import Image from "next/image";
import Cart from "./Cart";

const user = false;

function NavBar() {
  return (
    <div className="flex justify-between items-center p-4 h-12 text-red-600 border-b-4 border-b-red-600 md:h-24  md:px-8 lg:px-20 xl:px-40">
{/*LEFT SIDE only on md screen*/}
      <div className="hidden md:flex gap-2 font-bold  flex-1   items-center ">
      <Link href='/'>HomePage</Link>
      <Link href='/menu'>Menu</Link>
      <Link href='/'>Contact</Link>
      </div>

{/*Logo... */}
      <div className="font-bold md:text-3xl flex-1 md:text-center  ">
        <Link href="/" >MASSIMO</Link>
      </div>

{/*right SIDE*/}
      <div className="hidden md:flex gap-2 font-bold  flex-1 justify-end  items-center ">
      
      {/*phone*/}
      <Link href='/' className= "bg-orange-300 rounded-md p-2 flex gap-2 items-center font-bold md:absolute top-1 right-2   lg:static ">
        <Image src='/phone.png' alt="phone" width={20} height={20}/>
        <p>1234567</p>
      </Link>
      
      {/*user*/}
      {
        !user ? <Link href='/login'>Login</Link>
         : <Link href='/orders'>Orders</Link>
      }

      {/*cart*/}
      <Cart/>
      </div>

{/*Ham Menu Bar mobile screen*/}
      <div className=" md:hidden">
        <HamBurgerMenu />
      </div>
    </div>
  );
}

export default NavBar;
