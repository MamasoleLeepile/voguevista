"use client";

export default function Hero() {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
        {/* Text Content */}
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h1 className="text-sm text-indigo-600 font-medium tracking-wide uppercase">
            New Season Arrivals
          </h1>
          <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
            Discover the latest{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
              fashion trends
            </span>
          </h2>
          <p className="max-w-2xl mx-auto">
            Upgrade your wardrobe with exclusive collections. Shop stylish outfits,
            accessories, and more—delivered right to your doorstep.
          </p>
          <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
            <a
              href="/auth/login"
              className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
            >
              Shop Now
            </a>
            <a
              href="/productspage"
              className="block py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg"
            >
              Explore Collections
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-14">
          <img
            src="https://images.unsplash.com/photo-1520975922071-363c8c6e0c8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
            className="w-full shadow-lg rounded-lg border"
            alt="Fashion showcase"
          />
        </div>
      </div>
    </section>
  );
}
