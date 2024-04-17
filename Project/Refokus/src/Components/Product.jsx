import React from 'react'
import Button from './Button'

const Product = ({val}) => {
  return (
    <>
     <div className='w-full py-20 h-[20rem] mb-2 bg-red-200 text-white'>
        <div className='max-w-screen-xl mx-auto flex justify-between items-center px-16 '>
            <h1 className='text-6xl capitalize font-medium'>{val.title} </h1>
            <div className='w-1/3'>
                <p className='mb-10'>{val.description}</p>
               <div className='flex items-center justify-between'>
                {val.live &&  <Button title={"Live website"} />}
                {val.case &&  <Button title={"Case Study"} />}
               </div>
            </div>

        </div>
    </div> 
    </>
  )
}

export default Product
