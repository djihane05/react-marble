import React from 'react';
import bgnd2 from '../assets/marron1.jpg'

const About = () => {
  return (
    <div name='Apropos' style={{backgroundImage:`url(${bgnd2}) `,backgroundRepeat:"no-repeat",backgroundSize:"cover",}}  className=' w-full h-screen  content-div '>
          <div className='flex flex-col  items-center pt-16 w-full h-[100vh] max-w[1000px]'>
        <h1 className='text-white text-3xl inline border-b-2 border-[#994d00] font-bold mt-8 '>A Propos ?</h1>
        <div className='max-h[600px]'>
        <p className='mx-16 max-h-[500px] bg-black bg-opacity-60 text-center text-white rounded-sm p-4 text-xl mt-8'>
Bienvenue chez jihen abderrahmane, votre destination de confiance pour des produits en marbre de qualité supérieure. Spécialisés dans l'extraction, la transformation et la vente de marbre, nous offrons une gamme variée de produits exquis pour répondre à tous vos besoins en matière de décoration et de construction.
</p>
</div>
          </div>
      
        </div>
       
     
   
  );
};

export default About;
