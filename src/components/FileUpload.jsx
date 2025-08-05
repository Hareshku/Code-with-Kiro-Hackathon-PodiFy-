import React, { useState } from "react";
import { FileAudio, Upload } from "lucide-react";

const FileUpload = ({ audioFile, handleFileUpload }) => {
  return (
    <>
      <div className="relative bg-white border-2 border-dashed border-gray-300 p-6">
        {/* Header Tab */}
        <div className="absolute -top-px left-0 px-3 py-1 border-r border-b border-gray-300">
          <div className="flex items-center gap-2">
            <FileAudio className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-gray-700">
              Upload Audio or Video
            </span>
          </div>
        </div>

        {/* Upload Area */}
        <div className="p-16 text-center hover:border-gray-400 transition-colors mt-6">
          <input
            type="file"
            accept="audio/*,video/*"
            onChange={handleFileUpload}
            className="hidden"
            id="file-upload"
          />
          <label htmlFor="file-upload" className="cursor-pointer">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 mb-2 font-medium text-lg">
              Drop File Here
            </p>
            <p className="text-gray-400 text-sm mb-2">— or —</p>
            <p className="text-gray-400 text-sm">Click to Upload</p>
          </label>
        </div>

        {audioFile && (
          <div className="mt-4 p-3 bg-orange-50">
            <p className="text-sm text-orange-700">
              Selected: {audioFile.name}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default FileUpload;
