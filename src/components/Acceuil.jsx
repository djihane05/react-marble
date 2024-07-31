import React from 'react'
import bgnd from '../assets/bgnd.jpg'
import { HiArrowNarrowRight } from 'react-icons/hi';

function Home() {
  return (
    <div name='acceuil' style={{backgroundImage:`url(${bgnd}) `,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}  className='  w-full h-[800px]    content-div " '>
 <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center max-h-[1000px]'>
        
        <h1 className='text-4xl sm:text-7xl font-bold text-gray-100 mt-40'>
        l'élegance en marbre
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-gray-200'>
         créer l'extraordinaire
        </h2>
        <p className=' py-4 max-w-[700px] font-bold text-xl text-gray-300'>
         Bienvenue dans l'univers exquis du marbre 
        </p>
        <div>
        
        </div>
      </div>
</div>
  )
}

export default Home