import React from 'react'
import Footer from './Footer'
 
const AboutUs = () => {
 

  return (
     <div className='h-auto flex flex-col items-center mx-auto w-[85%] md:w-[60%] md:gap-4'> 
        
          <h1 className='text-[3rem] mt-[3rem] font-thin'>ABOUT US</h1>


          <p className='text-[1rem] md:text-[1.5rem] font-light text-justify mt-[2rem] md:leading-8'>
          Kindness for Well Being is a dedicated foundation committed to fostering compassion and support within our communities. Our mission is to promote mental and physical well-being through various programs and initiatives. We believe that acts of kindness, no matter how small, can create a significant positive impact on individuals and society.
          </p>

          <p className='text-[1rem] md:text-[1.5rem] font-light text-justify mt-[2rem] md:leading-8'>
          Our foundation focuses on a range of activities, including mental health awareness campaigns, wellness workshops, and community support services. By collaborating with local organizations and volunteers, we aim to provide resources and assistance to those in need. We are passionate about creating a nurturing environment where everyone feels valued and supported.
          </p>

          <p className='text-[1rem] md:text-[1.5rem] font-light text-justify mt-[2rem] mb-[4rem] md:leading-8'>
          At Kindness for Well Being, we envision a world where kindness and empathy are at the forefront of human interactions. Our team is dedicated to inspiring positive change and improving the quality of life for all. We invite you to join us in our mission to spread kindness and promote well-being, making a lasting difference in our communities.







          </p>

          <Footer/>
     
     </div>
  )
}

export default AboutUs