import about from '../assets/38906928.jpg'
import about1 from '../assets/swiper1.jpg'
import about2 from '../assets/swiper2.jpg'
import about3 from '../assets/swiper3.jpg'
import about4 from '../assets/swiper4.jpg'
import about5 from '../assets/swiper5.jpg'
import about6 from '../assets/38906928.jpg'






const About = () => {
   

  return (
    <div className='w-full mt-[40px]  sm:px-[100px]  px-4  ' >
        <h1 className='text-2xl tracking-widest font-semibold text-center mb-20 '>ABOUT</h1>
        <div className='my-6 flex flex-col md:flex-row gap-10 md:justify-between  md:items-center lg:items-start'>
            <div className=' md:w-[50%] lg:w-[70%]  '>
                <h2 className='mb-[120px]  sm:text-md xl:text-lg leading-9 tracking-wider  w-full text-justify ' data-aos="fade-right">
                    Kristoffer J. Andersen (born 1974) is a Danish children's and youth writer. 
                    He is known for the series Summoner and has written several books in collaboration with youtuber 
                    Niki Topgaard.Kristoffer Jacob Andersen has written children's and young people's books since 2011. 
                    In addition to being a writer, he is a trained school teacher. Kristoffer Jacob Andersen is the father of two children,
                 married and lives in Rødovre.
                     </h2>
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