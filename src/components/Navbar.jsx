import React from 'react'
import { FaBars , FaGithub, FaLinkedin, FaFacebook, FaLinkedinIn} from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
export default function Navbar() {
  return (
    <div className="fixed text-white bg-[#994d00] w-full max-w[1000px] h-[75px] flex justify-between px-4 items-center opacity-75 ">
    <div>
      <ul className="flex ">
        <li>  <Link to='acceuil' smooth={true} duration={500}>
            Acceuil
          </Link></li>
          <li>
          <Link to='Apropos' smooth={true} duration={500}>
          A propos ?
          </Link></li>
        <li> <Link to='produits' smooth={true} duration={500}>
            Nos Produits
          </Link></li>
        <li> <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link></li>
       
      </ul>
    </div>
    
    <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/djihane-abderrahmane-9ab083304'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/djihane05'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-500'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.facebook.com/share/cgrv9snpxkQLzaow/?mibextid=qi2Omg'
            >
              Resume <FaFacebook size={30} />
            </a>
          </li>
        </ul>
      </div>
  </div>
  )
}
