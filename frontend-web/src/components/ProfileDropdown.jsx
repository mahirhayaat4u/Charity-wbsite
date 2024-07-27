import React, { useRef, useState } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { AiOutlineCaretDown,AiOutlineCaretUp } from "react-icons/ai";
import { VscDashboard, VscSignOut } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../services/operation/authAPI";
import useOnClickOutside from "./hook/useOnClickOutside";

const ProfileDropdown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const toggleDropDown =() => setOpen((prev) => !prev);
  const closeDropdown = () => setOpen(false);

  useOnClickOutside(ref, closeDropdown);

  return (
    <button onClick={toggleDropDown} className="text-white md:w-[10rem] md:top-[1rem] top-[2rem] flex flex-col absolute right-0 py-5 px-5 w-[30%]  bg-sky-950">
      <div className="flex flex-row gap-6 justify-center items-center">
        <IoPersonSharp className="text-3xl" />
       {
        open ? (
          <AiOutlineCaretDown  />
        ):(
          <AiOutlineCaretUp />
        )
       }
      </div>

      {open && (
        <div onClick={(e) => e.stopPropagation()}   ref={ref}>
          <Link to="/profile" className="flex flex-row gap-2 justify-center items-center mt-4">
            <VscDashboard />
            Profile
          </Link>
          <div
            onClick={() => {
              dispatch(logout(navigate));
              setOpen(false);
            }}
            className="flex flex-row gap-2 justify-center items-center mt-4"
          >
            <VscSignOut />
            Logout
          </div>
        </div>
      )}
    </button>
  );
};

export default ProfileDropdown;
