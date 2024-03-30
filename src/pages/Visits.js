import React from 'react'
import LibraryVisit from '../components/LibraryVisit'
import Lectures from '../components/Lectures'

const Visits = () => {
  return (
   <>
     <div className='w-full mt-[40px]  sm:px-[100px]  px-4 '>
         <LibraryVisit/>
         <Lectures/>
    
     </div>
             <hr className='mt-[50px] opacity-60'/>
   </>

  )
}

export default Visits