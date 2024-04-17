import React from 'react'
import styles from "./style.modules.css";

function NavbarPE({Sdata}) {
  return (
    <div className='w-full h-16 px-16 bg-white flex justify-between items-center'>
        <h1 className='text-orange-500 text-xl font-bold '>Orange</h1>
        <button className='bg-orange-500 text-lg text-white px-3 py-1 rounded-lg shadow-2xl shadow-orange font-bold '>Favourites  <span className='bg-orange-600 rounded-md px-1'> {Sdata.filter(item=>item.added).length} </span> </button>

    </div>
  )
}

export default NavbarPE;
