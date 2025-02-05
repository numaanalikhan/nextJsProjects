import { featuredProducts } from "@/data";
import Image from "next/image";
import React from "react";

function Feature() {
  return (
    <>
      {/* container */}
      <div className="w-screen  text-red-500">

        {/* wrapper*/}
        <div className="w-max flex ">

        {/*single item for mobile screen*/}
          {
            featuredProducts.map((item)=>{
              return(
                <div key={item.id} className=" w-screen  h-screen flex flex-col items-center gap-5 justify-around  hover:bg-fuchsia-50 transition-all duration-200 md:w-[50vw] xl:w-[33vw] xl:h-[calc(100vh)]">
            {/* image container*/}
            <div className="w-full relative flex-1 items ">
              {item.img &&(
                <Image
                src={item.img}
                alt=""
                fill={true} 
                className="object-contain hover:rotate-[60deg] transition-all duration-500  "
                />
              )}
            </div>
            
             {/*text container*/}
             <div className="flex-1 flex flex-col justify-center items-center gap-4 px-4">
              <h1 className="font-bold text-2xl uppercase ">{item.title}</h1>
              <p className="text-justify  font-bold p-4">{item.desc}</p>
              <p className="font-bold  text-lg">${item.price}</p>
              <button className="px-8 py-4 rounded-md bg-red-500 text-white font-bold">Add to cart</button>
            </div>
          </div>
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default Feature;
