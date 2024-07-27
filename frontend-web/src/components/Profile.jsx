import React from "react";
// import { useDispatch } from "react-redux";
// import { logout } from "../services/operation/authAPI";
// import { useNavigate } from "react-router-dom";
import Donation from "./DonationData/Donation";

const Profile = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const handleLogOut = () => {
  //   dispatch(logout(navigate));
  // };
  return (
    <div>
     
      {/* <button onClick={handleLogOut} className="border-2 rounded-xl bg-red-500 px-3 py-2 text-[2rem] ml-[50%] ">logout</button> */}
      <Donation/>
    </div>
  );
};

export default Profile;
