import about from '../assets/ome.jpg'
import about1 from '../assets/swiper1.jpg'
import about2 from '../assets/swiper2.jpg'
import about3 from '../assets/kk.jpg'
import about4 from '../assets/swiper4.jpg'
import about5 from '../assets/swiper5.jpg'
import about6 from '../assets/restu.jpg'
import {useState , useEffect} from "react"
import axios from "axios"




const About = () => {
    const [aboutsec, setAboutSec]=  useState([])

    useEffect(() => {
        const fetchAbout = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_DOMAIN_URL}/about`);
                setAboutSec(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchAbout(); // Call the fetchAbout function
    }, []); // Empty dependency array to ensure the effect runs only once after initial render

    

  return (
    <div className='w-full pt-10 md:pt-36  sm:px-[100px]  px-4  ' >
        <div className=' flex flex-col gap-6 sm:gap-36 md:gap-10 mb-10 md:flex-row  md:justify-between  md:items-center lg:items-start '>
            <div className=' md:w-[50%] lg:w-[70%]  '>
            {aboutsec.length > 0 && (
                        <h2 className=' sm:text-md md:tracking-wide lg:tracking-widest xl:text-lg leading-9 tracking-widest xl:leading-10 w-full text-justify' data-aos="fade-right">
                            {aboutsec[0].desc}
                        </h2>
                    )}
            </div>
                <div className='flex mt-[70px] justify-center sm:mt-[0px]   items-center md:items-start'>
                    <div className='mr-3' data-aos="fade-right" >
                        <img src={about} alt=''  className='w-[90px] h-[140px] mb-3 rounded-md ' data-aos="fade-down" />
                        <img src={about1} alt='' className='w-[90px] h-[140px]  rounded-md ' data-aos="fade-up"/>
                    </div>
                    <div className='mt-[-70px] mr-3 sm:mt-[-105px]'>
                        <img src={about2} alt='' className='w-[90px] h-[140px] mb-3 rounded-md ' data-aos="fade-down" />
                        <img src={about3} alt='' className='w-[90px] h-[140px] mb-3 rounded-md ' data-aos="flip-up" />
                        <img src={about4} alt='' className='w-[90px] h-[140px] rounded-md '  data-aos="fade-up"/>
                    </div>
                    <div data-aos="fade-left">
                        <img src={about5} alt='' className='w-[90px] h-[140px] mb-3 rounded-md ' data-aos="fade-down" />
                        <img src={about6} alt='' className='w-[90px] h-[140px] rounded-md  '  data-aos="fade-up"/>
                    </div>
                </div>
        </div>
        <hr className='w-[60%] mx-auto'/>
        <div  className='w-[150px] h-[100px] border-white opacity-80 border absolute invisible sm:visible  sm:bottom-32 sm:-left-[90px]  rotate-[60deg] transition-all' ></div>
    </div>
  )
}

export default About