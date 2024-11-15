import React from 'react';

interface LoadingProps {
  message?: string; // Optional prop for a custom loading message
}

const Loading: React.FC<LoadingProps> = ({ message = 'Loading...' }) => {
  return (
    <div className="flex justify-center items-center space-x-2">
      {/* <div className="w-6 h-6 border-4 border-t-4 border-gray-200 border-t-primary rounded-full animate-spin"></div> */}
      <p className="text-sm text-gray-500">{message}</p>
    </div>
  );
};

export default Loading;
