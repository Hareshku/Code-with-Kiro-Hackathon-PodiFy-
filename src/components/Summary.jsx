import React from "react";
import { CheckCircle } from "lucide-react";

const Summary = () => {
  return (
    <>
      <div>
        <div className="flex items-center gap-2 mb-4">
          <CheckCircle className="w-4 h-4 text-[#f97216]" />
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
