import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTasks } from 'react-icons/fa';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-blue-600 p-4 text-white shadow-lg relative">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center text-2xl font-bold">
          <FaTasks className="mr-2" />
          Task Manager
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:underline focus:underline">Home</Link>
          <Link to="/tasks" className="hover:underline focus:underline">Tasks</Link>
          <Link to="/aboutPage" className="hover:underline focus:underline">About</Link>
          <Link to="/contactPage" className="hover:underline focus:underline">Contact</Link>
        </nav>
        <button
          className="md:hidden flex items-center px-3 py-2 border rounded text-white border-white hover:text-blue-200 hover:border-blue-200"
          onClick={toggleMobileMenu}
        >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20">
            <title>Menu</title>
            <path d="M0 3h20v2H0zM0 7h20v2H0zM0 11h20v2H0zM0 15h20v2H0z" />
          </svg>
        </button>
      </div>
      {isMobileMenuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-blue-600 z-10 md:hidden">
          <Link
            to="/"
            className="block py-2 px-4 text-white hover:bg-blue-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/tasks"
            className="block py-2 px-4 text-white hover:bg-blue-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Tasks
          </Link>
          <Link
            to="/aboutPage"
            className="block py-2 px-4 text-white hover:bg-blue-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contactPage"
            className="block py-2 px-4 text-white hover:bg-blue-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
