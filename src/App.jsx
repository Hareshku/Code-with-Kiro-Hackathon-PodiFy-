import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Summary from "./components/Summary";
import Transcript from "./components/Transcript";
import FileUpload from "./components/FileUpload";
import Preview from "./components/Preview";
import TimeControll from "./components/TimeControll";
import Button from "./components/Button";
import Audio from "./components/Audio";
import Processing from "./components/Processing";

const App = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [audioFile, setAudioFile] = useState(null);
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
        <Header />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <FileUpload
              audioFile={audioFile}
              handleFileUpload={handleFileUpload}
            />
            <Preview />
            <TimeControll />
            <Button
              audioFile={audioFile}
              isProcessing={isProcessing}
              handleProcess={handleProcess}
            />
          </div>
          <div className="space-y-6">
            <Audio />
            <div className="bg-white border border-gray-300 p-6 space-y-6">
              <Processing isProcessing={isProcessing} />
              <Transcript />
              <Summary />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
