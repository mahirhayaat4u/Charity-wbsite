import React, { useRef, useState } from "react";
// import logo from "../assets/custom-logo.png";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import "./Hero.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProfileDropdown from "./ProfileDropdown";
import useOnClickOutside from "./hook/useOnClickOutside";
import { logout } from "../services/operation/authAPI";
import {   VscSignOut } from "react-icons/vsc";
const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch=useDispatch();

  const toggleMenu = () => {
    setOpen(!open);
  };
  const closeDropdown = () => setOpen(false);

  const ref = useRef(null);
  useOnClickOutside(ref, closeDropdown);

  const handleLinkClick = () => {
    setOpen(false);
  };

  

  return (
    <div className="bg-cyan-950 w-[100vw] sticky top-0  z-50 md:sticky md:top-0 md:z-50  md:shadow-md  ">
      <div className="  flex    flex-row  w-full relative ">
        {/* <img
          src={logo}
          alt="logo"
          className="ml-[0.5rem] cursor-pointer w-[8rem] md:max-lg:ml-[5rem] md:w-[6rem] lg:ml-[10rem] filter-custom-color "
          onClick={() => navigate("/")}
        /> */}
        <div className="ml-[2rem] mr-4 md:ml-[6rem] py-6 text-white flex flex-col gap-0" onClick={() => navigate("/")}>
          <h1 className="text-[1.4rem] md:text-[1.6rem] font-normal ">KINDNESS</h1>
          <p className="italic text-[0.7rem] text-green-300">FOR WELL BEING</p>
        </div>

        <div className="flex flex-row  gap-2 md:max-lg:mr-[4rem] md:absolute md:right-8 md:w-auto md:gap-5 md:mt-8 w-11/12 justify-center items-center   ">
          {token === null && (
            <Link to="/signup">
              <button className="text-[1rem]   text-center  border-2 rounded-xl border-none  px-4 py-2 bg-green-600 md:hover:bg-yellow-300 text-white md:hover:text-black ">
                SignUp
              </button>
            </Link>
          )}

          {token === null && (
            <Link to="/login">
              <button className="text-[1rem] text-center text-white  border-2 rounded-xl border-green-600 md:hover:border-yellow-300 px-4 py-2 ">
                Login
              </button>
            </Link>
          )}
        </div>

        <button
          onClick={toggleMenu}
          className="lg:hidden md:max-lg:absolute  md:right-2 md:top-8  text-white mr-5 text-3xl "
        >
          {open ? <IoMdClose /> : <CiMenuBurger />}
        </button>

        {open ? (
          <div
            onClick={(e) => e.stopPropagation()}
            className={`absolute w-[70%]    right-0 z-50 ${
              open ? "animate-slide-in" : "animate-slide-out"
            }`}
            ref={ref}
          >
            <ul className=" flex flex-col text-[3rem] gap-5 bg-cyan-950/50 backdrop-blur-md pb-[5rem] text-slate-100  items-center  bg-cyan-950 w-full ">
              {open && (
                <button
                  onClick={toggleMenu}
                  className="  text-[3rem] font-thin  ml-[14rem] mt-4 mb-5 "
                >
                  {" "}
                  <IoMdClose />{" "}
                </button>
              )}
              {
                token && (
                  <Link to="/profile" onClick={handleLinkClick}  className="font-light text-[1.5rem] scale-up-center">
                       Profile
                  </Link>
                )
              }
              <Link
                to="/"
                onClick={handleLinkClick}
                className="font-light text-[1.5rem] scale-up-center"
              >
                HOME
              </Link>
              <Link
                to="/about"
                onClick={handleLinkClick}
                className="font-light text-[1.5rem] scale-up-center"
              >
                ABOUT
              </Link>
              <Link
                to="/blog"
                onClick={handleLinkClick}
                className="font-light text-[1.5rem] scale-up-center"
              >
                BLOG
              </Link>
              <Link
                to="/contact"
                onClick={handleLinkClick}
                className="font-light text-[1.5rem]   scale-up-center"
              >
                CONTACT US
              </Link>
              <Link
                to="/donationData"
                onClick={handleLinkClick}
                className="font-light text-[1.5rem] scale-up-center"
              >
                DONATION DATA
              </Link>
           {
            token && (
              <div
                  onClick={() => {
                    dispatch(logout(navigate));
                    setOpen(false);
                  }}
                  className="flex flex-row text-green-300 gap-2 justify-center text-[2rem] items-center mt-4"
                >
                  <VscSignOut />
                  Logout
             </div>
            )
           }

            

              <div className="flex flex-col font-normal  gap-6 ">
                {token === null && (
                  <Link
                    to="/signup"
                    onClick={handleLinkClick}
                    className="text-[2rem] mt-4 text-center text-blue-950 border-2 rounded-xl border-yellow-200  px-4 py-1 bg-yellow-200  "
                  >
                    Signup
                  </Link>
                )}

                {token === null && (
                  <Link
                    to="/login"
                    onClick={handleLinkClick}
                    className="text-[2rem] text-center   mb-4 border-2 rounded-xl border-yellow-200  px-4 py-1    "
                  >
                    Login
                  </Link>
                )}
              </div>
            </ul>
          </div>
        ) : (
          <>
            <div className="  hidden md:block  md:mx-auto md:text-slate-300 md:font-light md:max-lg:ml-[5rem]  ">
              <ul className=" flex flex-row cursor-pointer  text-[1.6rem]  gap-[2.6rem] md:max-lg:gap-[2rem] mt-[2rem]  md:mr-[5rem]     items-center  ">
                <Link to="/" className="md:hover:text-green-400">
                  HOME
                </Link>
                <Link to="/about" className="md:hover:text-green-400 ">
                  ABOUT
                </Link>
                <Link
                  to="/blog"
                  className="md:hover:text-green-400 md:max-lg:hidden "
                >
                  BLOG
                </Link>
                <Link
                  to="/contact"
                  className="md:hover:text-green-400 md:max-lg:hidden"
                >
                  CONTACT
                </Link>

                <Link
                to="/donationData"
                
                className="font-light  md:hover:text-green-400 sm:max-xl:hidden "
              >
                DONATION DATA
              </Link>
              </ul>
            </div>
          </>
        )}
      </div>
      {/* <div className="flex flex-row gap-10 w-11/12 justify-center items-center   ">
        {token === null && (
          <Link to="/signup">
            <button className="text-[1.4rem]   text-center  border-2 rounded-xl border-yellow-200  px-4 py-1 bg-yellow-200  ">SignUp</button>
          </Link>
        )}

        {token === null && (
          <Link to="/login">
            <button  className="text-[1.4rem] text-center   border-2 rounded-xl border-yellow-200  px-4 py-1  ">Login</button>
          </Link>
        )}
      </div> */}
      {token !== null && <ProfileDropdown />}
    </div>
  );
};

export default Navbar;
