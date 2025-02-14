import React from 'react';
import { Users } from 'lucide-react';

export const Header = () => {
  return (
    <div className="bg-gradient-to-r from-gray-700 to-gray-900 shadow-lg">
      <div className="container mx-auto px-4 py-6 sm:py-8 md:py-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold text-center flex items-center justify-center gap-3">
          <Users className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
          GitHub Profile Viewer
        </h1>
      </div>
    </div>
  );
};

export default Header;
