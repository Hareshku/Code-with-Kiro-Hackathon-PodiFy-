import React from "react";
import { FileText } from "lucide-react";
const Transcript = () => {
  return (
    <>
      <div>
        <div className="flex items-center gap-2 mb-4">
          <FileText className="w-4 h-4 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">Transcript</span>
        </div>

        <div className="h-48 border border-gray-300 p-4 overflow-y-auto">
          <p className="text-sm text-gray-500">
            Transcript will appear here after processing...
          </p>
        </div>
      </div>
    </>
  );
};

export default Transcript;
