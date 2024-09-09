import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CgSearch } from "react-icons/cg";

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(20); // Display 10 books per page
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [filteredBooks, setFilteredBooks] = useState([]); // State for filtered books
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_DOMAIN_URL}/books`);
        setBooks(res.data);
        setFilteredBooks(res.data); // Initialize filteredBooks with all books
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        setError("Error fetching data. Please try again later.");
        console.error("Error fetching data:", error.message);
        setLoading(false); // Set loading to false if an error occurs
      }
    };
  
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  // Function to handle search input change
  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query); // Update search query state

    // Filter books based on search query
    const filtered = books.filter((book) =>
      book.title.toLowerCase().startsWith(query.toLowerCase())
    );
    setFilteredBooks(filtered); // Update filtered books state
    setCurrentPage(1); // Reset to first page when searching
  };

  // Get current books
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <div className="w-full">
      <div className='w-[50%] mx-auto rounded-3xl py-2 px-2  mt-11 flex gap-2 border-slate-500 border items-center '>
        <CgSearch size={25} className='mt-[5px] text-slate-500' />
        <input
          type='text'
          name='search'
          placeholder='Search by book title'
          value={searchQuery}
          onChange={handleSearchInputChange}
          className='w-full text-white outline-none border-none bg-transparent placeholder:text-xs sm:placeholder:text-sm'
        />
      </div>

      {/* Conditional rendering of loading spinner */}
      {loading && (
        <div className="flex justify-center items-center mt-8">
          {/* Tailwind CSS spinner */}
          <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-yellow-500"></div>
        </div>
      )}

      {/* Error message rendering */}
      {error && (
        <p className="text-red-500 text-center mt-8">{error}</p>
      )}

      <div className="mt-11 px-4 grid justify-center sm:px-[100px] sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {currentBooks.map((book) => (
          <div className="w-[200px] border border-slate-500 rounded-md p-3 flex flex-col justify-center items-center hover:shadow-purple-400 hover:shadow-md mb-5 transition-all duration-700 ease-in-out" key={book._id}>
            <div className='flex flex-col justify-center items-center '>
              <img src={`${process.env.REACT_APP_IMAGE_URL}/${book.image}`} alt={book.title} className="w-[150px] h-[180px] rounded-md" />
              <h3 className="text-center mt-1 font-semibold text-md ">
                {book.title}
              </h3>
              <p className="my-2 line-clamp-2 text-center text-sm">
                {book.description}
              </p>
            </div>
            <div className=" mt-3">
              <Link to={`/books/${book._id}`} className='border  text-md font-semibold bg-gradient-to-t from-[#9db0ce] to-[#dbe0e8] text-slate-700 rounded-md flex justify-center items-center px-1 w-[100px] '>see more</Link>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center">
        {[...Array(Math.ceil(filteredBooks.length / booksPerPage)).keys()].map(number => (
          <button key={number} onClick={() => paginate(number + 1)}
            className={`mx-1 px-3 py-1 rounded-md ${currentPage === number + 1 ? 'bg-gradient-to-r from-cyan-900 to-indigo-600 text-white' : 'bg-gray-300 text-gray-700'}`}>
            {number + 1}
          </button>
        ))}
      </div>
      <hr className="mt-[30px] opacity-60" />
    </div>
  );
};

export default BooksPage;
