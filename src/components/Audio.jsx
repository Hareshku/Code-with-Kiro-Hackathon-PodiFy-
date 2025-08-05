import React from "react";
import { Volume2 } from "lucide-react";

const Audio = () => {
  return (
    <>
      <div className="relative bg-white border border-gray-300 p-6">
        {/* Header Tab */}
        <div className="absolute -top-px left-0 px-3 py-1 border-l border-r border-b border-gray-300">
          <div className="flex items-center gap-2">
            <Volume2 className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-gray-700">
              Audio Waveform
            </span>
          </div>
        </div>

        <div className="h-40 flex items-center justify-center mt-6">
          <div className="text-center">
            <svg
              className="w-12 h-12 mx-auto mb-2 text-gray-400"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
            </svg>
            <p className="text-sm text-gray-500">Waveform will appear here</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Audio;
