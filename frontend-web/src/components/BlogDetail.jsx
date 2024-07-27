import React from 'react'
import { useParams } from 'react-router-dom'
import child from "../assets/gaza child2.webp"
import Footer from './Footer';
const BlogDetail = ({ cards}) => {
    const {id} =useParams();

    const card=cards.find((card) => card.id === parseInt(id,10))

    if (!card) {
        return <div>Card not found </div>;
    }

  return (
    <>

  

 
    <div  className='flex flex-col mt-10 md:gap-20 md:flex-row mb-[5rem]   w-[85%] mx-auto '>
    
     <div>
     <img src={child} alt='imagee' width={600} className='rounded-xl md:w-[100rem]'/>
     </div>
      <div className='md:flex md:flex-col md:items-start '>
      <h1 className='text-[2.5rem] mt-5 font-serif'> {card.heading} </h1>
      <p className='font-light md:text-[1.5rem] text-justify w/11/12 mt-8'> {card.description} </p>
      </div>

     
      
    </div>

     <Footer/>

     </>
  )
}

export default BlogDetail