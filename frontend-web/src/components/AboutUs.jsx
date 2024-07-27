import React from 'react'
import Footer from './Footer'
 
const AboutUs = () => {
 

  return (
     <div className='h-auto flex flex-col items-center mx-auto w-[85%] md:w-[60%] md:gap-4'> 
        
          <h1 className='text-[3rem] mt-[3rem] font-thin'>ABOUT US</h1>


          <p className='text-[1rem] md:text-[1.5rem] font-light text-justify mt-[2rem] md:leading-8'>
          Helping those in need through well-established NGO services in India is indeed a charitable act. Narayan Seva Sansthan, one of the well-known non-profit charity organisations in India, boasts of over 480 branches across the country and abroad. Our comprehensive approach touches every facet of life. We work tirelessly towards furthering several initiatives, including eradicating the root causes of disability, providing corrective surgeries, and offering free education and meals to the underprivileged.
          </p>

          <p className='text-[1rem] md:text-[1.5rem] font-light text-justify mt-[2rem] md:leading-8'>
          Our commitment extends to empowering those with visual, hearing, and speech impairments through life skills training and specialised education. Additionally, we provide professional skill development programs for people with disabilities. Established in 1985, Narayan Seva Sansthan had a humble beginning as the charity foundation, ‘A Fistful of Flour', serving meals to the physically and economically disadvantaged. Our mission has since evolved. Today, we offer free corrective surgeries to patients suffering from polio and congenital disabilities. We also provide free artificial limbs to amputees.
          </p>

          <p className='text-[1rem] md:text-[1.5rem] font-light text-justify mt-[2rem] mb-[4rem] md:leading-8'>
          Our headquarters are situated in Udaipur, Rajasthan, India, where our hospital boasts a collective capacity of 1100 beds and attracts patients from across India and the world for polio-related treatments and corrective surgeries. Regardless of caste, creed, or religion, we have conducted over 4,38,453 free-of-cost polio corrective surgeries to date. We continue to transform lives, aiming to be considered the top charity organisation in India that serves those in need, consistently working towards the betterment of society as a whole.
          </p>

          <Footer/>
     
     </div>
  )
}

export default AboutUs