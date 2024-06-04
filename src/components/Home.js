import React from 'react'
import Banner from './Banner';
import homepic1 from "../asserts/homepic1.jpg";
import homepic2 from "../asserts/homepic2.png";




const Home = () => {
  return (
    <div>
      
      <Banner/>
     
      <div className='p-4 space-y-8 md:px-14 mx:auto'>
        <div className='flex flex-col items-center justify-between gap-8 md:px-14 md:flex-row'>
            <div className=''>
                <img src={homepic1}/>
            </div>
            <div className='md:w-2/5'>
                
                <p className='text[14px]'>Protecting your loved ones from the dangers of drunk driving is a top priority for many of us.
                 By investing in an alcohol detection and engine locking system,
                  you can take proactive steps to ensure the safety of those closest to you.
                   Whether it's your teenage child heading out for a night with friends,
                    a family member who may have had one too many drinks at a social gathering, 
                    or a close friend who needs a reliable way to prevent impaired driving, this system offers a crucial layer of protection. 
                    By implementing this innovative technology, you can help prevent potentially devastating accidents and keep your loved ones safe on the road. 
                    Don't wait until it's too late – take action now to safeguard those you care about from the risks of drunk driving.
</p>
            </div>
        </div>
       
        <div className='flex flex-col items-center justify-between gap-8 md:px-14 md:flex-row-reverse'>
            <div className='w-1/2'>
                <img src={homepic2} className='w-[600px] h-[400px]'/>
            </div>
            <div className='md:w-1/2'>
                <h4 className='pb-4 text-2xl font-semibold'>Let's be safe !</h4>
                <p className='text[14px]'>Our advanced alcohol detection and engine locking system are designed for prevent drunk driving incidents , ensuring a
                safer journey for everyone on the road. With real-time monitoring automatic engine lock, and instant alerts to transport companies.
                <br/>
                SecureDriver not only detects high alcohol levels but also provides safe transport options for affected drivers.
                <br/><button className='p-2 bg-orange-500 rounded hover:bg-orange-400'>Learn more</button><br/>
                Join us in making roads safer and promoting responsible driving.
                <br/><br/>
                Sign up today and be part of the SecureDriver community to saving lives !
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
