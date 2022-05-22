import React from 'react';
import bgImg from '../assets/contact.png';

const Pricing = () => {
  return (
    <div className='contact w-full  py-16 px-4'>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center'>Contact Us</h1>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
    <img className=' img1 w-full   h-[350px] w-[350px]' src={bgImg} alt="/" />
      <div className='flex flex-col justify-center'>
      
      </div>
    </div>
  </div>
  );
};

export default Pricing;
