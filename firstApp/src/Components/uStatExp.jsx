import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";

function uStatExp() {
    const [val,setVel] =useState(false);
  return (
      <>
        <div className='bg-zinc-300 h-screen w-full flex justify-center items-center'>
      <div className='relative h-48 w-60 rounded-md flex overflow-hidden bg-red-300'>
          <img className={`shrink-0 transition-transform  duration-800 ease-in-out ${ val===false? '-translate-x-[0%]': "-translate-x-[100%]"} h-full w-full object-cover object-center`} src="https://cdn.pixabay.com/photo/2024/02/28/14/01/woman-8602128_1280.png" alt="" />
          <img className={`shrink-0 transition-transform duration-800 ease-in-out ${ val===false? '-translate-x-[0%]': "-translate-x-[100%]"} h-full w-full object-cover object-center`} src="https://cdn.pixabay.com/photo/2017/07/04/10/01/positive-2470506_1280.jpg" alt="" />
         <span onClick={()=>setVel(()=>!val)} className='w-10 rounded-full text-2xl h-10 flex justify-center items-center bottom-16 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#dadada7b] absolute '> <FaArrowRight size
         ={"1em"} /></span>     
      </div>
        </div>
      </>
  )
}
export default uStatExp;
