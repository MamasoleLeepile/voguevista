"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/ProductListing/CartContext";

type Product = {
  id: number;
  title: string;
  category: string;
  price: number; // Use number instead of string for price
  imageUrl: string;
};

const products: Product[] = [
  { id: 1, title: "The Catalyzer", category: "CATEGORY", price: 16.0, imageUrl: "/chandbags.jpg" },
  { id: 2, title: "Shooting Stars", category: "CATEGORY", price: 21.15, imageUrl: "/colarshirt.jpg" },
  { id: 3, title: "Neptune", category: "CATEGORY", price: 12.0, imageUrl: "/colorman.jpg" },
  { id: 4, title: "The 400 Blows", category: "CATEGORY", price: 18.4, imageUrl: "/colormanBlack.jpg" },
  { id: 5, title: "The Catalyzer", category: "CATEGORY", price: 16.0, imageUrl: "/colourfulT-shirt.jpg" },
  { id: 6, title: "Shooting Stars", category: "CATEGORY", price: 21.15, imageUrl: "/colourfulT-shirt1.jpg" },
  { id: 7, title: "Neptune", category: "CATEGORY", price: 12.0, imageUrl: "/guccihandbags.jpg" },
  { id: 8, title: "The 400 Blows", category: "CATEGORY", price: 18.4, imageUrl: "/guccitakies.jpg" },
  { id: 9, title: "The 400 Blows", category: "CATEGORY", price: 18.4, imageUrl: "/gymOutfit.jpg" },
  { id: 10, title: "The 400 Blows", category: "CATEGORY", price: 18.4, imageUrl: "/ladies-2pcs.jpg" },
  { id: 11, title: "The 400 Blows", category: "CATEGORY", price: 18.4, imageUrl: "/puma-cap1.jpg" },
  { id: 12, title: "The 400 Blows", category: "CATEGORY", price: 18.4, imageUrl: "/puma-tshirt.jpg" },
  { id: 13, title: "The 400 Blows", category: "CATEGORY", price: 18.4, imageUrl: "/puma.jpg" },
  { id: 14, title: "The 400 Blows", category: "CATEGORY", price: 18.4, imageUrl: "/pumacap2.jpg" },
  { id: 15, title: "The 400 Blows", category: "CATEGORY", price: 18.4, imageUrl: "/pumacap3.jpg" },
  { id: 16, title: "The 400 Blows", category: "CATEGORY", price: 18.4, imageUrl: "/T-shirt.jpg" },
    { id: 18, title: "The 400 Blows", category: "CATEGORY", price: 18.4, imageUrl: "/watch1.jpg" },
  { id: 17, title: "The 400 Blows", category: "CATEGORY", price: 18.4, imageUrl: "/watch2.jpg" },
  { id: 18, title: "The 400 Blows", category: "CATEGORY", price: 18.4, imageUrl: "/watch3.jpg" },
  { id: 19, title: "The 400 Blows", category: "CATEGORY", price: 18.4, imageUrl: "/mkhandbags.jpg" },
];

const ProductGrid: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <section className="text-gray-600 body-font py-24 bg-white">
      <div className="container px-5 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((product) => (
            <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="relative group h-48 rounded overflow-hidden">
                <Link href={`/properties/${product.id}`} className="block w-full h-full">
                  <Image
                    src={product.imageUrl.startsWith("/") ? product.imageUrl : `/${product.imageUrl}`}
                    alt={product.title}
                    fill
                    className="object-cover object-center w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>

                {/* Add to Cart button */}
                <button
                  onClick={() =>
                    addToCart({
                      id: product.id,
                      title: product.title,
                      img: product.imageUrl,
                      price: product.price,
                    })
                  }
                  className="absolute bottom-0 right-0 bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1 rounded shadow-md text-sm transition-colors duration-300"
                >
                  Add to Cart
                </button>
              </div>

              <div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.category}</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">{product.title}</h2>
                <p className="mt-1 text-pink-500 font-semibold">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
