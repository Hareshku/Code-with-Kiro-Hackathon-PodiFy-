import React from "react";
import { Volume2 } from "lucide-react";

const Audio = () => {
  return (
    <>
      <div className="relative bg-white border-2 border-dashed border-gray-300 p-6  h-[350px]">
        {/* Header Tab */}
        <div className="absolute -top-px left-0 px-3 py-1 border-r border-b border-gray-300">
          <div className="flex items-center gap-2">
            <Volume2 className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-gray-700">
              Audio Waveform
            </span>
          </div>
        </div>

        {/* Audio Area */}
        <div className="p-16 text-center hover:border-gray-400 transition-colors mt-6">
          <svg
            className="w-12 h-12 mx-auto mb-4 text-gray-400"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
          <p className="text-gray-500 mb-2 font-medium text-lg">
            Waveform will appear here
          </p>
        </div>
      </div>
    </>
  );
};

export default Audio;
