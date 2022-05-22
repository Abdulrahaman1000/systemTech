import React from 'react';
import './contact.css';
import bgImg from '../assets/contact.png';

const Pricing = () => {
  return (
    <div className='contact w-full  py-16 px-4'>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center'>Contact Us</h1>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
    <img className=' img1 w-full   h-[400px] w-[400px]' src={bgImg} alt="/" />
      <div className='flex flex-col justify-center'>
      <div class="wrapper">
  	<div class="form">
  		<div class="input_field">
  			<label>Your Name</label>
  			<input type="text" class="input"/>
  		</div>
  		<div class="input_field">
  			<label>Your Email</label>
  			<input type="Email" class="input"/>
  		</div>
          
          <div class="input_field">
  			<label>Message</label>
  			<textarea></textarea>
  		</div>
         
  		<div class="btn">
  			<input type="submit" value="Send Message" class="sign_btn"/>
  		</div>
  	</div>
  	
  </div>
      </div>
    </div>
  </div>
  );
};

export default Pricing;
