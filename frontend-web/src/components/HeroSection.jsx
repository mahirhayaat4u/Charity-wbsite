import React from "react";
import "./Hero.css";
import banner from "../assets/gaza.webp";
import Mission from "./Mission";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ReviewSlider from "./Review/ReviewSlider";
 

// import blob from "../assets/blob.svg"

const HeroSection = () => {
  const { token } = useSelector((state) => state.auth);
  return (
    <>
      <div className="   border-red-900 w-11/12 md:mx-auto     relative ">
        {/* <img src={banner} alt='banner' className='absolute h-[90%] opacity-50 '/> */}
        <div className="  w-full">
          <img
            src={banner}
            alt="banner"
            className="absolute h-[100%] scale-x-150 w-[80%]  ml-8 md:hidden  opacity-45 "
          />
        </div>
        <div className="md:flex md:justify-around   items-center ">
          <div className="md:flex md:flex-col md:justify-items-start  md:w-[50%] md:gap-6    relative  top-10 w-full mx-auto flex flex-col justify-center items-center text-left ml-4 gap-4">
            <div className="md:w-[80%] md:flex md:flex-col md:gap-6 md:mt-6">
              <p className="text-[2rem] ml-6 md:w-full  md:ml-8 text-black font-semibold slide-left  ">
                YOUR CONTRIBUTION
              </p>

              <p className="text-[2.7rem] md:w-full   font-serif text-black font-extrabold   slide-right">
                Help The Children
              </p>
              <p className="text-xl ml-3 md:w-full   text-justify   mx-auto w-[90%] block text-black  scale-up-center font-normal">
                We do whatever it takes to make sure children don’t just survive
                but thrive.Our Organisation believes that every child should be
                able to make their mark on their world and help build a better
                future.
              </p>
            </div>
            <div className="relative  h-44 md:h-40 w-full ml-6 md:ml-[10rem]  ">


              {token ? (
                <Link
                  to="/profile"
                  className="border-1 absolute   text-nowrap   rounded-2xl py-3 px-6 md:px-10  md:text-3xl bg-green-600 text-white font-semibold  mt-[9rem] slide-top"
                >
                  Donate now
                </Link>
              ) : (
                <Link
                  to="/signup"
                  className="border-1 absolute   text-nowrap   rounded-2xl py-3 px-6 md:px-10  md:text-3xl bg-green-600 text-white font-semibold  mt-[9rem] slide-top"
                >
                  Donate now
                </Link>
              )}

              
            </div>
            {/* <button className='border-4 border-yellow-400 rounded-2xl py-3 px-4 text-3xl font-semibold  mt-[1rem] slide-top '>Contact us</button> */}
          </div>

          <img
            src={banner}
            alt="banner"
            loading="lazy"
            className="mt-14 opacity-85 hidden md:w-[40rem] h-auto md:block   "
          />
        </div>

        {/* our mission */}
      </div>
     
       <Mission />
       {/* <ReviewSlider/> */}
      
    </>
  );
};

export default HeroSection;
