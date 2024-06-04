import React from 'react';
import about from "../asserts/about.jpg"
import company from "../asserts/company.jpg";


const Aboutus = () => {
  return (
    <div>
    
     <img src={about} className='w-full h-40'/>
     <div className='pt-8 pb-8'>
      <div className='items-center pl-16 pr-16 w-full-screen'>
        <div className='grid items-start grid-cols-1 gap-8 md:grid-cols-3 sm:grid-cols-2 md:gap-12'>
          <div className='bg-[rgba(255,255,255,0,0.4)] rounded-[35px] shadow-3xl p-8 h-50 justify-center items-center'>
            <div>
             <h2 className='justify-center font-bold'>Our purpose</h2>
             <p>Our purpose at SafeDrive is to revolutionize road safety through innovative technology, 
              empowering drivers to make responsible choices and ensuring every journey ends safely.</p>
          </div>
        </div>
      
      
      
          <div className='bg-[rgba(255,255,255,0,0.4)] rounded-[35px] shadow-3xl p-8 h-50 justify-center items-center'>
             <h2 className='justify-center font-bold'>Our vision</h2>
             <p>SafeDrive aims to transform road safety with cutting-edge alcohol detection and engine locking technology, 
              forging a future where every journey is secure, and lives are safeguarded through responsible driving."</p>
          </div>
        
      
      
          <div className='bg-[rgba(255,255,255,0,0.4)] rounded-[35px] shadow-3xl h-50 p-8  justify-center items-center'>
             <h2 className='font-bold '>Our mission</h2>
             <p>SafeDrive's mission is to eradicate the dangers of drunk driving by providing cutting-edge technology and 
              fostering a culture of responsibility on the road, ultimately saving lives and creating safer communities</p>
          </div>
          </div>
       
    





      <div className='flex pt-8 pb-8 pl-16 mt-6 bg-orange-300 pr- md:flex-row-reverse sm:grid-col-2 md:flex-flow-col rounded-[35px]'>
        
        <h2 className='w-1/2 text-xl font-semibold text-center'>Our company
        <img src={company} className='items-center justify-center w-3/4 h-48'/>
        </h2>
      
        <p className='w-1/2'>we're driven by a singular purpose: 
        to eradicate the scourge of drunk driving and make our roads safer for everyone. 
        Every day, we're fueled by the knowledge that our technology has the power to save lives and prevent countless tragedies.
         We refuse to accept the status quo, pushing the boundaries of innovation to develop smarter, more effective solutions that 
         seamlessly integrate into vehicles and empower drivers to make responsible choices. Our team is united by a passion for excellence, 
         a commitment to quality, and a relentless pursuit of progress. Together, we're not just building a company—we're building a movement 
         towards a future where drunk driving is a thing of the past. And we won't rest until every journey ends safely, every time.

</p>
      </div>
      <div className='pt-8 pb-8 pl-16 pr-16'>
        <h2 className='text-xl font-bold'>Message to our valuable customers,</h2>
        <p> SafeDrive prioritizes your safety with cutting-edge alcohol detection and engine blocking systems. 
          Our advanced technology surpasses traditional safety measures, providing peace of mind on the road.
           Investing in SafeDrive means investing in a safer future for you and your community. We're dedicated to empowering responsible decisions and equipping you with the tools for safer travels. Join us in our mission to eliminate drunk driving dangers from every journey. Together, we'll make every mile a safer one.

</p>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Aboutus;
