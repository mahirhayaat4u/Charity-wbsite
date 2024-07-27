import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../services/operation/authAPI";
import Footer from "../components/Footer"
const SignUp = () => {
    const navigate=useNavigate();
     const dispatch=useDispatch();

     const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email : "",
        password : "",
        confirmPassword : "",
    })

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { firstName, lastName, email, password, confirmPassword } = formData

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
    }))
}

const handleOnSubmit=(e)=>{
    e.preventDefault()
    
    if(password !== confirmPassword) {
        toast.error("Passwords Do Not Match")
        return
    }
    
  

    dispatch(signUp( firstName, lastName, email, password,navigate));
     

    setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })


}

  return (
   <>
     <div className="h-[100vh]">
      <form onSubmit={handleOnSubmit} className="flex flex-col md:items-start  gap-5 mb-8 items-center mt-[2rem] md:mt-10 md:ml-[20rem]">
        <label className="flex flex-col md:flex-row md:gap-7">
          <p  className="text-[1.8rem] font-thin">First Name : </p>

          <input
            required
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleOnChange}
            placeholder="Enter first name"
            className="text-[1rem] px-10 py-4 border-2 rounded-2xl border-green-300  md:ml-[9rem] "
          />
        </label>

        <label  className="flex flex-col md:flex-row md:gap-7">
          <p  className="text-[1.8rem] font-thin">Enter last name :</p>
          <input
            required
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleOnChange}
            placeholder="Enter last name"
             className="text-[1rem] px-10 py-4 border-2 rounded-2xl border-green-300  md:ml-[6rem] "
          />
        </label>

        <label  className="flex flex-col md:flex-row md:gap-7">
          <p  className="text-[1.8rem] font-thin">enter email : </p>
          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Enter email"
             className="text-[1rem] px-10 py-4 border-2 rounded-2xl border-green-300   md:ml-[9rem]"
          />
        </label>

        <label className="relative flex flex-col md:flex-row md:gap-7">
        <p  className="text-[1.8rem] font-thin">Enter Password : </p>
          <input
            required
            type={showPassword ? "text" : "password"}
            name="password"
            value={password}
            onChange={handleOnChange}
            placeholder="Enter password"
             className="text-[1rem] px-10 py-4 border-2 rounded-2xl border-green-300  md:ml-[6rem] "
          />

          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className=" absolute right-3 top-[4rem] md:top-[1rem] z-[10] cursor-pointer"
          >
            {showPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
        </label>

        <label className="relative flex flex-col md:flex-row md:gap-7">
        <p  className="text-[1.8rem] font-thin">Enter Confirm Password : </p>
          <input
            required
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleOnChange}
            placeholder="Enter confirm password"
             className="text-[1rem] px-10 py-4 border-2 rounded-2xl border-green-300   md:ml-[0.1rem]"
          />

          <span
            onClick={() => setShowConfirmPassword((prev) => !prev)}
            className="absolute right-3 top-[4rem] md:top-[1rem] z-[10] cursor-pointer"
          >
            {showConfirmPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
        </label>

        <button type="submit"   className="text-[2rem] mx-auto md:mx-0 border-none w-[16rem] md:w-[16rem] md:py-1 py-2 my-8 text-zinc-700 font-thin rounded-2xl bg-green-400 ">submit</button>
      </form>
    </div>
    <Footer/>
   </>
  );
};

export default SignUp;
