
import About from './About'
import Mybooks from './Mybooks'
import LibraryVisit from '../components/LibraryVisit'

const Home = ({books}) => {



  
  return (
    <div className='overflow-hidden'>
        <About />
        <Mybooks  />
        <LibraryVisit />
        
    </div>
    )
}

export default Home