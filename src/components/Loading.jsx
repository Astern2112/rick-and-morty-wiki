import React from 'react';

const Loading = () => {
  return (
    <div
      className="inline-block h-12 w-12 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
      role="status"
    ></div>
  );
};

export default Loading;
