import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const LecturePage = () => {
    const {id} = useParams()
    const [lectures, setLectures]= useState([])
    useEffect(()=>{
        const fetchData= async()=>{
            try {
                const res = await axios.get(`${process.env.REACT_APP_DOMAIN_URL}/lecture/${id}`)
                setLectures(res.data)

                
            } catch (error) {
                
            }
        }
        window.scrollTo(0, 0);
    fetchData()
    },[id])
  return (
  <div>
     <div className='w-full min-h-svh' >
       <div className='p-10 sm:w-[70%] sm:mx-auto' data-aos="fade-up" >
           <h1 className='text-center font-semibold text-2xl  mb-6'data-aos="fade-left"  >{lectures.title}</h1>
           <p className='sm:leading-10 sm:tracking-widest' data-aos="fade-right" >{lectures.description}</p>
       </div>
       
    
     </div>
     <hr className='mt-[30px] opacity-60'/>
  </div>
  )
}

export default LecturePage