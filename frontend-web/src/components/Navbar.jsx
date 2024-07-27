import React, { useRef, useState } from "react";
import logo from "../assets/custom-logo.png";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import "./Hero.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileDropdown from "./ProfileDropdown";
import useOnClickOutside from "./hook/useOnClickOutside";
const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

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
    <div className="bg-sky-950 w-[100vw] md:sticky md:top-0 md:z-50  md:shadow-md  ">
      <div className="  flex    flex-row   ">
        <img
          src={logo}
          alt="logo"
          className="ml-[0.5rem] cursor-pointer w-[8rem] md:max-lg:ml-[5rem] md:w-[6rem] lg:ml-[10rem] filter-custom-color "
          onClick={() => navigate("/")}
        />

        <div className="flex flex-row  gap-2 md:absolute md:right-8 md:w-auto md:gap-8 md:mt-8 w-11/12 justify-center items-center   ">
          {token === null && (
            <Link to="/signup">
              <button className="text-[1.1rem]   text-center  border-2 rounded-xl border-none  px-5 py-2 bg-green-600 md:hover:bg-yellow-300 text-white md:hover:text-black ">
                SignUp
              </button>
            </Link>
          )}

          {token === null && (
            <Link to="/login">
              <button className="text-[1.1rem] text-center text-white  border-2 rounded-xl border-green-600 md:hover:border-yellow-300 px-5 py-2 ">
                Login
              </button>
            </Link>
          )}
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden text-white mr-3 text-3xl"
        >
          {open ? <IoMdClose /> : <CiMenuBurger />}
        </button>

        {open ? (
          <div
            onClick={(e) => e.stopPropagation()}
            className={`absolute w-[70%] mt-5   right-0 z-50 ${
              open ? "animate-slide-in" : "animate-slide-out"
            }`}
            ref={ref}
          >
            <ul className=" flex flex-col text-[3rem]    pb-[5rem] text-white  items-center  bg-blue-950 w-full ">
              {open && (
                <button
                  onClick={toggleMenu}
                  className="  text-[3rem] font-thin  ml-[14rem] mt-4 mb-5 "
                >
                  {" "}
                  <IoMdClose />{" "}
                </button>
              )}
              <Link
                to="/"
                onClick={handleLinkClick}
                className="font-light text-[2rem] scale-up-center"
              >
                HOME
              </Link>
              <Link
                to="/about"
                onClick={handleLinkClick}
                className="font-light text-[2rem] scale-up-center"
              >
                ABOUT
              </Link>
              <Link
                to="/blog"
                onClick={handleLinkClick}
                className="font-light text-[2rem] scale-up-center"
              >
                BLOG
              </Link>
              <Link
                to="/contact"
                onClick={handleLinkClick}
                className="font-light text-[2rem]   scale-up-center"
              >
                CONTACT US
              </Link>
              <Link
                to="/donationData"
                onClick={handleLinkClick}
                className="font-light text-[2rem] scale-up-center"
              >
                DONATION DATA
              </Link>

              <div className="flex flex-col font-normal gap-6 ">
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
                    className="text-[2rem] text-center  mb-4 border-2 rounded-xl border-yellow-200  px-4 py-1    "
                  >
                    Login
                  </Link>
                )}
              </div>
            </ul>
          </div>
        ) : (
          <>
            <div className="  hidden md:block  md:mx-auto md:text-slate-400 md:font-light md:max-lg:ml-[5rem]  ">
              <ul className=" flex flex-row cursor-pointer  text-[2rem]  gap-[4rem] md:max-lg:gap-[2rem] mt-[2rem]  md:mr-[5rem]     items-center  ">
                <Link to="/" className="md:hover:text-green-400">
                  HOME
                </Link>
                <Link to="/about" className="md:hover:text-green-400 ">
                  ABOUT
                </Link>
                <Link
                  to="/blog"
                  className="md:hover:text-green-400 md:max-lg:hidden"
                >
                  BLOG
                </Link>
                <Link
                  to="/contact"
                  className="md:hover:text-green-400 md:max-lg:hidden"
                >
                  CONTACT
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
