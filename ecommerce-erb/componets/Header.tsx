import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">My E-commerce Site</h1>
        </div>
        <div className="hidden md:block"> {/* Hide search bar on small screens */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-gray-700 text-white w-64 rounded-full pl-8 pr-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
            <i className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 fas fa-search"></i>
          </div>
        </div>
        <div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/products">Products</a>
              </li>
              <li>
                <a href="/cart">Cart</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>

  );
};

export default Header;