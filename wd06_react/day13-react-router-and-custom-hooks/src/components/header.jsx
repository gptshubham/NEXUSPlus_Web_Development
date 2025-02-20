import React from 'react';
import { Link } from 'react-router';

export default function Header() {
  return (
    <nav className="flex flex-wrap w-full justify-center items-center">
      <Link
        to="/"
        className="px-4 py-2 bg-gray-700 hover:bg-gray-600 active:bg-gray-700 ml-5 mt-5 text-white rounded-lg transition"
      >
        Home
      </Link>
      <Link
        to="/Contact"
        className="px-4 py-2 bg-gray-700 hover:bg-gray-600 active:bg-gray-700 ml-5 mt-5 text-white rounded-lg transition"
      >
        Contact Us
      </Link>
      <Link
        to="/DashBoard"
        className="px-4 py-2 bg-gray-700 hover:bg-gray-600 active:bg-gray-700 ml-5 mt-5 text-white rounded-lg transition"
      >
        DashBoard
      </Link>
      <Link
        to="/Details"
        className="px-4 py-2 bg-gray-700 hover:bg-gray-600 active:bg-gray-700 ml-5 mt-5 text-white rounded-lg transition"
      >
        Details
      </Link>
      <Link
        to="/GitHub/gptshubham"
        className="px-4 py-2 bg-gray-700 hover:bg-gray-600 active:bg-gray-700 ml-5 mt-5 text-white rounded-lg transition"
      >
        My GitHub Profile
      </Link>
      <Link
        to="/Search-GitHub"
        className="px-4 py-2 bg-gray-700 hover:bg-gray-600 active:bg-gray-700 ml-5 mt-5 text-white rounded-lg transition"
      >
        Search GitHub Profile
      </Link>
    </nav>
  );
}
