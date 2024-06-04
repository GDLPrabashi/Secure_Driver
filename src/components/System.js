import React from 'react';
import system from "../asserts/system.jpg"

import homepic2 from "../asserts/homepic2.png";


const System = () => {
  return (
    <div>
    
    <img src={system} className='w-full h-40'/>
      <div className='flex md:grid-cols sm:grid-cols '>
      <div className='w-2/4 pt-8 pb-8 pl-8'>
        <ul className='gap-4 space-x-7' >
          <hr className='border-black '/>
          <li className='font-bold'>How does the alcohol detection system work?</li>

        <p>SafeDrive's system continuously monitors alcohol levels in the vehicle cabin using advanced sensors.
          If alcohol levels exceed the threshold, the system triggers alerts and may lock the engine to prevent driving.</p>
          <br></br>

          <hr className='border-black'/>
          <li className='font-bold'>How do I set up and install the system in my vehicle?</li>
          <p>The system is installed by a trained technician, typically involving placement of sensors and connection to the vehicle's ignition system.
             Detailed instructions are provided in the user manual.</p><br></br>
          <hr className='border-black'/>
          <li className='font-bold'>What should I do if the engine locks due to high alcohol levels?</li>
          <p>Contact a designated transport company or arrange for safe transportation home.
             The engine remains locked until alcohol levels decrease or are manually unlocked.</p><br/>
          <hr className='border-black'/>
          <li className='font-bold'>How do I receive alerts and notifications?</li>
          <p>Alerts are sent via text, email, or push notifications to 
            designated recipients, such as transport companies or registered users, informing them of high alcohol levels detected.</p><br/>
          <hr className='border-black'/>
          <li className='font-bold'>Is the system compatible with all vehicle types?</li>
          <p>SafeDrive is designed to be compatible with most vehicle types, including cars, trucks, vans, and commercial vehicles.</p><br/>
          <hr className='border-black'/>
          <li className='font-bold'>How is my personal data and privacy protected?</li>
          <p>SafeDrive follows strict privacy policies and security measures to protect user data,
             complying with relevant data protection laws and regulations.</p><br/>
          </ul>
        
        </div>
        <div>
          <img src={homepic2} className='pt-16 pb-16 pl-16 pr-16'></img>
        </div>
        </div>

    </div>
  )
}

export default System
