import React from "react";

const Summary = () => {
  return (
    <>
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
          <span className="text-sm font-medium text-gray-700">Summary</span>
        </div>

        <div className="h-32 border border-gray-300 p-4">
          <p className="text-sm text-gray-500">
            Summary will be generated after processing...
          </p>
        </div>
      </div>
    </>
  );
};

export default Summary;
