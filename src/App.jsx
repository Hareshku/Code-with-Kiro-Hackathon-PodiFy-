import React, { useState } from "react";
import { Upload, FileAudio, Volume2, Play, FileText } from "lucide-react";

const PodifyTranscription = () => {
  const [startTime, setStartTime] = useState("0");
  const [endTime, setEndTime] = useState("0");
  const [isProcessing, setIsProcessing] = useState(false);
  const [audioFile, setAudioFile] = useState(null);
  const [previewVideoOnly, setPreviewVideoOnly] = useState(false);

  const handleProcess = () => {
    setIsProcessing(true);
    setTimeout(() => setIsProcessing(false), 3000);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAudioFile(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center">
            <Volume2 className="w-4 h-4 text-white" />
          </div>
          <h1 className="text-xl font-semibold text-gray-800">
            Podify Transcription
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Panel */}
          <div className="space-y-6">
            {/* Upload Audio or Video */}
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

            {/* Preview Video Only */}
            <div className="relative bg-white border-2 border-dashed border-gray-300 p-6">
              {/* Header Tab */}
              <div className="absolute -top-px left-0 px-3 py-1 border-r border-b border-gray-300">
                <div className="flex items-center gap-2">
                  <Play className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">
                    Preview Video Only
                  </span>
                </div>
              </div>

              <div className="p-16 text-center mt-6">
                <Play className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-sm text-gray-500">
                  Video preview will appear here
                </p>
              </div>
            </div>

            {/* Time Controls */}
            <div className="bg-white border border-gray-300 p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Start Time (seconds)
                  </label>
                  <input
                    type="number"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="w-full px-3 py-2.5 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    End Time (seconds)
                  </label>
                  <input
                    type="number"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="w-full px-3 py-2.5 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>

            {/* Process Button */}
            <button
              onClick={handleProcess}
              disabled={!audioFile || isProcessing}
              className={`w-full py-3.5 px-4 font-medium text-white transition-colors ${
                !audioFile || isProcessing
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-orange-500 hover:bg-orange-600"
              }`}
            >
              {isProcessing ? "Process" : "Process"}
            </button>
          </div>

          {/* Right Panel */}
          <div className="space-y-6">
            {/* Audio Waveform */}
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
                  <div className="w-4 h-4 bg-gray-300 mx-auto mb-2"></div>
                  <p className="text-sm text-gray-500">
                    Waveform will appear here
                  </p>
                </div>
              </div>
            </div>

            {/* Processing Info, Transcript, and Summary - Combined */}
            <div className="bg-white border border-gray-300 p-6 space-y-6">
              {/* Processing Info */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-4">
                  Processing Info
                </h3>

                <div className="h-24 border border-gray-300 p-4">
                  {isProcessing ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-sm text-gray-600">
                        Processing audio file...
                      </span>
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500">
                      Processing information will appear here
                    </p>
                  )}
                </div>
              </div>

              {/* Transcript */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">
                    Transcript
                  </span>
                </div>

                <div className="h-48 border border-gray-300 p-4 overflow-y-auto">
                  <p className="text-sm text-gray-500">
                    Transcript will appear here after processing...
                  </p>
                </div>
              </div>

              {/* Summary */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">
                    Summary
                  </span>
                </div>

                <div className="h-32 border border-gray-300 p-4">
                  <p className="text-sm text-gray-500">
                    Summary will be generated after processing...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Status Bar */}
        <div className="mt-8 flex items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Not on API</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Built with Claude</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 text-gray-400">⚙️</div>
            <span className="text-sm text-gray-600">Settings</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodifyTranscription;
