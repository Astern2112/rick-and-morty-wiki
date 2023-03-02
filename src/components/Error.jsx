import React from 'react';

const Error = ({ message }) => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-900 text-7xl text-red-600">
      Error fetching: {message}
    </div>
  );
};

export default Error;
