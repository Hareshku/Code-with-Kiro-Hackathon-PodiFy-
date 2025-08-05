import React from "react";

const Footer = () => {
  return (
    <>
      <div className="mt-8 flex items-center justify-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          <span className="text-sm text-gray-600">Not on API</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 text-gray-400">⚙️</div>
          <span className="text-sm text-gray-600">Settings</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
