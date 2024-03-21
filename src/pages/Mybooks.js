import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Mybooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_DOMAIN_URL}/books?limit=10`);
        setBooks(res.data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        setError("Error fetching data. Please try again later.");
        console.error("Error fetching data:", error.message);
        setLoading(false); // Set loading to false if an error occurs
      }
    };
  
    fetchData();
  }, []);

  return (
    <div className="w-full mt-[40px] px-[100px] relative">
      <h1 className="text-2xl tracking-widest font-bold text-center mb-20">
        MY BOOKS
      </h1>

      {/* Conditional rendering of loading spinner */}
      {loading && (
        <div className="flex justify-center items-center">
          {/* Tailwind CSS spinner */}
          <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-yellow-500"></div>
        </div>
      )}

      {/* Conditional rendering of error message */}
      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center gap-8">
        {books?.map((book) => {
          return (
            <div className="mb-8" data-aos="fade-right" key={book._id}>
              <Link to={`/books/${book._id}`} className="border border-white w-[180px] h-[230px] rounded-md relative flex flex-col">
                <img
                  src={`http://localhost:8000/${book.image}`}
                  alt={book.title}
                  className="w-full h-full rounded-md absolute bottom-1 right-1 shadow-md shadow-yellow-100"
                />
              </Link>
              <h2 className="mt-2 w-[180px] text-center">{book.title}</h2>
            </div>
          );
        })}
      </div>
      <div className="justify-center flex mt-11">
        <Link to="/books" className="w-[120px] h-[40px] py-2 px-2 rounded-3xl text-center font-semibold opacity-80 hover:opacity-100 hover:scale-105 bg-gradient-to-r from-yellow-600 to-indigo-600">
          SHOW ALL
        </Link>
      </div>  
      <hr className="w-[60%] mx-auto mt-[30px] opacity-60" />
      <div className="w-[150px] h-[100px] border-white opacity-80 border absolute invisible sm:visible sm:bottom-20 sm:-right-[90px] rotate-[60deg] transition-all"></div>
    </div>
  );
};

export default Mybooks;
