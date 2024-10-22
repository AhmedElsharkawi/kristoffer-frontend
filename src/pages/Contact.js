import React, { useState } from 'react';
import axios from 'axios';
import library from '../assets/lib5.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false); // State variable to track form submission
  const [error, setError] = useState(null); // State variable to hold error message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Disable the button
      setSubmitted(true);
      
      await axios.post(`${process.env.REACT_APP_DOMAIN_URL}/contact`, formData);
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
      setError(error.response.data);
    } finally {
      // Enable the button after form submission (whether successful or not)
      setSubmitted(false);
    }
  };

  return (
    // <div className='w-full relative md:bg-black'>
    //   <div className='w-[100%] h-[100%]'>
    //     <img src={library} alt='' className='w-[100%] h-[250px] md:h-[100vh] object-cover md:opacity-40' />
    //   </div>

    //   <form onSubmit={handleSubmit} className='flex text-xl tracking-widest flex-col gap-7 md:gap-10 px-4 mt-7 sm:px-[100px] md:absolute md:top-10 md:w-full lg:w-[80%]' data-aos="fade-right">
    //     <input type='text' placeholder='Name' name='name' value={formData.name} onChange={handleChange} className='p-2 rounded-sm outline-none bg-transparent border-b-2  text-xl tracking-widest focus:bg-white focus:text-indigo-800'  required/>
    //     <input type='email' placeholder='Email Address' name='email' value={formData.email} onChange={handleChange} className='p-2 rounded-sm outline-none bg-transparent border-b-2  text-xl tracking-widest focus:bg-white focus:text-indigo-800'  required/>
    //     <input type='text' placeholder='Subject' name='subject' value={formData.subject} onChange={handleChange} className='p-2 rounded-sm outline-none bg-transparent border-b-2  text-xl tracking-widest focus:bg-white focus:text-indigo-800'  />
    //     <textarea placeholder='Message' name='message' value={formData.message} onChange={handleChange} className=' text-xl tracking-widest bg-transparent border rounded-md outline-none p-2 mt-5 md:h-[200px] focus:bg-white focus:text-indigo-800' required />
    //     {error && <p className="text-red-500">{error}</p>} {/* Display error message if error state is not null */}
    //     <button type='submit' disabled={submitted} className={`text-center mt-5 border p-2 text-xl font-semibold rounded-md w-[150px] text-slate-300 bg-indigo-900 hover:bg-white hover:border-none hover:text-indigo-800 ${submitted ? 'opacity-50 cursor-not-allowed' : ''}`}>Submit</button>
    //   </form>

    //   <hr className="mt-10 md:mt-0 opacity-60" />
    // </div>
    <div className='w-full relative min-h-screen flex flex-col items-center md:bg-black'>
  {/* Image container */}
  <div className='w-full'>
    <img src={library} alt='' className='w-full h-[250px] md:h-[100vh] object-cover md:opacity-40' />
  </div>

  {/* Form container */}
  <div className='flex-grow w-full flex justify-center items-center'>
    <form
      onSubmit={handleSubmit}
      className='flex flex-col text-xl tracking-widest gap-7 md:gap-10 px-4 mt-7 sm:px-[100px] w-full lg:w-[80%]'
      data-aos='fade-right'
    >
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={formData.name}
        onChange={handleChange}
        className='p-2 rounded-sm outline-none bg-transparent border-b-2 text-xl tracking-widest focus:bg-white focus:text-indigo-800'
        required
      />
      <input
        type='email'
        placeholder='Email Address'
        name='email'
        value={formData.email}
        onChange={handleChange}
        className='p-2 rounded-sm outline-none bg-transparent border-b-2 text-xl tracking-widest focus:bg-white focus:text-indigo-800'
        required
      />
      <input
        type='text'
        placeholder='Subject'
        name='subject'
        value={formData.subject}
        onChange={handleChange}
        className='p-2 rounded-sm outline-none bg-transparent border-b-2 text-xl tracking-widest focus:bg-white focus:text-indigo-800'
      />
      <textarea
        placeholder='Message'
        name='message'
        value={formData.message}
        onChange={handleChange}
        className='text-xl tracking-widest bg-transparent border rounded-md outline-none p-2 mt-5 md:h-[200px] focus:bg-white focus:text-indigo-800'
        required
      />
      {error && <p className='text-red-500'>{error}</p>}
      <button
        type='submit'
        disabled={submitted}
        className={`text-center mt-5 mb-5 border p-2 text-xl font-semibold rounded-md w-[150px] text-slate-300 bg-indigo-900 hover:bg-white hover:border-none hover:text-indigo-800 ${submitted ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        Submit
      </button>
    </form>
  </div>

  <hr className='mt-10 md:mt-0 opacity-60 w-full' />
</div>
  );
};

export default Contact;
