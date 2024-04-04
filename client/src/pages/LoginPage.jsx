import React from 'react'
import { useState } from 'react';
const LoginPage = () => {
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
  return (
    <div className='min-h-screen flex flex-col justify-center items-center gap-5' >
        <h2 className='text-2xl font-bold'>Login Page</h2>
        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-3 border border-gray-500 rounded-xl px-12 py-12'>
            <label className='w-full' htmlFor='name'>Username *</label>
            <input className="rounded-xl w-80 focus:border-green-600 focus:border-2"id="name" type="text" value={name} placeholder='Username' onChange={(e)=>setName(e.target.value)}/>
            <lable className='w-full' htmlFor="password">Password *</lable>
            <input className="rounded-xl w-80 focus:border-green-600 focus:border-2" id="password" type="password" value={password} placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
            <button type='submit' className='border rounded-xl w-full bg-blue-500 text-white py-2 mt-3'>Login</button>
        </form>

    </div>
  )
}

export default LoginPage