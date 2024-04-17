import React from 'react'

const Stripe = ({val}) => {
  return (
    <div className='w-[16.66%] px-2 py-4 items-center flex justify-between  border-t-[1.3px] border-b-[1.3px] border-r-[1.3px] border-zinc-600  '> 
        <img src={val.url} alt="" className='w-fit' />
        <h1 className='font-semibold'>{val.number}</h1>
    </div>
  )
}

export default Stripe
