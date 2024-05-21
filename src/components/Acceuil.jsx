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
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#994d00] hover:border-[#994d00] hover:text-white'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
</div>
  )
}

export default Home