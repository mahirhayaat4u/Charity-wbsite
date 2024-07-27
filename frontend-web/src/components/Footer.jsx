import React from 'react'
import logo from "../assets/custom-logo.png";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialGoogle } from "react-icons/sl";
import { SlSocialYoutube } from "react-icons/sl";
import { IoAtCircleOutline } from "react-icons/io5";
const Footer = () => {
  return (
    <div  className='  w-[100vw] bg-slate-800 border-2 border-green-950 flex-flex-col items-center justify-center'>
    
            <img src={logo}  alt="logo" className=" ml-[27%] align-baseline w-[8rem]  md:w-[10rem] md:ml-[10rem] filter-custom-color"/>

            
            <div className='flex flex-row text-[2rem] items-center justify-center gap-10 mb-7 text-white'>
                    <SlSocialFacebook />
                    <SlSocialLinkedin/>
                    <SlSocialGoogle/>
                    <SlSocialYoutube/>
            </div>

            <div className='flex flex-row gap-2 justify-center items-center mb-16 text-[1.4rem] text-white'>
                <IoAtCircleOutline/>
                <p>2024</p>
                <p>Policy</p>
            </div>


    </div>
    
  )
}

export default Footer