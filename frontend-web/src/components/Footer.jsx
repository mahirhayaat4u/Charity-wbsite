import React from 'react'
// import logo from "../assets/custom-logo.png";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialGoogle } from "react-icons/sl";
import { SlSocialYoutube } from "react-icons/sl";
import { IoAtCircleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
const Footer = () => {
  const navigate=useNavigate();
  return (
    <div  className='  w-[100vw] bg-slate-800 border-2 border-green-950 flex flex-col items-center justify-center  '>
    
            <div className="   text-white mb-6 mt-4 flex flex-col gap-0" onClick={() => navigate("/")}>
              <h1 className="text-[2rem] md:text-[1.6rem] font-normal">KINDNESS</h1>
              <p className="italic text-green-300">FOR WELL BEING</p>
            </div>

            
            <div className='flex flex-row text-[1.4rem] items-center justify-center gap-10 mb-7 text-white'>
                    <SlSocialFacebook />
                    <SlSocialLinkedin/>
                    <SlSocialGoogle/>
                    <SlSocialYoutube/>
            </div>

            <div className='flex flex-row gap-2 justify-center items-center mb-5 text-[1.4rem] text-white'>
                <IoAtCircleOutline/>
                <p>2024</p>
                <p>Policy</p>
            </div>


    </div>
    
  )
}

export default Footer