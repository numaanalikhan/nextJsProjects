import Image from "next/image";
import React from "react";

function Offer() {
  return (
    <div className="flex flex-col w-screen h-screen md:flex-row md:h-(calc(100vh-9rem))">
      {/*TEXT CONTAINER */}
      <div className="flex-1 flex flex-col items-center justify-center gap-5  p-8 w-full bg-black">
        <h1 className="text-3xl font-bold text-white">Delicious Burgers and French Fries</h1>
        <p className="font-bold text-white">
          Progressively simplify effective e-toilers and process- centric
          methods of empowerment. Quickly pontificate parallel.
        </p>
        <p className="text-yellow-300 text-3xl">Timer</p>
        <button className="text-white bg-red-500 font-bold px-8 py-4 rounded-md">Order NOw</button>
      </div >
      {/*IMAGE CONTAINER */}
      <div className="relative flex-1 w-full">
        <Image src="/offerProduct.png" alt="" fill={true} className="object-contain"/>
      </div>
    </div>
  );
}

export default Offer;
