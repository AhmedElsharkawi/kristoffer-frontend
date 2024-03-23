
import About from './About'
import Mybooks from './Mybooks'
import LibraryVisit from '../components/LibraryVisit'
import Lectures from '../components/Lectures'

const Home = ({books}) => {



  
  return (
    <div className='overflow-hidden'>
        <About />
        <Mybooks  />
        <LibraryVisit />
        <Lectures />
        
    </div>
    )
}

export default Home