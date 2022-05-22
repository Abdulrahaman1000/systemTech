import React from 'react'
import './about.css';
import bgImg from '../assets/about.jpg'
const About = () => {
  return (
    <div className=' about w-full  py-16 px-4'>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center'>About Us</h1>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
      
    <img className='img  w-full h-[300px] w-[300px]' src={bgImg} alt="/" />
      <div className='flex flex-col justify-center'>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-10'>Who Is
Systems Technologies</h1>
        <p>
        System Technologies Limited a limited liability company started in 2020. 
        It was established to help actualize technological solutions for Nigerian businesses. 
        We offer vast engineering, security and technology services & solutions, our services 
        includes; embedded system design, custom financial applications development, mobile application 
        development, PC software development, Java software development, Website development for Nigerian fin-tech, banking and retail sectors, and individuals. With our world class IT experts, we help actualize technology solution for our client in various areas of specialization. 
        It would be a wonderful experience doing business with us.
        </p>
      </div>
    </div>
  </div>
  )
}

export default About