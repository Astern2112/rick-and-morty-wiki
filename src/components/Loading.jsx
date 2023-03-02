import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
const Loading = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center gap-5 bg-gray-900 text-7xl text-white">
      <AiOutlineLoading3Quarters className="animate-spin" />
      Loading...
    </div>
  );
};

export default Loading;
