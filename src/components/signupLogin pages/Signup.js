import React from 'react'

const Signup = () => {
  return (
    <div className='flex items-center justify-center'>
      <div>
        <div className='p-8 bg-gray-200 rounded'>
          <form>
            <h1 className='mb-4 text-2xl font-bold text-center ' >Sign up</h1>
            <h4 className='mb-2 text-lg font-bold'>Personal Details</h4>
            <div className='mb-4'>
              <label htmlFor="name" className='block mb-1'>Full name</label>
              <input type="text" placeholder='Enter your full name' className='w-full px-3 py-2 border rounded'/>
            </div>
            <div className='mb-4'>
              <label htmlFor="Address" className='block mb-1'>Address</label>
              <input type="text" placeholder='Enter your address' className='w-full px-3 py-2 border rounded'/>
            </div>
            <div className='mb-4'>
              <label htmlFor="email" className='block mb-1'>Email</label>
              <input type="email" placeholder='Enter email' className='w-full px-3 py-2 border rounded'/>
            </div>
            <div className='mb-4'>
              <label htmlFor="nic" className='block mb-1'>NIC number</label>
              <input type="text" placeholder='Enter NIC number' className='w-full px-3 py-2 border rounded'/>
            </div>
            <div className='mb-4'>
              <label htmlFor="phone number" className='block mb-1'>Phone number</label>
              <input type="text" placeholder='Enter your phone number' className='w-full px-3 py-2 border rounded'/>
            </div>
            <div className='mb-4'>
              <label htmlFor="vehicle no" className='block mb-1'>Number plate of the vehicle</label>
              <input type="text" placeholder='Vehicle number1' className='w-full px-3 py-2 mb-2 border rounded'/>
              <input type="text" placeholder='Vehicle number2' className='w-full px-3 py-2 border rounded'/>
            </div>
            <h4 className='mb-2 text-lg font-bold'>Guardian's Details</h4>
            <div className='mb-4'>
              <label htmlFor="name" className='block mb-1'>Full name</label>
              <input type="text" placeholder='Enter your full name' className='w-full px-3 py-2 border rounded'/>
            </div>
            <div className='mb-4'>
              <label htmlFor="Address" className='block mb-1'>Address</label>
              <input type="text" placeholder='Enter the address' className='w-full px-3 py-2 border rounded'/>
            </div>
            <div className='mb-4'>
              <label htmlFor="phone number" className='block mb-1'>Emergency phone number</label>
              <input type="text" placeholder='Enter your phone number' className='w-full px-3 py-2 border rounded'/>
            </div>
            <div className='mb-4'>
              <label htmlFor="relationship" className='block mb-1'>Relationship</label>
              <input type="text" placeholder='Enter your relationship' className='w-full px-3 py-2 border rounded'/>
            </div>
            <div>
              <button className='px-4 py-2 text-white bg-orange-500 rounded hover:bg-blue-600'>Sign up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
