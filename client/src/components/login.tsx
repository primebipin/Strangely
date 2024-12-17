import React from "react";
import { useNavigate } from "react-router-dom";


const LoginModal: React.FC = () => {

  const navigate = useNavigate()

  return (
    <>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
        <div className="w-96 bg-white rounded-lg shadow-lg p-6">
          {/* Modal Header */}
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
          
          {/* Login Form */}
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              className="border rounded p-2 focus:outline-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="border rounded p-2 focus:outline-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all duration-300"
            >
              Login
            </button>
          </form>

          {/* Close Button */}
          <button
           onClick={()=>navigate('/')}
            className="mt-4 text-gray-600 hover:text-gray-800 text-center block w-full"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
