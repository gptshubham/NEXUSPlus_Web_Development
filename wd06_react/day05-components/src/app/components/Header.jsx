import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  UserIcon,
  HeartIcon,
  ShoppingBagIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

import Logo from '../../assets/images/myntra.png';

const Header = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full flex justify-between items-center bg-white py-2 px-16 z-10 text-[13px] text-[#333]">
        {/* Logo */}
        <div>
          <img src={Logo} alt="Myntra Logo" className="h-15" />
        </div>
        {/* navigation buttons */}
        <nav className="flex gap-8 font-bold">
          <button>MEN</button>
          <button>WOMEN</button>
          <button>KIDS</button>
          <button>HOME & LIVING</button>
          <button>BEAUTY</button>
          <button>STUDIO</button>
        </nav>
        {/* Searchbar */}
        <div className="flex items-center px-3 py-2 bg-gray-100 w-[500px] rounded-xs text-[14px]">
          <MagnifyingGlassIcon className="w-4 h-4" />
          <input
            type="text"
            placeholder="search for products, brands and more"
            className="pl-5 w-[300px] outline-none"
          />
        </div>
        {/* Profile , Wishlist and Bag */}
        <nav className="flex gap-5 font-bold text-xs">
          <div className="flex flex-col items-center gap-0.5">
            <UserIcon className="w-6 h-6" />
            <button>Profile</button>
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <HeartIcon className="w-6 h-6" />
            <button>Wishlist</button>
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <ShoppingBagIcon className="w-6 h-6" />
            <button>Bag</button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
