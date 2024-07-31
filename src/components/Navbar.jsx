import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
 
  FaInstagram,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed text-white bg-[#994d00] w-full max-w[1000px] h-[75px] flex justify-between px-4 items-center opacity-75 ">


      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to='acceuil' smooth={true} duration={500}>
            Acceuil
          </Link>
        </li>
        <li>
          <Link to='apropos' smooth={true} duration={500}>
            Apropos ?
          </Link>
        </li>
        <li>
          <Link to='produits' smooth={true} duration={500}>
            Nos produits
          </Link>
        </li>
    
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#994d00] flex flex-col justify-center items-center '
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='' smooth={true} duration={500}>
            Acceuil
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='Apropos' smooth={true} duration={500}>
            apropos ?
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='Produits' smooth={true} duration={500}>
            Nos produits
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='Contact' smooth={true} duration={500}>
            contact
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
        
        </li>
      </ul>

     
     
      </div>
  
  );
};

export default Navbar;
