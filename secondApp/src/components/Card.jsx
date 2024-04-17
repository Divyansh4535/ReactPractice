/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react'

function Card({user,handleRemove,id}) {
  return (
   
         <div className='bg-white  flex flex-col  w-44 rounded-lg  items-center p-3 '>
            <div className='h-16 w-16 overflow-hidden  rounded-full bg-slate-100'>
                <img className='h-full w-full object-cover object-center ' src={user.image}  />
            </div>
                <h1 className='text-base font-bold text-center '>{user.name}</h1>
                <h2 className=' text-xs text-center text-zinc-800 font-medium tracking-tighter leading-none'>{user.email}</h2>
                <p className='text-xs font-normal text-center leading-1 tracking-tight mt-1 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, exercitationem.</p>
                <button onClick={()=>handleRemove(id)} className='px-2 py-1 mt-2 rounded-lg text-white bg-red-600 text-sm'>Remove It</button>
        </div>   
   
  )
}

export default Card
    