import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoHeadset } from "react-icons/io5";
import { FaBookReader } from "react-icons/fa";

const BookDetails = () => {
  const [bookDetails, setBookDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_DOMAIN_URL}/books/get/${id}`);
        setBookDetails(res.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching book details. Please try again later.");
        console.error("Error fetching book details:", error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-8">
        {/* Tailwind CSS spinner */}
        <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  if (error) {
    return  <p className="text-red-500 text-center mt-8">{error}</p>
    }
  

  return (
    <>
      <div className="w-full mt-[40px]  sm:px-[100px]  px-4 ">
        <div className="flex flex-col gap-8 md:flex-row   justify-center w-full">
          <div className=" self-center md:self-start  md:w-[40%] lg:w-[30%] xl:w-[25%] 
           border-slate-500 border rounded-md ">
          {bookDetails.image && (
            <img
              src={`${process.env.REACT_APP_DOMAIN_URL}/${bookDetails.image}`}
              alt={bookDetails.title}
              className=" object-cover rounded-md md:w-full  h-auto w-[180px] 
               relative right-[5px] bottom-2 shadow-md shadow-yellow-100 "
            />
          )}
          </div>
          <div className="flex flex-col gap-6 md:items-start  md:self-start md:w-[50%] ">
            <h2 className=" font-bold text-lg text-center md:text-start ">{bookDetails.title}</h2>
            <p className="w-auto text-justify">{bookDetails.description}</p>

            <div className="flex gap-5 justify-center  ">
              {bookDetails.buybooklink && (
                <a
                  href={bookDetails.buybooklink}
                  rel="noreferrer"
                  target="_blank"
                  className="  w-[100px] h-7 rounded-md text-center 
               text-md font-semibold 
               bg-gradient-to-t from-[#9db0ce] to-[#dbe0e8] text-slate-700 hover:scale-[1.1] transition-all ease-in-out duration-200 "
                >
                  Buy
                </a>
              )}

              {bookDetails.ebooklink && (
                <a
                  href={bookDetails.ebooklink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-[100px] h-7 p-1 rounded-md text-center font-semibold 
              bg-gradient-to-r from-cyan-900 to-indigo-600 text-white flex justify-center items-center gap-2"
                >
                  <IoHeadset />
                  <span>E-book</span>
                </a>
              )}
            </div>

        <div className="self-center md:self-start">
              {bookDetails.physicalbook && (
                <a
                  href={bookDetails.physicalbook}
                  target="_blank"
                  rel="noreferrer"
                  className="w-[220px] h-7  p-4 rounded-md text-center font-semibold 
              bg-gradient-to-r from-cyan-900 to-indigo-600 text-white flex justify-center items-center gap-2"
                >
                  <FaBookReader size={18} />
                  <span>available in bibliotek</span>
                </a>
              )}
        </div>
          </div>
        </div>
      </div>
      <hr className="mt-[30px] opacity-60" />
    </>
  );
};

export default BookDetails;
