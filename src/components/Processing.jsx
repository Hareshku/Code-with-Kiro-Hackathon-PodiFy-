import React, { useState } from "react";

const Processing = ({ isProcessing }) => {
  return (
    <>
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-4">
          Processing Info
        </h3>

        <div className="h-24 border border-gray-300 p-4">
          {isProcessing ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-sm text-gray-600">
                Processing audio file...
              </span>
            </div>
          ) : (
            <p className="text-sm text-gray-500">
              Processing information will appear here
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Processing;
