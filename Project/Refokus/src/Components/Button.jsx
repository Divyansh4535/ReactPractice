import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

const Button = ({title = "Get started" }) => {
  return (
    <div>
      <div className='bg-white w-fit text-black justify-between rounded-full font-bold px-3 py-2 gap-10   flex items-center'>
        <span className='text-base flex items-center gap-5 font-medium'>{title}</span>
        <IoIosReturnRight className='text-xl' />
      </div>
    </div>
  )
}

export default Button;
