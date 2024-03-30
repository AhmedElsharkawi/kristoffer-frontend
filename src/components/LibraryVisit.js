import React from 'react'
import { Link } from 'react-router-dom'

const LibraryVisit = () => {
  return (

<div>
    <div className='w-full mt-[40px]  sm:px-[100px] px-4  ' data-aos="fade-up" >
        <h1 className='text-2xl tracking-widest font-bold text-center mb-10'>VISITS</h1>
        <p className='text-justify sm:text-md xl:text-lg leading-9 tracking-widest xl:leading-10'>An author visit is one of the most exciting events for students and staff. Not only does
             it create a buzz around the library, but it also encourages students to read, write and 
             explore the world of literature. However, planning and executing an author visit can be 
             a daunting task. From budgeting to logistics, many things must be considered to ensure
              a successful visit. Here will share some tips on how to have an awesome author visit even
               if you have a small library budget.</p>
               <div className='justify-center flex mt-11'>
                    <Link to='/contact' className='w-[120px] h-[40px] flex items-center justify-center px-2 rounded-3xl text-center font-semibold opacity-80 hover:opacity-100 hover:scale-105
                    bg-gradient-to-t from-[#9db0ce] to-[#dbe0e8] text-slate-700 '>
                        BOOK A VISIT
                        </Link>
                
            </div>  
        </div>
        <hr className="w-[50%] mx-auto mt-[30px] opacity-60" />

</div>
    )
}

export default LibraryVisit