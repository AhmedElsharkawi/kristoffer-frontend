import React, {  useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";


const Navbar = () => {
  const  [openMenu, setOpenMenu] = useState(true);

  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
  }

  

  return (
   <div>
     <div className='w-full p-4 sm:px-[100px] ' >
       <div className='flex flex-col sm:flex-row sm:justify-between  sm:items-baseline  '>
         <Link to='/'>
            <h1 className='text-xl self-start logo'>Kristoffer J.Andersen</h1>
         </Link>
         <div className={`${openMenu ? 'flex' : 'hidden'} flex-col mt-3 gap-5 sm:flex-row sm:gap-6 sm:mt-0 md:gap-8 lg:gap-10` }   >
           <Link to='/'>Home</Link>
           <Link to='/books'>Books</Link>
           <Link to='/visits'>Visits & Lectures</Link>
           
           <Link to='/contact'>Contact</Link>
         </div>
       </div>
       <div className='  sm:hidden absolute top-5 right-5 transition-all ease-in ' onClick={handleToggleMenu}>
         {openMenu ? <IoMdClose size={25}  className='cursor-pointer'  data-aos="fade-down"/> : <FaBars size={25} className=' text-2xl cursor-pointer' data-aos="fade-down" />}
       </div>
       
     </div>
     <hr className='mt-[5px] text-white opacity-60'/>
   </div>
  );
}

export default Navbar;
