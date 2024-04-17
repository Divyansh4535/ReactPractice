import React, { useState } from 'react';
import Form from './components/Form';
import Cards from './components/Cards';


function App() {
  const [users,setUser] =useState([])
  const handSubBtn = (data)=>{
    setUser([...users,data])
  }
  const handleRemove =(id)=>{
    setUser (()=>users.filter((item,index)=>index != id ))
  }
  return (
    <div className='bg-gray-700 h-screen w-full flex flex-col justify-center items-center '>
      <div className='mx-auto'>
        <Cards users={users} handleRemove={handleRemove} />
        <Form  HSBtn={handSubBtn}  />
      </div>
    </div>
  )
}
export default App
