import React from 'react';
import './support.css';

import bgImg from '../assets/mobile.jpg'
import bgImg1 from '../assets/webb.jpg'
import bgImg2 from '../assets/finance.jpg'



const Support = () => {
  return (
  <div name='support' className='w-full mt-10'>
      <div className='h-[700px] bg-red-900/90 absolute'>
      </div>
      <div className='max-w-[1240px] mx-auto text-black relative'>
          <div className='px-4 py-12'>
              <h2 className='h2 text-3xl pt-8 text-black-300 uppercase text-center'>What we do</h2>
              <p className=' p py-1 text-2xl  text-center'>Our team of engineers and programmers apply their deep knowledge of electrical codes, embedded system and
              software development with their hand-on experence to design and implement cost-effective
              ,intuitive, rubost for eectrical engineering and software challenges.</p>

    <div className='support'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
    <img className=' img1 w-full   h-[300px] w-[300px]' src={bgImg} alt="/" />
      <div className='margin flex flex-col'>
        <h1 className='h md:text-4xl sm:text-3xl text-2xl font-bold py-3'>Mobile Application Development</h1>
        <p className='pp py-1 text-1xl  text-center'>
        Our experts help clients transform their ideas into mobile 
        applications designed to run on all plaftforms. Optimization, 
        efficiency and great UI/UX process is our concernn. 
        We build mobile applications for:
        </p>
      </div>
    </div>
  </div>

  <div className='support1'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
    <img className='img2 w-full mx-10 rounded-full  w-full  h-[250px] w-[250px]' src={bgImg1} alt="/" />
      <div className='margin1 flex flex-col'>
        <h1 className='h md:text-4xl sm:text-3xl text-2xl font-bold py-3'>Website Development</h1>
        <p className='pp py-1 text-1xl text-center'>
     We have specialists who are skilled at providing client with websites
     using latest technologies.
        </p>
      </div>
    </div>
  </div>
  <div className='support2'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
    <img className='img3  h-[300px] w-[300px]' src={bgImg2} alt="/" />
      <div className='margin2 flex flex-col'>
        <h1 className='h md:text-4xl sm:text-3xl text-2xl font-bold py-3'>Financial Software Development</h1>
        <p className='pp py-1 text-1xl  text-center'>
        Our team of financial experts are always ready to help clients designed their
        proffered fin-tech solutions:
        </p>
      </div>
    </div>
  </div>
          </div>

         
          </div>
      </div>
  
  );
};

export default Support;
