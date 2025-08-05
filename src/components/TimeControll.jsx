import React, { useState } from "react";

const TimeControll = () => {
  const [startTime, setStartTime] = useState("0");
  const [endTime, setEndTime] = useState("0");

  return (
    <>
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
    </>
  );
};

export default TimeControll;
