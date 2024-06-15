import React, { useState } from 'react';
import { FaEnvelope, FaUser, FaComment } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form data:', formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 md:p-10 w-full max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 text-center">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-gray-700">Name:</label>
            <div className="flex items-center border rounded-lg p-2">
              <FaUser className="text-gray-400 mr-2" />
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="outline-none w-full"
                placeholder="Enter your name"
                required
              />
            </div>
          </div>
          <div>
            <label className="block mb-2 text-gray-700">Email:</label>
            <div className="flex items-center border rounded-lg p-2">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="outline-none w-full"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div>
            <label className="block mb-2 text-gray-700">Message:</label>
            <div className="flex items-start border rounded-lg p-2">
              <FaComment className="text-gray-400 mr-2 mt-1" />
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="outline-none w-full resize-none"
                placeholder="Enter your message"
                rows="4"
                required
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
