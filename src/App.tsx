import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-6">Welcome to React + Vite</h1>
        <p className="text-xl text-white mb-8">With TypeScript and Tailwind CSS</p>
        <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default App;