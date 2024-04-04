import React from 'react'
import { useState } from 'react';
const RegisterPage = () => {
    const [name,setName]=useState("");
    const [sponser,setSponser]=useState("");
    const [password,setPassword]=useState("");
    const [position,setPosition]=useState("");
    const [email,setEmail]=useState("");
    const [mobile,setMobile]=useState("");
    const [confirm,setConfirm]=useState("");
const handleSubmit=(e)=>{
    e.preventDefault()
}
  return (
    <div className='min-h-screen flex flex-col justify-center items-center gap-5 my-4' >
        <h2 className='text-2xl font-bold'>Create an account</h2>
        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-3 border border-gray-500 rounded-xl px-12 py-12'>
            <label className='w-full' htmlFor='name'>Full name*</label>
            <input className="rounded-xl w-80 focus:border-green-600 focus:border-2"id="name" type="text" value={name} placeholder='Username' onChange={(e)=>setName(e.target.value)}/>
            <label className='w-full' htmlFor='name'>Sponser ID*</label>
            <input className="rounded-xl w-80 focus:border-green-600 focus:border-2"id="name" type="text" value={sponser} placeholder='Sponser ID' onChange={(e)=>setSponser(e.target.value)}/>
            <label className="w-full" htmlFor="position">Select Position</label>
            <select id="position" value={position} className='rounded-xl w-80 focus:border-green-600 focus:border-2' placeholder="Select Position">
                <option value="right" onClick={(e)=>setPosition("right")}>Right</option>
                <option value="left" onClick={(e)=>setPosition("left")}>Left</option>
            </select>
            <label className='w-full' htmlFor='name'>Email*</label>
            <input className="rounded-xl w-80 focus:border-green-600 focus:border-2"id="name" type="text" value={email} placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
            <label className='w-full' htmlFor='name'>Mobile*</label>
            <input className="rounded-xl w-80 focus:border-green-600 focus:border-2"id="name" type="text" value={mobile} placeholder='Mobile' onChange={(e)=>setMobile(e.target.value)}/>
            <lable className='w-full' htmlFor="password">Password *</lable>
            <input className="rounded-xl w-80 focus:border-green-600 focus:border-2" id="password" type="password" value={password} placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
            <lable className='w-full' htmlFor="password">Confirm Password *</lable>
            <input className="rounded-xl w-80 focus:border-green-600 focus:border-2" id="password" type="password" value={confirm} placeholder='Confirm Password' onChange={(e)=>setConfirm(e.target.value)}/>
            <button type='submit' className='border rounded-xl w-full bg-blue-500 text-white py-2 mt-3'>Register</button>
        </form>

    </div>
  )
}

export default RegisterPage