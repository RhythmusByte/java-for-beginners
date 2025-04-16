import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white flex flex-col items-center justify-center">
        <header className="flex items-center gap-4 mb-8">
          <img src={viteLogo} alt="Vite logo" className="h-16 p-4 rounded-full shadow-lg transition-transform transform hover:scale-110" />
          <img src={reactLogo} alt="React logo" className="h-16 p-4 rounded-full shadow-lg transition-transform transform hover:scale-110" />
        </header>

        <h1 className="text-5xl font-extrabold mb-4 animate__animated animate__fadeIn">
          Welcome to Vite + React + Tailwind!
        </h1>

        <div className="bg-white text-black p-6 rounded-lg shadow-xl mb-6 max-w-md w-full text-center">
          <p className="text-xl mb-4">Click the button to increment the count:</p>
          <button
            onClick={() => setCount(count + 1)}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
          >
            Count is {count}
          </button>
        </div>

        <footer className="w-full py-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-center text-white text-sm mt-auto">
          <p>
            &copy; {currentYear} <span className="font-semibold">RhythmusByte</span>. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
