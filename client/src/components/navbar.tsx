import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full fixed bg-gray-800 text-white shadow-md top-0">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left Section: Logo and App Name */}
        <div className="flex items-center">
          <img
            src="/logostran.png"
            alt="App Logo"
            className="h-8 w-8 mr-3"
          />
          <span className="text-xl font-bold">Strangely</span>
        </div>

        {/* Right Section: Login Button */}
        <div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
