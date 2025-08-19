"use client";

import Hero from "@/components/Hero"; //Importing Hero component from components directory

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-white">
        {/* Main container for the page */}
      <Hero/>
      </div>
    
  );
}