import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Footer from "./Footer";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const SubmitForm = async (data) => {
    try {
      setLoading(true);
      toast.success("you submit form ");
      setLoading(false);
    } catch (error) {
      console.log("error ", error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        firstName: "",
        lastName: "",
        email: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  return (
 <>
     <form onSubmit={handleSubmit(SubmitForm)} className="flex flex-col  items-center  md:mt-10 md:ml-[10rem]">
      <div className="flex flex-col items-center gap-4 md:items-start ">


        <label className="mt-6 flex flex-col md:flex-row md:gap-8">
          <p className="text-[1.8rem] font-thin">First Name : </p>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            id="firstName"
            {...register("firstName", { required: true })}
            className="text-[1rem] px-6 py-4 border-2 rounded-2xl  border-green-300 md:ml-[6rem] "
          />
          {errors.firstName && <span>Please enter first name</span>}
        </label>



        <label className="flex flex-col md:flex-row md:gap-8 ">
          <p className="text-[1.8rem] font-thin">Last Name : </p>
          <input
            type="text"
            name="lastName"
            placeholder="last Name"
            id="firstName"
            {...register("lastName", { required: true })}
             className="text-[1rem] px-6 py-4 border-2 rounded-2xl  border-green-300  md:ml-[6rem]"
          />
          {errors.lastName && <span>Please enter last name </span>}
        </label>

        

        <label className="flex flex-col md:flex-row md:gap-8 ">
          <p  className="text-[1.8rem] font-thin">Enter your email : </p>
          <input
            type="email"
            name="email"
            placeholder="email"
            id="email"
            {...register("email", { required: true })}
             className="text-[1rem] px-6 py-4 border-2 rounded-2xl border-green-300  md:ml-[2rem] "
          />
          {errors.email && <span>Please enter your email</span>}
        </label>



        <label className="flex flex-col md:flex-row md:gap-8">
          <p  className="text-[1.8rem] font-thin">Type Yor Mesaage : </p>
          <textarea
            type="text"
            name="textarea"
            placeholder="write your message..."
            id="textarea"
            rows={10}
            {...register("textarea", { required: true })}
             className="text-[1rem] px-10 py-4 border-2 rounded-2xl border-green-300   "
          />
          {errors.textarea && <span>Please enter your message</span>}
        </label>


      </div>

      <button type="submit" className="text-[2rem] mx-auto md:mx-0 border-none w-[16rem] md:w-[16rem] md:py-1 py-2 my-8 text-zinc-700 font-thin rounded-2xl bg-green-400 ">Submit form</button>

      
    </form>
    <Footer />
 </>
  );
};

export default Contact;
