/* eslint-disable react/prop-types */
import React from 'react'
import Card from './Card'

function Cards({users,handleRemove}) {
  return (
    <div className='p-2 max-h-96 overflow-auto  flex-wrap w-full flex justify-center gap-5 '>
        {users.map((item,index)=>{
          return  <Card handleRemove={handleRemove} id={index} key={index} user={item}/>
        })}
      
    </div>
  )
}

export default Cards
