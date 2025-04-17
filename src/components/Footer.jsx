import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
            &copy; {new Date().getFullYear()} Java for Beginners. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
