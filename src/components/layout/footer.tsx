"use client";
import React from "react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1f1f1f] rounded-t-3xl -mt-6 relative z-10 text-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Left Section */}
        <div>
          <img src="/logo.png" alt="logo" className="w-20 mb-6" />

          <p className="text-lg font-semibold mb-3">
            BUILT BY TRADERS. DRIVEN BY PURPOSE.
          </p>
          <p className="text-sm leading-relaxed text-gray-300">
            At CLT Academy, we don't just teach trading — we shape the mindset
            of elite traders. We’re not just an academy. We’re a movement.
          </p>

          <div className="flex items-center gap-4 mt-6">
            <a className="w-10 h-10 flex items-center justify-center rounded-md bg-white text-black hover:bg-primary transition">
              <FaLinkedinIn />
            </a>
            <a className="w-10 h-10 flex items-center justify-center rounded-md bg-white text-black hover:bg-primary transition">
              <FaYoutube />
            </a>
            <a className="w-10 h-10 flex items-center justify-center rounded-md bg-white text-black hover:bg-primary transition">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-3">Quick Links</h3>
          <div className="w-10 h-[3px] bg-red-500 mb-4"></div>

          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Gallery</li>
            <li className="hover:text-white cursor-pointer">Success Stories</li>
            <li className="hover:text-white cursor-pointer">Course</li>
            <li className="hover:text-white cursor-pointer">Blogs</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-2xl font-semibold mb-3">Contact</h3>
          <div className="w-10 h-[3px] bg-red-500 mb-4"></div>

          <div className="space-y-4 text-gray-300">
            <p className="flex items-start gap-3">
              <IoLocationSharp className="text-xl mt-1" />
              Hyatt Regency Dubai, Al khaleej street,  
              Deira, Dubai — Office #239
            </p>
            <p className="flex items-center gap-3">
              <FiPhoneCall className="text-xl" /> +971 557454523
            </p>
            <p className="flex items-center gap-3">
              <MdEmail className="text-xl" /> info@clt-academy.com
            </p>
          </div>
        </div>

        {/* Gallery */}
        <div>
          <h3 className="text-2xl font-semibold mb-3">Gallery</h3>
          <div className="w-10 h-[3px] bg-red-500 mb-4"></div>

          <div className="grid grid-cols-3 gap-3">
            <img src="https://clt-academy.com/wp-content/uploads/al_opt_content/IMAGE/clt-academy.com/wp-content/uploads/2025/06/Untitled-design-7-150x150.jpg.bv.webp?bv_host=clt-academy.com" className="w-20 h-20 object-cover rounded-md" />
            <img src="https://clt-academy.com/wp-content/uploads/al_opt_content/IMAGE/clt-academy.com/wp-content/uploads/2025/06/Untitled-design-6-150x150.jpg.bv.webp?bv_host=clt-academy.com" className="w-20 h-20 object-cover rounded-md" />
            <img src="https://clt-academy.com/wp-content/uploads/al_opt_content/IMAGE/clt-academy.com/wp-content/uploads/2025/06/Untitled-design-8-150x150.jpg.bv.webp?bv_host=clt-academy.com" className="w-20 h-20 object-cover rounded-md" />
            <img src="https://clt-academy.com/wp-content/uploads/al_opt_content/IMAGE/clt-academy.com/wp-content/uploads/2025/05/Untitled-design-18-150x150.png.bv.webp?bv_host=clt-academy.com" className="w-20 h-20 object-cover rounded-md" />
            <img src="https://clt-academy.com/wp-content/uploads/al_opt_content/IMAGE/clt-academy.com/wp-content/uploads/2025/05/3-150x150.png.bv.webp?bv_host=clt-academy.com" className="w-20 h-20 object-cover rounded-md" />
            <img src="https://clt-academy.com/wp-content/uploads/al_opt_content/IMAGE/clt-academy.com/wp-content/uploads/2025/05/3-150x150.png.bv.webp?bv_host=clt-academy.com" className="w-20 h-20 object-cover rounded-md" />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
