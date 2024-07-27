import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {Link, useNavigate } from 'react-router-dom'
import {AiOutlineEyeInvisible ,AiOutlineEye} from 'react-icons/ai'
import { login } from '../services/operation/authAPI';
import Footer from './Footer';

const Login = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const[formData,setFormData]=useState({
    email:"",
    password:"",
  })

  const[showPassword,setShowPassword]=useState(false)
  const{email,password}=formData

  const handleOnChange=(e)=>{
    setFormData((prevData)=>({
      ...prevData,
      [e.target.name]:e.target.value,
    }))
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(login(email,password,navigate))
  }


  return (
   <>
     <form
    onSubmit={handleSubmit}
    className='flex flex-col w-full h-[50vh] gap-4 md:gap-8 md:mt-8 items-center justify-center'
    >

       <label  className="relative flex flex-col md:flex-row md:gap-7">
          <p className="text-[1.8rem] font-thin">
            Email Address <sup className='text-pink-500'>*</sup>
          </p>

          <input
           required
           type='text'
           name='email'
           value={email}
          onChange={handleOnChange}
           placeholder='Enter email address'
           
          className="text-[1rem] px-10 py-4 border-2 rounded-2xl border-green-300    "
          />

       </label>

       <label className="relative flex flex-col md:flex-row md:gap-7">
         <p className="text-[1.8rem] font-thin">
         Password <sup className='text-pink-500'>*</sup> 
         </p>

         <input
         required
         type={showPassword ? "text" : "password"}
         name="password"
         value={password}
         onChange={handleOnChange}
         placeholder="Enter Password"
          
         className="text-[1rem] px-10 py-4 border-2 rounded-2xl border-green-300    "
       />

         <span
             onClick={()=>setShowPassword((prev)=>!prev)}
             className="absolute right-3 top-[1rem] z-[10] cursor-pointer"
         >
               {
                 showPassword ? (
                 <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
               ) : (
                 <AiOutlineEye fontSize={24} fill="#AFB2BF" />
               )
               }
          
         </span>
          

       </label>

       <button
       type="submit"
        className="text-[2rem] mx-auto md:mx-0 border-none w-[16rem] md:w-[16rem] md:py-1 py-2 my-8 text-zinc-700 font-thin rounded-2xl bg-green-400 "
     >
       Sign In
     </button>
       
    </form>
    <Footer/>
   </>
  )
}

export default Login