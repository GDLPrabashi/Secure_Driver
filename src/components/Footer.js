import React from 'react';
import logo from "../asserts/logo.jpeg";

const Footer = () => {
  return (
    <div  className='p-0 pb-1 pr-1 mx-auto bg-black md:px-14 max-w-screen-2xl'>
      <div className='flex flex-col pt-4 my-12 md:flex-row'>
       
            
                <div className='space-y-8 md:w-1/2'>
                    <a href="/"className='flex items-center space-x-3 text-2xl font-semibolf text-primary'>
                    <img src={logo}  className='h-20 pt-4'alt="logo" />
                    <span className="font-bold text-white">SECURE DRIVER</span>
                </a>
                <p className='text-white md:w-1/2'>SafeDrive : Advanced alchohol detection and engine locking system,ensuring
                    road safety by preventing deunk friving incidents and providing safe tansport solutions
                </p>
                </div>
                
                <div className='flex justify-between gap-8 md:w-1/2 md:flex-row'>
                    <div className='mt-5 space-y-4 text-white'>
                        <h4 className='text-xl'>Links</h4>
                        <ul>
                            <a href="/Home" className='block hover:text-gray-300'>Home</a>
                            <a href="/about" className='block hover:text-gray-300'>About us</a>
                            <a href="/System" className='block hover:text-gray-300'>System</a>
                            <a href="/Contactus" className='block hover:text-gray-300'>Sign up</a>
                        </ul>
                    </div>

                    <div className='mt-5 space-y-4 text-white'>
                        <h4 className='text-xl'>Help</h4>
                        <ul>
                            <a href="/System" className='block hover:text-gray-300'>How dows it work ?</a>
                             <a href="/System" className='block hover:text-gray-300'>How do I set ip the system ?</a> 
                            <a href="/System" className='block hover:text-gray-300'>Is the system compatible ?</a>
                             <a href="/System" className='block hover:text-gray-300'>How do I receive alerts ?</a>
                        </ul>
                    </div>

                    <div className='mt-5 space-y-4 text-white'>
                        <h4 className='text-xl'>Contacts</h4>
                        <ul>
                            <a href="/" className='block hover:text-gray-300'>(071)86 66 782</a>
                            <a href="/" className='block hover:text-gray-300'>No,18</a>
                            <a href="/" className='block hover:text-gray-300'>Bulugaha junction ,</a>
                            <a href="/" className='block hover:text-gray-300'>Kelaniya</a>
                        </ul>
                    </div>
                </div>
    
      
    </div>
    </div>
  )
}

export default Footer;