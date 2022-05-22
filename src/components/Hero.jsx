import React from 'react'
import './hero.css';

import bgImg from '../assets/cyber-bg.png'

const Hero = () => {
  return (
        
      <div name='home' className=' home w-full h-screen bg-zinc-200 flex flex-col justify-between'>
  
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='note'>
                <h1 className='py-3 text-5xl md:text-6xl'>IT Engineering</h1>
                <h1 className='text-6xl'>Solutions</h1>
                <p>People and Solutions.</p>
            </div>
            <div className='Himage'>
                <img className='Himage' src={bgImg} alt="/" />
            </div>
          
        </div>
    </div>
    

  )
}

export default Hero