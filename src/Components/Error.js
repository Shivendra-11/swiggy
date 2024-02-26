import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center space-y-4">
        <div className="img_error  w-[500px] ">
          <img src="./images/error.jpg" loading="lazy" alt="Error"   />
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">We will be right back</h1>
          <h2 className="text-2xl font-semibold text-gray-600">Error 404: Page not found</h2>
        </div>
      </div>
      <Link to="/">
        <button className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go Back
        </button>
      </Link>
    </div>
  );
}

export default Error;
