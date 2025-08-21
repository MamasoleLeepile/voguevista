"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";

type FooterNavItem = {
  href: string;
  name: string;
};

const Footer: React.FC = () => {
  const footerNavs: FooterNavItem[] = [
    { href: "about", name: "About" },
    { href: "cart", name: "Cart" },
    { href: "contact", name: "Contact" },
    { href: "about", name: "About" },
  ];

  return (
    <footer className="relative text-gray-700 px-4 py-8 w-full bg-rose-50 rounded-t-3xl overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-50 via-rose-50 to-rose-100 opacity-80 -z-10"></div>

      <div className="max-w-screen-xl mx-auto text-center relative z-10">
        <Link href="/" className="flex items-center justify-center gap-2 font-semibold">
          <Image 
            src='/logo.jpg' 
            alt='logo'
            width={50}
            height={50}
          />
          <span className="text-pink-600 text-xl font-bold">VogueVista</span>
        </Link>
        <p className="leading-relaxed mt-2 text-[15px] text-gray-600">
          Discover the latest trends and premium collections at VogueVista. Stylish outfits delivered to your doorstep.
        </p>

        <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-6 sm:space-y-0 text-gray-700">
          {footerNavs.map((item, idx) => (
            <li key={idx} className="hover:text-pink-500 transition-colors duration-300">
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>

        <div className="mt-8 items-center justify-between sm:flex">
          <div className="mt-4 sm:mt-0 text-gray-600">
            &copy; {new Date().getFullYear()} VogueVista. All rights reserved.
          </div>
          <div className="mt-6 sm:mt-0">
            <ul className="flex items-center justify-center space-x-4">
              <li className="w-10 h-10 border rounded-full flex items-center justify-center hover:border-green-500 transition-colors duration-300">
                <Link href="">
                  <BsWhatsapp className="text-green-500" />
                </Link>
              </li>
              <li className="w-10 h-10 border rounded-full flex items-center justify-center hover:border-blue-500 transition-colors duration-300">
                <Link href="">
                  <BsLinkedin className="text-blue-500" />
                </Link>
              </li>
              <li className="w-10 h-10 border rounded-full flex items-center justify-center hover:border-blue-500 transition-colors duration-300">
                <Link href="">
                  <BsFacebook className="text-blue-500" />
                </Link>
              </li>
              <li className="w-10 h-10 border rounded-full flex items-center justify-center hover:border-pink-500 transition-colors duration-300">
                <Link href="">
                  <BsInstagram className="text-pink-500" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
