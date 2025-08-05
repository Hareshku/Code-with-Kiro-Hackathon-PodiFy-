import { useState } from "react";
const Button = ({ audioFile, isProcessing, handleProcess }) => {
  return (
    <>
      <button
        onClick={handleProcess}
        disabled={!audioFile || isProcessing}
        className={`w-full py-3.5 px-4 font-medium text-white transition-colors ${
          !audioFile || isProcessing ? "cursor-not-allowed" : "hover:opacity-90"
        }`}
        style={{
          backgroundColor: !audioFile || isProcessing ? "#f97216" : "#ccc",
        }}
      >
        {isProcessing ? "Processing..." : "Process"}
      </button>
    </>
  );
};

export default Button;
