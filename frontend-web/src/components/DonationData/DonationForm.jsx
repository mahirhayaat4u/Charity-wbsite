import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

const DonationForm = () => {

  const {token }=useSelector((state)=>state.auth)
   
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
  }
     

  return (
    <div className="flex flex-col md:items-start  gap-5 mb-8 items-center mt-[2rem] md:mt-10 md:ml-[20rem]">
      <h2 className="text-lg font-bold mb-4">Donation Form</h2>
      <form onSubmit={handleSubmit} className='flex flex-col gap-10'>
       {
        !token && (
          <div className="flex flex-col items-center   md:flex-row md:gap-7">
          <label className="flex flex-col md:flex-row md:gap-7" htmlFor="name">
            Name
          </label>
          <input
          required
            className="text-[1rem] px-6 py-4 border-2 rounded-2xl  border-green-300   md:ml-[5rem] "
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
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
          required
           className="text-[1rem] px-6 py-4 border-2 rounded-2xl  border-green-300   md:ml-[5rem] "
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
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input
          required
            className="text-[1rem] px-6 py-4 border-2 rounded-2xl  border-green-300   md:ml-[1rem] "
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
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
            Amount
          </label>
          <input
          required
           className="text-[1rem] px-6 py-4 border-2 rounded-2xl  border-green-300  md:ml-[4rem]  "
            id="amount"
            type="number"
            value={amount}
            name='amount'
            placeholder='Enter Amount'
            onChange={handleOnChange}
          />
        </div>
        <div className="flex flex-col items-center   md:flex-row md:gap-7">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="purpose">
            Purpose of Donation
          </label>
          <textarea
          required
           className="text-[1rem] px-8 py-4 border-2 rounded-2xl  border-green-300   md:ml-[1rem] "
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
    </div>
  );
};


export default DonationForm;