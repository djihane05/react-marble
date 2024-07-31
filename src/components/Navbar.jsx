import React from 'react'
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
    
   
  </div>
  )
}
