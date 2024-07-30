import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

const DonationForm = () => {

  const {token }=useSelector((state)=>state.auth)
  const [isSubmitted, setIsSubmitted] = useState(false);
   
  const [formData, setFormData] = useState( {
    name:"",
    email:"",
    phone:"",
    amount:"",
    purpose:""


  });

  const {name,email,phone,amount,purpose}=formData

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
    }))
  }
   


  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`you have donated Rupees :  ${formData.amount}`)
    setFormData({
      name:"",
      email:"",
      phone:"",
      amount:"",
      purpose:""
    })

    setIsSubmitted(true)
  
    
  }
     

  return (
    <div className="flex flex-col md:items-start h-[100vh]   gap-5 mb-8 items-center mt-[2rem] md:mt-10 md:ml-[20rem] ">

     {
      !isSubmitted ? (
             <>
                <h2 className="text-lg font-bold mb-4 text-white">Donation Form</h2>

                <form onSubmit={handleSubmit} className='flex flex-col gap-10'>
                {
                  !token && (
                    <div className="flex flex-col items-center   md:flex-row md:gap-7">
                    <label className="flex text-white flex-col md:flex-row md:gap-7" htmlFor="name">
                      Name
                    </label>
                    <input
                    required
                      className="text-[1rem] px-6 md:w-[20rem] py-4 border-2 rounded-2xl  border-green-300   md:ml-[5.5rem] "
                      id="name"
                      type="text"
                      value={name}
                      name='name'
                      placeholder='Enter Name'
                      onChange={handleOnChange}
                    />
                  </div>
                  )
                }
                {
                  !token && (
                    <div className="flex flex-col items-center   md:flex-row md:gap-7">
                    <label className="block text-white   text-sm font-bold mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                    required
                    className="text-[1rem] px-6 py-4 md:w-[20rem] border-2 rounded-2xl  border-green-300   md:ml-[5.5rem] "
                      id="email"
                      type="email"
                      value={email}
                      name='email'
                      placeholder='Enter Email'
                      onChange={handleOnChange}
                    />
                  </div>
                  )
                }
                {
                  !token && (
                    <div className="flex flex-col items-center  md:flex-row md:gap-7">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                    required
                      className="text-[1rem] px-6 py-4 border-2 md:w-[20rem] rounded-2xl  border-green-300   md:ml-[1.5rem] "
                      id="phone"
                      type="tel"
                      value={phone}
                      name='phone'
                      placeholder='Enter Contact Number'
                      onChange={handleOnChange}
                    />
                  </div>
                  )
                }
                  <div className="flex flex-col items-center  md:flex-row md:gap-7">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="amount">
                      Amount
                    </label>
                    <input
                    required
                    className="text-[1rem] px-6 py-4 border-2 md:w-[20rem] rounded-2xl  border-green-300  md:ml-[4.5rem]  "
                      id="amount"
                      type="number"
                      value={amount}
                      name='amount'
                      placeholder='Enter Amount'
                      onChange={handleOnChange}
                    />
                  </div>
                  <div className="flex flex-col items-center   md:flex-row md:gap-7">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="purpose">
                      Purpose of Donation
                    </label>
                    <textarea
                    required
                    className="text-[1rem] px-8 py-4 border-2 md:w-[20rem] rounded-2xl  border-green-300   "
                      id="purpose"
                      value={purpose}
                      name='purpose'
                      placeholder='Purpose....'
                      onChange={handleOnChange}
                    />
                  </div>
                  <button
                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold md:w-[10rem] py-2 px-4 rounded "
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
             </>
      ):
      (
        <div className="   flex flex-col justify-center items-center gap-10 md:ml-2">
          <h2 className="text-2xl font-bold text-white text-[2rem]">Thank You!</h2>
          <p className="mt-4 text-white text-[1.5rem] w-[20rem] text-justify md:w-[30rem] lg:w-[40rem] " >
            “Thank you so much for your donation. Your generosity means everything to us and to  the community we serve.”
          </p>
        </div>
      )
     }

    </div>
  );
};


export default DonationForm;