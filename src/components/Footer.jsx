import React from 'react';
import { Instagram, Facebook, Twitter, } from 'lucide-react';
import { IoLogoWhatsapp } from "react-icons/io5";

export const Footer = () => {
  return (
    <footer id='footer' className="bg-white text-gray-800 py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 font-serif">Follow</h2>
        <div className="flex justify-center space-x-8">
          <a
            href="https://www.instagram.com/queridocuervomx/"
            className="hover:text-gray-600 transition-colors transform hover:scale-110"
          >
            <Instagram size={32} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61558624221462&mibextid=LQQJ4d"
            className="hover:text-gray-600 transition-colors transform hover:scale-110"
          >
            <Facebook size={32} />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=525595595330&text&type=phone_number&app_absent=0"
            className="hover:text-gray-600 transition-colors transform hover:scale-110"
          >
            <IoLogoWhatsapp size={32} />
          </a>
        </div>
      </div>
    </footer>
  );
};