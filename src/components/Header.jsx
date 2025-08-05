import React from "react";
import { Volume2 } from "lucide-react";

const Header = () => {
  return (
    <>
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center">
          <Volume2 className="w-4 h-4 text-white" />
        </div>
        <h1 className="text-xl font-semibold text-gray-800">
          Podify Transcription
        </h1>
      </div>
    </>
  );
};

export default Header;
