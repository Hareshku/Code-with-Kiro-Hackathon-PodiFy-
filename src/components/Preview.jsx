import React from "react";
import { Play } from "lucide-react";

const Preview = () => {
  return (
    <>
      <div className="relative bg-white border-2 border-dashed border-gray-300 p-6">
        <div className="absolute -top-px left-0 px-3 py-1 border-r border-b border-gray-300">
          <div className="flex items-center gap-2">
            <Play className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">
              Preview Video Only
            </span>
          </div>
        </div>

        <div className="p-16 text-center mt-6">
          <svg
            className="w-12 h-12 mx-auto mb-4 text-blue-500"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 2v-7l-4 2z" />
          </svg>
          <p className="text-sm text-gray-500">
            Video preview will appear here
          </p>
        </div>
      </div>
    </>
  );
};

export default Preview;
