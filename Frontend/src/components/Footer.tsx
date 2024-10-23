
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo and Description */}
          <div className="mb-6 lg:mb-0 w-full lg:w-1/3 text-center lg:text-left">
            <h2 className="text-xl font-bold text-white">Taste Alento</h2>
            <p className="mt-2 text-gray-400">
              Your ultimate destination for the finest cuisine. Stay tuned for the launch!
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-6 lg:mb-0 w-full lg:w-1/3 text-center">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="/menu" className="hover:text-gray-300">Menu</a></li>
              <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
              <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
              <li><a href="/careers" className="hover:text-gray-300">Careers</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full lg:w-1/3 text-center lg:text-right">
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="mt-2 space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <i className="fab fa-instagram"></i> Instagram
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-800 pt-5 flex flex-col lg:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2024 Taste Alento. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <a href="/privacy-policy" className="text-sm hover:text-gray-300">Privacy Policy</a>
            <a href="/terms" className="text-sm hover:text-gray-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
