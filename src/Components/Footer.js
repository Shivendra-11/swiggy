import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-gray-800 text-white py-7 text-center">
      Created By{' '}
      <i className="fas fa-heart text-red-500"></i>
      <a
        href="https://www.linkedin.com/in/shivendra-keshari-46aa67256/"
        target="_blank"
        className="text-blue-500 hover:text-blue-700"
        rel="noopener noreferrer"
      >
        Shivendra Keshari
      </a>
      <i className="fas fa-copyright"></i>
      {year}
      <strong className="ml-1">
        Food<span className="text-red-500">Villa</span>
      </strong>
    </div>
  );
};

export default Footer;
