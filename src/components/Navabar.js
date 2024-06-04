import React from 'react';
import logo from "../asserts/logo.jpeg";
import { Link } from 'react-router-dom';


const Menu = [
  { id: 1, name: "Home", link: "/Home" },
  { id: 2, name: "About us", link: '/about' },
  { id: 3, name: "System", link: "/System" },
  { id: 4, name: "Contact us", link: "/contactus" }
];

const Navbar = () => {



  return (
    <div className='pb-2 mb-2 h-14'>
      <div className='bg-white '>
        <div className='container flex items-center justify-between'>
          <Link to="/Home" className='flex items-center gap-2 text-2xl font-bold sm:text-3xl'>
            <img src={logo} alt="logo" className='h-16 w-15' />
            SECURE DRIVER
          </Link>
          <div className='flex items-center justify-end gap-4 hover:cursor-pointer'>
            <ul className='items-center hidden gap-4 text-xsl sm:flex '>
              {Menu.map((data) => (
                <li key={data.id}>
                  <Link to={data.link} className='inline-block px-4'>{data.name}</Link>
                </li>
              ))}
            </ul>
            <button className="px-4 py-2 text-orange-500 duration-150 rounded-md hover:text-orange-800"  >Login</button>
            <button className="px-4 py-2 text-orange-500 duration-150 hover:text-orange-800">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
