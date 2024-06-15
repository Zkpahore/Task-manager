import React from 'react';
import { FaTasks } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 md:p-10 max-w-3xl w-full">
        <div className="flex items-center justify-center mb-6">
          <FaTasks className="text-6xl text-purple-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 text-center">Task Manager</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-4">
          This application is designed to help you keep track of your daily tasks.
        </p>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          With Task Manager, you can add, update, and delete tasks as needed, and mark them as completed once they are done.
        </p>
        <div className="flex justify-center">
          <Link to='/tasks'>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
            Get Started
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
