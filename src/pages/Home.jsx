import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-4">
      <div className="text-center bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-2xl">
        <h1 className="text-5xl font-bold mb-6 text-gray-800">Welcome to Task Manager</h1>
        <p className="text-xl mb-6 text-gray-700">This application helps you manage your daily tasks efficiently.</p>
        <div className="flex justify-center space-x-4">
        <Link to='/tasks'>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
            Get Started
          </button>
          </Link>
          <Link to='/aboutPage'>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
            About Us
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
