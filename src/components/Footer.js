import React, { useState } from 'react';
import axios from 'axios';
import { FaFacebook , FaSquareXTwitter, FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_DOMAIN_URL}/subscribe`, { email });
      setMessage(response.data.message);
      setEmail(''); // Clear the email input field after successful subscription
    } catch (error) {
      setMessage('Error subscribing to newsletter. Please try again.');
      console.error('Error subscribing to newsletter:', error);
    }
  };

  return (
    <div className='w-full mt-[40px]  sm:px-[100px] mb-3  px-4 '>
      <div className='flex flex-col gap-5  sm:flex-row sm:justify-between sm:gap-8 sm:items-center flex-wrap'>
        <div>
          <h2 className='mb-1'>NewsLetters</h2>
          <div className='flex items-center gap-4 '>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='rounded-md h-[30px] text-black p-2 outline-none'
            />
            <button
              onClick={handleSubscribe}
              className='w-[70px] h-[30px] text-xs sm:w-[80px] sm:text-base py-2 px-2 border rounded-md flex justify-center items-center
                     font-semibold hover:scale-[1.01] text-white bg-gradient-to-r from-cyan-900 to-indigo-600'>
              Subscribe
            </button>
          </div>
          {message && <p>{message}</p>}
        </div>

        <div className='flex gap-7'>
          <Link to='/'>Home</Link>
          <Link to='/books'>Books</Link>
          <Link to='/contact'>Contact</Link>
        </div>

        <div className='flex gap-3'>
          <FaFacebook size={30} className='' />
          <FaInstagram size={30} className='' />
          <FaSquareXTwitter size={30} className='' />
          <Link to='/' className='logo text-xl ml-3'>
            Kristoffer J.Andersen
          </Link>
        </div>
      </div>
      <div  className='text-[12px] text-center mt-14'>
        <a href='https://portfolio-2023-khaki-iota.vercel.app' target='_blank' rel='noreferrer' >Copyright © 2024 by A.Sharkawi</a>
        
      </div>
    </div>
  );
};

export default Footer;






