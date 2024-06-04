import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import cont from "../asserts/contact.jpg";

const Conatctus = () => {
  return (
    <div>
     
      <img src={cont} className='w-full h-40'/>
   
    <div className='flex pt-10 pb-10 md:flex-row'>
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2871936739475!2d79.91555340000001!3d6.975403200000011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2597c8dde7e47%3A0x341e7e820c46d3ed!2sUniversity%20of%20Kelaniya!5e0!3m2!1sen!2slk!4v1714624629599!5m2!1sen!2slk" 
        width="800" 
        height="450" 
        stylem={{border:0}} 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"
        className='pl-8 pr-8 '></iframe>
        </div>
        <div>
        
        <div className='pl-8 mt-10 mb-10 space-y-8 border-black'>
            <h1 className='mt-5 text-2xl font-bold'>Conatct us </h1>
            <p>You can reach out to us using the following methods:</p>
            <div className='flex items-center justify-content'>
           <FaLocationDot className='w-10 h-5 ' />
           <p> No,18 Bulugaha junction<br/>
           Kelaniya
           </p>
           </div>
           <div className='flex items-center justify-content'>
           <FaPhoneAlt className='w-10 h-5 ' />
           <p> (071) 86 66 782
           </p>
           </div>
           <div className='flex items-center justify-content'>
           <SiGmail className='w-10 h-5 ' />
           <p> securedriver@gmail.com
           </p>
           </div>
            
           
        </div>
        </div>
        
    </div>
    </div>
  )
}

export default Conatctus;
