import React from 'react'
import child from "../assets/gaza child2.webp"
const Card = ({card,onClick}) => {
  const textSubs=card.description.substring(0,60)+" ..."
  return (
    <div onClick={onClick} className='flex flex-col gap-4 items-center w-[85%] mx-auto border-2  rounded-2xl   mt-10 mb-2  '>
      <img src={child} alt='imagee'  className='w-full  bg-contain rounded-tr-2xl rounded-tl-2xl'/>
      <h1 className='text-[1.7rem] font-serif'> {card.heading} </h1>
      <p className='w-11/12 text-justify font-light mb-5 '
      
      > {textSubs} </p>
    </div>
  )
}

export default Card