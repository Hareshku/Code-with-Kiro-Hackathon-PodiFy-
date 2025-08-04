import React, { useState } from "react";
import { Upload, Headphones } from "lucide-react";
function FileUpload() {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      console.log("File dropped:", files[0].name);
      // Handle file upload here
    }
  };

  const handleFileSelect = (e) => {
    const files = e.target.files;
    if (files && files[0]) {
      console.log("File selected:", files[0].name);
      // Handle file upload here
    }
  };

  return (
    <>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-2">
            <Upload className="w-6 h-6 text-black-700" />
            <h3 className="text-xl font-semibold text-gray-900">
              Upload Audio File
            </h3>
          </div>
          <p className="text-gray-600 mb-6 text-card">
            Upload your podcast or meeting recording to get started
          </p>

          <div
            className={`border-2 border-dashed rounded-xl p-12 text-center transition-colors ${
              dragActive
                ? "border-blue-400 bg-blue-50"
                : "border-gray-300 hover:border-gray-400"
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                <Headphones className="w-8 h-8 text-gray-500" />
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-2 ">
                Drop your audio file here
              </h4>
              <p className="text-gray-500 mb-6 text-card">or click to browse</p>

              <label htmlFor="file-upload" className="cursor-pointer">
                <div className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                  Choose File
                </div>
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  accept=".mp3,.wav,.m4a"
                  onChange={handleFileSelect}
                />
              </label>

              <p className="text-gray-500 mt-4 text-card">
                Supports MP3, WAV, M4A files up to 100MB
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FileUpload;
