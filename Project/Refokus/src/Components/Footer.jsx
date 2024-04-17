import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-zinc-900'>
    <div className='max-w-screen-xl mb-4 mx-auto py-10 flex p-10'>
      <div className='basis-1/2  '> <h1 className='text-[11vw] font-semibold leading-none  tracking-tight'> refokus.</h1> </div>
      <div className='basis-1/2 flex gap-16'> 
        <div>
            <h4 className='mb-6 text-zinc-500'> Socials </h4>
            {["instagram","twitter (x?)", "LinkedIn"].map((item,index) => ( <a href="#" className='block mt-1 capitalize' key={index} > {item}</a> ) )}
        </div>
        <div>
            <h4 className='mb-6 text-zinc-500'> Socials </h4>
            {["instagram","twitter (x?)", "LinkedIn"].map((item,index) => ( <a href="#" className='block mt-1 capitalize' key={index} > {item}</a> ) )}
        </div>
        <div className='basis-1/2 mt-16'>
            <p className='text-right'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, quod?</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer
