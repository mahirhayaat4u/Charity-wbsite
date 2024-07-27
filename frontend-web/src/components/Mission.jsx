import React from 'react'
import blob1 from "../assets/blob (1).svg";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { BsHeartPulse } from "react-icons/bs";
import { LiaPiggyBankSolid } from "react-icons/lia";
import { LiaHandHoldingHeartSolid } from "react-icons/lia";
 
// import CardReview from './Review/CardReview';
import ReviewSlider from './Review/ReviewSlider';

const Mission = () => {
  return (
    <div className="w-[100vw] flex flex-col items-center h-[100vh]  ">
    <h1 className="mt-16 text-xl md:text-2xl md:font-semibold text-green-600 font-bold">OUR MISSION</h1>
    <h1 className="font-semibold text-[2rem] font-serif">What We Do</h1>

    {/* cards */}

   <div className=" md:grid md:grid-cols-3 md:grid-flow-row md:gap-14 md:mt-8">

           <div className="w-[20rem] h-[20rem] mt-[2rem] border-8 border-green-100 rounded-2xl flex flex-col items-center justify-center gap-3">
                <BsHeartPulse className="text-[4rem] " />
                <p className="text-[1.5rem] font-serif">Donate</p>
                <p className="w-[80%] text-[0.8rem] mb-[1rem] text-wrap">
                Join our mission to save lives by donating blood. Your contribution
                can make a difference and bring hope to those in need.
                </p>
           </div>

           <div className="w-[20rem] h-[20rem] mt-[2rem] border-8 border-green-100 rounded-2xl flex flex-col items-center justify-center gap-3">
                <LiaHandHoldingHeartSolid className="text-[4rem] " />
                <p className="text-[1.5rem] font-serif">Became A Volunteer</p>
                <p className="w-[80%] text-[0.8rem] mb-[1rem] text-wrap">
                Join our mission to save lives by donating blood. Your contribution
                can make a difference and bring hope to those in need.
                </p>
           </div>

           <div className="w-[20rem] h-[20rem] mt-[2rem] border-8 border-green-100 rounded-2xl flex flex-col items-center justify-center gap-3">
                <LiaPiggyBankSolid className="text-[4rem] " />
                <p className="text-[1.5rem] font-serif">Get Involved</p>
                <p className="w-[80%] text-[0.8rem] mb-[1rem] text-wrap">
                Join our mission to save lives by donating blood. Your contribution
                can make a difference and bring hope to those in need.
                </p>
           </div>

   </div>

    <div className="w-[100vw] h-[20rem]   mt-[10rem] mb-[8rem] flex flex-col items-center relative ">
      <img
        src={blob1}
        alt="blob1"
        className="absolute md:hidden md:scale-y-50 md:scale-x-50  md:relative scale-y-150  -top-20"
      />

      <p className="mt-[3rem] md:mt-0 text-2xl font-serif w-[80%] text-center z-10">
        We can’t help everyone, but everyone can help someone
      </p>

      <button className="mt-[2rem] px-[2rem] py-[1rem] text-white font-light text-xl bg-green-600 rounded-3xl mb-[3rem] z-10">
        <Link to="/contact">Contact Us</Link>
      </button>
    </div>
     
   <ReviewSlider/>
    {/* <CardReview/> */}
    <Footer />
  </div>
  )
}

export default Mission