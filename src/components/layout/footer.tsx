"use client";
import React from "react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { phoneNumber } from "@/const/data";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1f1f1f] rounded-t-3xl -mt-6 relative z-10 text-white ">
      <div className="w-full flex items-center justify-center">
        <div className=" max-w-7xl  mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 py-16 px-6 md:px-16">
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
              <a
                href="https://www.linkedin.com/in/clt-academy/"
                className="w-10 h-10 flex items-center justify-center rounded-md bg-white text-black hover:bg-primary transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.youtube.com/@CLTACADEMY-p8s"
                className="w-10 h-10 flex items-center justify-center rounded-md bg-white text-black hover:bg-primary transition"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.instagram.com/clt_academy.ae/?hl=en"
                className="w-10 h-10 flex items-center justify-center rounded-md bg-white text-black hover:bg-primary transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-3">Quick Links</h3>
            <div className="w-10 h-[3px] bg-red-500 mb-4"></div>

            <ul className="space-y-3 flex flex-col gap-2 text-gray-300">
              <Link href="/" className="hover:text-white cursor-pointer">
                Home
              </Link>
              <Link href="/about" className="hover:text-white cursor-pointer">
                About
              </Link>

              <Link href="/courses" className="hover:text-white cursor-pointer">
                Our Courses
              </Link>
              <Link href="/team" className="hover:text-white cursor-pointer">
                Our Team
              </Link>
              <Link
                href={`/contact`}
                className="hover:text-white cursor-pointer"
              >
                Contact Us
              </Link>
              <Link
                href={`/gallery`}
                className="hover:text-white cursor-pointer"
              >
                Gallery
              </Link>
              <Link href={`/blogs`} className="hover:text-white cursor-pointer">
                Blogs
              </Link>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-semibold mb-3">Contact</h3>
            <div className="w-10 h-[3px] bg-red-500 mb-4"></div>

            <div className="space-y-4 text-gray-300">
              <p className="flex items-start gap-3">
                <IoLocationSharp className="text-xl mt-1" />
                Al Quiyadha Al Shaibani Building M09 Near Mamzar Center Hor al
                anz East
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
        </div>
      </div>
      <div className="w-full bg-black  ">
        <div className="max-w-7xl mx-auto flex items-center md:flex-row flex-col md:gap-0 gap-1 py-2 justify-between md:px-32 md:py-6 md:h-3">
          <p className="text-xs">© 2025 CLT Academy. All rights reserved.</p>
          <p className="text-xs flex items-center gap-2">
            <Link
              href="/disclaimer"
              className="hover:text-white cursor-pointer"
            >
              Disclaimer
            </Link>
            |
            <Link
              href="/privacy-policy"
              className="hover:text-white cursor-pointer"
            >
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link
              href="/termsandcondition"
              className="hover:text-white cursor-pointer"
            >
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
