import React from 'react';
import './team.css';
import bgImg from '../assets/1.png';
import bgImg1 from '../assets/2.png';
import bgImg2 from '../assets/3.png';
import bgImg3 from '../assets/4.png';
import bgImg4 from '../assets/5.png';
import bgImg5 from '../assets/6.png';
import bgImg6 from '../assets/f2.png';
import bgImg7 from '../assets/f1.png';
import bgImg8 from '../assets/f3.png';
const Team = () => {
  return (
    <div name='team' className='team w-full mt-10'>
    <div className=' container w-full h-[700px] bg-white-900/90 absolute'>
    </div>
    <div className='max-w-[1240px] mx-auto text-black relative'>
        <div className='px-4 py-12'>
            <h2 className='h2 text-3xl pt-8 text-black-300 uppercase text-center'>Meet Our Team</h2>
  
   <div class="container">
   <div class="img-container">
     <div class="img">
     <img className=' img1 w-full   h-[300px] w-[300px]' src={bgImg} alt="/" />
     <h1>Yusuf Yusuf</h1>
     <p>CEO & Backend Developer</p>
     </div>

     <div class="img">
     <img className=' img1 w-full   h-[300px] w-[300px]' src={bgImg1} alt="/" />
     <h1>Yusuf Yusuf</h1>
     <p>Director</p>
    </div>

    <div class="img">
    <img className=' img1 w-full   h-[300px] w-[300px]' src={bgImg2} alt="/" />
    <h1>Yusuf Yusuf</h1>
     <p>Director</p>
    </div>

    <div class="img">
     <img className=' img1 w-full   h-[300px] w-[300px]' src={bgImg3} alt="/" />
     <h1>Yusuf Yusuf</h1>
     <p>Frontend Engineer</p>
     </div>

     <div class="img">
     <img className=' img1 w-full   h-[300px] w-[300px]' src={bgImg4} alt="/" />
     <h1>Yusuf Yusuf</h1>
     <p>Human Resouce Manager</p>
    </div>

    <div class="img">
    <img className=' img1 w-full   h-[300px] w-[300px]' src={bgImg5} alt="/" />
    <h1>Yusuf Yusuf</h1>
     <p>Secretary</p>
    </div>
   </div>
 </div>

 </div>
 </div>

 <div className='py-10 bout w-full  px-4'>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold  text-center'>OUR PARTNERS</h1>
    <div class="container">
   <div class="img-container">
     <div class="img">
     <img className=' img1   h-[200px] w-[200px]' src={bgImg6} alt="/" />
     </div>
     
     <div class="img">
     <img className=' img1    h-[200px] w-[200px]' src={bgImg7} alt="/" />
     </div>
     <div class="img">
     <img className=' img1   h-[200px] w-[200px]' src={bgImg8} alt="/" />
     </div>
    </div>
      
    </div>
    </div>
      
    </div>
 
    


  );
};

export default Team;
