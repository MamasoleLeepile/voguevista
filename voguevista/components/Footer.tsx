"use client"
import { MonitorSmartphone } from "lucide-react";
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
    { href: "blog", name: "Blog" },
    { href: "contact", name: "Contact" },
    { href: "properties", name: "Listings" },
  ];

  return (
    <footer className="text-gray-600 bg-white px-4 py-5 border-t border-gray-200 max-w-screen-xl mx-auto md:px-8">
      <div className="max-w-lg sm:mx-auto sm:text-center">
        <Link href="/" className="flex items-center justify-center gap-2 font-semibold">
          <Image 
            src='/logo.png' 
            alt='logo'
            width="50"
            height="50"
          />
          </Link>
        <p className="leading-relaxed mt-2 text-[15px]">
          Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>

      <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
        {footerNavs.map((item, idx) => (
          <li key={idx} className="hover:text-gray-800">
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>

      <div className="mt-8 items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">&copy; {new Date().getFullYear()} Vogue Vista. All rights reserved.</div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-4">
            <li className="w-10 h-10 border rounded-full flex items-center justify-center hover:border-green-600">
              <Link href="">
                <BsWhatsapp className="text-green-600" />
              </Link>
            </li>
            <li className="w-10 h-10 border rounded-full flex items-center justify-center hover:border-blue-600">
              <Link href="">
                <BsLinkedin className="text-blue-600" />
              </Link>
            </li>
            <li className="w-10 h-10 border rounded-full flex items-center justify-center hover:border-blue-600">
              <Link href="">
                <BsFacebook className="text-blue-600" />
              </Link>
            </li>
            <li className="w-10 h-10 border rounded-full flex items-center justify-center hover:border-pink-500">
              <Link href="">
                <BsInstagram className="text-pink-500" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;