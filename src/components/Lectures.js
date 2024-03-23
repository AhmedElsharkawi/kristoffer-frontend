import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Lectures = () => {
    const [lectures, setLectures]= useState([])
    useEffect(()=>{
        const fetchData= async()=>{
            try {
                const res = await axios.get(`${process.env.REACT_APP_DOMAIN_URL}/lecture`)
                setLectures(res.data)

                
            } catch (error) {
                
            }
        }
    fetchData()
    },[])
  return (
    <div>
            <div className='w-full mt-[40px]  sm:px-[100px] px-4  ' data-aos="fade-up" >
            <h1 className='text-2xl tracking-widest font-bold text-center mb-10'>MY LECTURES</h1>
            <div className='flex flex-col gap-6' data-aos="fade-left">
                {lectures.map((lecture)=>{
                    return ( <div className='test flex flex-col gap-4   shadow-2xl  py-2 px-2 rounded-md hover:scale-[1.01] transition-all duration-[700] ' key={lecture._id}>
                        <h3 className='text-xl font-semibold'>{lecture.title}:</h3>
                        <p className='truncate'>{lecture.description}</p>
                        <Link to={`/lecture/${lecture._id}`} className='w-[150px] h-[30px] bg-gradient-to-r from-indigo-500 via-slate-400 to-yellow-100 text-indigo-800 font-semibold rounded-lg flex justify-center items-center mb-1'>continue reading</Link>
                             </div>)
                    
                })}
             
            </div>


            </div>
            <hr className='mt-[50px] opacity-60'/>


    </div>
  )
}

export default Lectures