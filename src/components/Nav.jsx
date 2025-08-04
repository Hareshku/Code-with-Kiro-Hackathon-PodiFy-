import React from "react";
import { Home, Sun } from "lucide-react";

function Nav() {
  return (
    <>
      <header className="flex items-center justify-between p-6">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 w-2 h-2 rounded-lg overflow-hidden">
            <img className="w-2 h-2" src="images/logo.png" alt="img" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
            <Home className="w-6 h-6" />
            <span className="text-home">Home</span>
          </button>
          <button className="p-2 text-gray-700 hover:text-gray-900">
            <Sun className="w-6 h-6" />
          </button>
        </div>
      </header>
    </>
  );
}

export default Nav;
