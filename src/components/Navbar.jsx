import React, {useState} from 'react';
import './navbar.css';
import { Link, animateScroll as scroll, } from 'react-scroll'
import bgImg from '../assets/Component1.png'


import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)

  return (
    <div className=' nav w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg '>
      <div className='px-2 flex justify-between  w-full h-full'>
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>
          <img className='logo' src={bgImg} alt="/" /> </h1>
          <ul className='ul hidden md:flex uppercase'>
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="support" smooth={true} offset={-50} duration={500}>what We Do</Link></li>
          <li><Link to="about" smooth={true} offset={-200} duration={500}>About Us</Link></li>
          <li><Link to="team" smooth={true} offset={-100} duration={500}>Our Team</Link></li>
          <li><Link to="bout" smooth={true} offset={-100} duration={500}>Our Partners</Link></li>
          <li><Link to="contact" smooth={true} offset={-50} duration={500}>Contact Us</Link></li>
          </ul>
        </div>
       
        <div className='md:hidden mr-2' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-5 py-8' /> : <XIcon className='w-5 py-8'/>}
          
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-purple-500 w-full px-10'}>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="home" smooth={true} duration={500}>Home</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>What we do</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="support" smooth={true} offset={-50} duration={500}>About Us</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="platforms" smooth={true} offset={-100} duration={500}>Our Team</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="pricing" smooth={true} offset={-50} duration={500}>Our Partners</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="pricing" smooth={true} offset={-50} duration={500}>Contact Us</Link></li>

  
      </ul>
    </div>
  );
};

export default Navbar;
