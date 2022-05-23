import React from 'react'
import { Link, animateScroll as scroll, } from 'react-scroll'
import bgImg from '../assets/Component1.png'

import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from 'react-icons/fa'
import './footer.css';

const Footer = () => {
  return (
    <div className=' footer w-full mt-24  text-gray-300 py-y px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-4 border-b-2 border-gray-600 py-8'>
            
           
            <div>
                <ul>
               
                <img className='logo' src={bgImg} alt="/" /> 
                    <li className='py-2'>No, 65 Yahyah Abaton Plaza,<br/>
                    Ilorin, Kwara State, Nigeria</li>
                    <li className='py-3'> support@systemtech.com.ng</li>
                    <li className='py-3'>+2348168670476</li>
                  
                </ul>
            </div>
            <div>
                <h6 className=' company font-bold uppercase pt-3'>Company</h6>
                <ul>
            <li className='l py-1'><Link to="home" smooth={true} duration={500}>Home</Link></li>
             <li className='l py-1'><Link to="support" smooth={true} offset={-50} duration={500}>what We Do</Link></li>
             <li className='l py-1'><Link to="about" smooth={true} offset={-200} duration={500}>About Us</Link></li>
            <li className='l py-1'><Link to="team" smooth={true} offset={-100} duration={500}>Our Team</Link></li>
          <li className='l py-1'><Link to="bout" smooth={true} offset={-100} duration={500}>Our Partners</Link></li>
          <li className='l py-1'><Link to="contact" smooth={true} offset={-50} duration={500}>Contact Us</Link></li>
                </ul>
            </div>
            <div className='col-span-2 pt-8 md:pt-2'>
                <p className='py-6 font-bold uppercase'>Subscribe to our newsletter</p>
                <p className='py-6'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                <form className='flex flex-col sm:flex-row'>
                    <input className='w-full p-2 mr-2 rounded-md mb-2' type="email" placeholder='Enter email..'/>
                    <button className='p-2 mb-4'>Subscribe</button>
                </form>
            </div>
        </div>

        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>2022 Workflow, LLC. All rights reserved</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaTwitch />
            <FaGithub />
        </div>
        </div>
    </div>
  )
}

export default Footer