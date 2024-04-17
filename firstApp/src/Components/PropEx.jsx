import React from 'react'

function PropEx({Sdata,songHandle,index}) {
    const {songName,artistName,artistImage,added} = Sdata;
  return (
    <div className='bg-white h-44 w-72 m-2 rounded-md relative flex gap-1'>
      <div className='bg-orange-600 h-28 w-28 m-4 rounded-md'> <img className='h-full w-full object-cover object-center'  src={artistImage} alt="" /></div>
      <div className='mt-3'>
      <h1 className='text-xl font-bold mr-1'>{songName}</h1>
      <h4>{artistName}</h4>
      </div>
      <button onClick={()=>songHandle(index)} className={`${!added ? "bg-orange-500" :"bg-teal-400"} text-base text-white px-3 py-1 rounded-full  font-semibold absolute bottom-0 left-1/2 whitespace-nowrap  -translate-x-[50%] translate-y-[50%] `}>{!added ? "Add to Favourites" :"Added"}</button>
    </div>
  )
}

export default PropEx
