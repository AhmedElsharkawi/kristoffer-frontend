// import "./index.css"
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import BooksPage from "./pages/BooksPage";
import Footer from "./components/Footer";
import BookDetails from "./pages/BookDetails";
import ScrollToTop from "./components/ScrollTopUp";
import Contact from "./pages/Contact";
function App() {


  useEffect(() => {
    AOS.init({
      duration: 1200, // duration of the animation
      once: true, // whether animation should only happen once - while scrolling down
    });
    
  }, []);
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Navbar/>
      <Routes>
      
    <Route path='/' element={<Home  />}  />
    <Route path='/contact' element={<Contact  />}  />
    <Route path='/books/:id' element={<BookDetails  />}  />
    <Route path='/books' element={<BooksPage />}  />
    
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
