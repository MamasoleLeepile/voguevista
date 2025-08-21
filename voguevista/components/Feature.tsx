"use client";
import React from "react";
import Link from "next/link";

export default function Feature() {
  return (
    <section className="px-4 py-24 mx-auto max-w-7xl space-y-32">
      {/* First Feature */}
      <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
        <div>
          <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-gray-900 md:leading-tight sm:text-left md:text-4xl">
            Our Process
          </h2>
          <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
            Manage your fashion collections and outfits effortlessly. Use filters, wishlists, and smart recommendations to find your perfect look in seconds.
          </p>
          <Link
            href="/features"
            className="inline-block px-6 py-3 text-white font-semibold tracking-wide 
              bg-gradient-to-r from-pink-500 via-rose-400 to-pink-600
              hover:from-pink-400 hover:via-rose-500 hover:to-pink-700
              rounded-full shadow-md transition-all duration-300 text-center"
          >
            Learn More
          </Link>
        </div>
        <div className="relative w-full h-full py-48 bg-rose-50 rounded-xl shadow-md flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-100 via-rose-50 to-beige-50 opacity-30 rounded-xl transform rotate-6"></div>
          <img
            src="https://images.unsplash.com/photo-1600180758895-6011e84584b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="VogueVista outfit showcase"
            className="w-full h-full object-cover rounded-xl transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg relative z-10"
          />
        </div>
      </div>

      {/* Second Feature */}
      <div className="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
        <div className="order-none md:order-2">
          <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-gray-900 md:leading-tight sm:text-left md:text-4xl">
            Our Vision
          </h2>
          <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
            Discover curated outfits, seasonal collections, and personalized recommendations. Explore our boutique features and build your wardrobe effortlessly.
          </p>
          <Link
            href="/features"
            className="inline-block px-6 py-3 text-white font-semibold tracking-wide 
              bg-gradient-to-r from-pink-500 via-rose-400 to-pink-600
              hover:from-pink-400 hover:via-rose-500 hover:to-pink-700
              rounded-full shadow-md transition-all duration-300 text-center"
          >
            Learn More
          </Link>
        </div>
        <div className="relative w-full h-full py-48 bg-rose-50 rounded-xl shadow-md flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-bl from-pink-50 via-rose-100 to-beige-50 opacity-30 rounded-xl transform -rotate-6"></div>
          <img
            src="https://images.unsplash.com/photo-1617196036643-8c04c1b4ec36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="VogueVista personalized shopping"
            className="w-full h-full object-cover rounded-xl transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg relative z-10"
          />
        </div>
      </div>

      {/* Third Feature: Our Impact */}
      <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
        <div>
          <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-gray-900 md:leading-tight sm:text-left md:text-4xl">
            Our Impact
          </h2>
          <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
            We care about sustainability and ethical fashion. Each collection is crafted responsibly, supporting local artisans and minimizing environmental impact.
          </p>
          <Link
            href="/impact"
            className="inline-block px-6 py-3 text-white font-semibold tracking-wide 
              bg-gradient-to-r from-pink-500 via-rose-400 to-pink-600
              hover:from-pink-400 hover:via-rose-500 hover:to-pink-700
              rounded-full shadow-md transition-all duration-300 text-center"
          >
            Learn More
          </Link>
        </div>
        <div className="relative w-full h-full py-48 bg-rose-50 rounded-xl shadow-md flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-beige-50 via-pink-50 to-rose-50 opacity-30 rounded-xl transform rotate-3"></div>
          <img
            src="https://images.unsplash.com/photo-1520962919502-0e1c2eec5f88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Sustainable fashion impact"
            className="w-full h-full object-cover rounded-xl transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg relative z-10"
          />
        </div>
      </div>

      {/* Fourth Feature: Payment Methods */}
      <div className="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
        <div className="order-none md:order-2">
          <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-gray-900 md:leading-tight sm:text-left md:text-4xl">
            Flexible Payment Methods
          </h2>
          <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
            Shop confidently with multiple payment options including credit cards, PayPal, and secure online payments, all designed for a smooth checkout experience.
          </p>
          <Link
            href="/payments"
            className="inline-block px-6 py-3 text-white font-semibold tracking-wide 
              bg-gradient-to-r from-pink-500 via-rose-400 to-pink-600
              hover:from-pink-400 hover:via-rose-500 hover:to-pink-700
              rounded-full shadow-md transition-all duration-300 text-center"
          >
            Learn More
          </Link>
        </div>
        <div className="relative w-full h-full py-48 bg-rose-50 rounded-xl shadow-md flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-bl from-beige-50 via-rose-50 to-pink-50 opacity-30 rounded-xl transform -rotate-3"></div>
          <img
            src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Flexible payments"
            className="w-full h-full object-cover rounded-xl transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg relative z-10"
          />
        </div>
      </div>
    </section>
  );
}
