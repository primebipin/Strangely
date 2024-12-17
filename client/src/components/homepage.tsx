import React from "react";
import {useNavigate } from "react-router-dom";
import Navbar from "./navbar";

const Homepage: React.FC = () => {
 const navigate = useNavigate();
  return (
    <>
    
      {/* Main Page Content */}
      <div className="w-1/2 h-1/2 bg-gray-500 flex flex-col items-center justify-center 
                fixed inset-0 m-auto shadow-2xl border border-gray-300 rounded-lg">
        <h1 className="text-2xl font-bold">Meet strangers with your interests!</h1>
        <p className="text-lg">Start chatting</p>
        <button
          onClick={()=>navigate('/login')}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all duration-300"
        >
          Chat
        </button>
        <Navbar/>
      </div>

     
    </>
  );
};

export default Homepage;
