import React from 'react'
import { useForm } from 'react-hook-form'

function Form({HSBtn}) {
  const {register,handleSubmit,reset} =useForm()
  const subForm =(data)=>{
    HSBtn(data);
    reset();
  }
  return (
    <>
        <div className='mt-10 flex gap-10 justify-center'>
            <form action="" className='flex gap-10 flex-nowrap' onSubmit={handleSubmit(subForm)}>
                <input {...register('name')} type="text" placeholder='Name' className=' rounded-md px-2 py-1 font-semibold outline-none text-base ' />
                <input {...register('email')} type="Email" placeholder='E-mail' className='rounded-md px-2 py-1 font-semibold outline-none text-base ' />
                <input {...register('image')} type="text" placeholder='ImageUrl' className=' rounded-md px-2 py-1 font-semibold outline-none text-base ' />
                <input type="Submit" className='px-3 bg-blue-600 text-white font-semibold rounded-lg' />
            </form>
        </div> 
    </>
  )
}

export default Form
