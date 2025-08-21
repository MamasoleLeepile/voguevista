"use client";

import FAQSection from "./FAQSection";
import Feature from "./Feature";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-rose-50 via-pink-50 to-beige-50">
      <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-700 md:px-8">
        {/* Text Content */}
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h1 className="text-sm text-rose-500 font-semibold tracking-widest uppercase">
            New Season Arrivals
          </h1>
          <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
            Discover the latest{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-400 to-pink-600">
              fashion trends
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Upgrade your wardrobe with exclusive collections. Shop stylish outfits,
            accessories, and more—delivered right to your doorstep.
          </p>
          <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
            <a
              href="/auth/login"
              className="block py-3 px-6 text-white font-semibold tracking-wide shadow-md 
              bg-gradient-to-r from-pink-500 via-rose-400 to-pink-600
              hover:from-pink-400 hover:via-rose-500 hover:to-pink-700
              rounded-full transition-all duration-300"
            >
              Shop Now
            </a>
            <a
              href="/productspage"
              className="block py-3 px-6 text-rose-600 hover:text-rose-700 font-medium border border-rose-300 
              rounded-full bg-white shadow-sm hover:bg-rose-50 transition-all duration-300"
            >
              Explore Collections
            </a>
          </div>
        </div>

{/* Medium Hero Card */}
<div className="mt-5 max-w-sm mx-auto rounded-2xl shadow-lg overflow-hidden relative">
  {/* Gradient border */}
  <div className="rounded-2xl p-[1px] bg-gradient-to-r from-pink-200 via-pink-400 to-rose-300">
    <img
      src="/guccicomb.jpg"
      className="w-full h-80 object-cover rounded-2xl"
      alt="Fashion showcase"
    />
  </div>

  {/* Text Content */}
  <div className="p-4 bg-white rounded-b-2xl">
    <h3 className="text-lg font-bold text-gray-900">VogueVista Outfit</h3>
    <p className="text-sm text-gray-600 mt-1">Stylish and trendy collection.</p>
    <a
      href="/productspage"
      className="mt-3 inline-block px-4 py-2 bg-pink-500 text-white rounded-lg text-sm font-medium transition-colors duration-300 hover:bg-pink-600 hover:text-black-800"
    >
      Shop Now
    </a>
  </div>
</div>


      </div>

      {/* FAQ Section */}
      <FAQSection />
      <Feature />
    </section>
  );
}
