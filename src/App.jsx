import React, { useState, useRef } from "react";

const PodifyTranscription = () => {
  const [file, setFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [transcript, setTranscript] = useState("");
  const [summary, setSummary] = useState("");
  const [processingStep, setProcessingStep] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileUpload = (uploadedFile) => {
    setFile(uploadedFile);
    setTranscript("");
    setSummary("");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const droppedFile = e.dataTransfer.files[0];
    if (
      droppedFile &&
      (droppedFile.type.startsWith("audio/") ||
        droppedFile.type.startsWith("video/"))
    ) {
      handleFileUpload(droppedFile);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleProcess = () => {
    if (!file) return;

    setIsProcessing(true);
    setTranscript("");
    setSummary("");

    // Simulate processing steps
    const steps = [
      "Uploading file...",
      "Extracting audio...",
      "Processing speech recognition...",
      "Generating transcript...",
      "Creating summary...",
      "Finalizing results...",
    ];

    let currentStep = 0;
    const processInterval = setInterval(() => {
      if (currentStep < steps.length) {
        setProcessingStep(steps[currentStep]);
        currentStep++;
      } else {
        clearInterval(processInterval);
        // Simulate final results
        setTranscript(
          "This is where your transcript will appear after processing. The AI will convert your audio/video content into accurate text with proper formatting and timestamps."
        );
        setSummary(
          "This section will contain an AI-generated summary of your content, highlighting key points, main topics, and important insights from your audio or video file."
        );
        setIsProcessing(false);
        setProcessingStep("");
      }
    }, 1500);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const UploadIcon = () => (
    <svg
      className="w-12 h-12"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
      />
    </svg>
  );

  const VideoIcon = () => (
    <svg
      className="w-12 h-12 text-purple-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
      />
    </svg>
  );

  const HeadphonesIcon = () => (
    <svg
      className="w-12 h-12 text-blue-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5.586 15H4a1 1 0 01-1-1v-4a8 8 0 1116 0v4a1 1 0 01-1 1h-1.586l-1.707 1.707A1 1 0 0115 17v-2.586A2 2 0 0113.414 13H19V9a8 8 0 10-16 0v4z"
      />
    </svg>
  );

  const MicIcon = () => (
    <svg
      className="w-12 h-12 text-green-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
      />
    </svg>
  );

  const ClockIcon = () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );

  const FileTextIcon = () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  );

  const DownloadIcon = () => (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
      />
    </svg>
  );

  const ShareIcon = () => (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
      />
    </svg>
  );

  const getFileIcon = () => {
    if (!file) return <UploadIcon />;
    if (file.type.startsWith("video/")) return <VideoIcon />;
    if (file.type.startsWith("audio/")) return <HeadphonesIcon />;
    return <MicIcon />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <div className="container mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Podify Transcription
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Transform your audio and video content into accurate transcripts and
            intelligent summaries with AI-powered processing
          </p>
        </div>

        {/* Main Grid Layout */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6"> */}
        <div className="flex w-full gap-6 w-[100%]">
          {/* Left Column */}
          <div className="space-y-6 w-[40%]">
            {/* File Upload */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 h-[250px]">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                Upload Media
              </h3>

              <div
                className={`border-2 border-dashed rounded-xl p-6 text-center transition-all duration-300 cursor-pointer h-[160px] flex flex-col justify-center ${
                  dragOver
                    ? "border-blue-400 bg-blue-400/10"
                    : file
                    ? "border-green-400 bg-green-400/10"
                    : "border-gray-600 hover:border-gray-400"
                }`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onClick={() => fileInputRef.current?.click()}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="audio/*,video/*"
                  onChange={(e) =>
                    e.target.files[0] && handleFileUpload(e.target.files[0])
                  }
                  className="hidden"
                />

                <div className="flex flex-col items-center space-y-3">
                  {getFileIcon()}
                  <div>
                    {file ? (
                      <div>
                        <p className="font-medium text-green-400">
                          {file.name}
                        </p>
                        <p className="text-sm text-gray-400 mt-1">
                          {(file.size / (1024 * 1024)).toFixed(1)} MB
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p className="font-medium">Drop your file here</p>
                        <p className="text-sm text-gray-400 mt-1">
                          or click to browse
                        </p>
                        <p className="text-xs text-gray-500 mt-2">
                          Supports MP3, WAV, MP4, MOV, etc.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Preview Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                {file && file.type.startsWith("video/") ? (
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5.586 15H4a1 1 0 01-1-1v-4a8 8 0 1116 0v4a1 1 0 01-1 1h-1.586l-1.707 1.707A1 1 0 0115 17v-2.586A2 2 0 0113.414 13H19V9a8 8 0 10-16 0v4z"
                    />
                  </svg>
                )}
                Media Preview
              </h3>

              <div className="bg-black/30 rounded-xl p-4 flex items-center justify-center h-[200px]">
                {file ? (
                  <div className="w-full h-full flex items-center justify-center">
                    {file.type.startsWith("video/") ? (
                      <video
                        src={URL.createObjectURL(file)}
                        controls
                        className="max-w-full max-h-full rounded-lg"
                        preload="metadata"
                      />
                    ) : file.type.startsWith("audio/") ? (
                      <div className="w-full text-center">
                        <div className="mb-4">
                          <svg
                            className="w-16 h-16 text-blue-400 mx-auto mb-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5.586 15H4a1 1 0 01-1-1v-4a8 8 0 1116 0v4a1 1 0 01-1 1h-1.586l-1.707 1.707A1 1 0 0115 17v-2.586A2 2 0 0113.414 13H19V9a8 8 0 10-16 0v4z"
                            />
                          </svg>
                          <p className="text-sm text-gray-300 mb-4">
                            {file.name}
                          </p>
                        </div>
                        <audio
                          src={URL.createObjectURL(file)}
                          controls
                          className="w-full max-w-sm"
                          preload="metadata"
                        />
                      </div>
                    ) : (
                      <div className="text-center">
                        <svg
                          className="w-16 h-16 text-green-400 mx-auto mb-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                          />
                        </svg>
                        <p className="text-sm text-gray-300">{file.name}</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center text-gray-500">
                    <div className="mb-4">{getFileIcon()}</div>
                    <p>Media preview will appear here</p>
                  </div>
                )}
              </div>
            </div>

            {/* Time Controls */}
            {/* <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"> */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 h-[150px]">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <ClockIcon />
                <span className="ml-2">Time Range</span>
              </h3>

              {/* <div className="space-y-4"> */}
              <div className="flex justify-between gap-x-4 w-full">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Start Time (seconds)
                  </label>
                  <input
                    type="number"
                    value={startTime}
                    onChange={(e) =>
                      setStartTime(parseInt(e.target.value) || 0)
                    }
                    className="w-full px-4 py-2 bg-black/30 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    placeholder="0 (full duration)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    End Time (seconds)
                  </label>
                  <input
                    type="number"
                    value={endTime}
                    onChange={(e) => setEndTime(parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-2 bg-black/30 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    placeholder="0 (full duration)"
                  />
                </div>

                {(startTime > 0 || endTime > 0) && (
                  <div className="text-sm text-gray-400 text-center p-3 bg-black/20 rounded-lg">
                    Duration: {formatTime(endTime - startTime)}
                    {endTime === 0 && " (to end)"}
                  </div>
                )}
              </div>
            </div>

            {/* Process Button */}
            <button
              onClick={handleProcess}
              disabled={!file || isProcessing}
              className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                !file || isProcessing
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transform hover:scale-[1.02]"
              }`}
            >
              {isProcessing ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  Processing...
                </div>
              ) : (
                "Start Processing"
              )}
            </button>

            {/* Processing Info */}
            {isProcessing && (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold mb-4">
                  Processing Status
                </h3>
                <div className="flex items-center space-x-3">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-400"></div>
                  <span className="text-blue-400 font-medium">
                    {processingStep}
                  </span>
                </div>
                <div className="mt-4 bg-black/30 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full transition-all duration-300 animate-pulse"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="space-y-6 w-[60%]">
            {/* Transcript */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 h-[400px]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold flex items-center">
                  <FileTextIcon />
                  <span className="ml-2">Transcript</span>
                </h3>
                {transcript && (
                  <div className="flex space-x-2">
                    <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                      <DownloadIcon />
                    </button>
                    <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                      <ShareIcon />
                    </button>
                  </div>
                )}
              </div>

              <div className="bg-black/30 rounded-xl p-4 h-[320px] overflow-y-auto">
                {transcript ? (
                  <p className="text-gray-200 leading-relaxed whitespace-pre-wrap">
                    {transcript}
                  </p>
                ) : (
                  <p className="text-gray-500 italic">
                    Transcript will appear here after processing...
                  </p>
                )}
              </div>
            </div>

            {/* Summary */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 h-[400px]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    />
                  </svg>
                  AI Summary
                </h3>
                {summary && (
                  <div className="flex space-x-2">
                    <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                      <DownloadIcon />
                    </button>
                    <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                      <ShareIcon />
                    </button>
                  </div>
                )}
              </div>

              <div className="bg-black/30 rounded-xl p-4 h-[320px] overflow-y-auto">
                {summary ? (
                  <p className="text-gray-200 leading-relaxed">{summary}</p>
                ) : (
                  <p className="text-gray-500 italic">
                    AI-generated summary will appear here after processing...
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodifyTranscription;
