import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <p>&copy; {new Date().getFullYear()} My E-commerce Site</p>
          </div>
          <div>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
                <li>
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;