"use client"; // Needed because SessionProvider and CartProvider are client-side

import { SessionProvider } from "next-auth/react";
import { MantineProvider } from "@mantine/core";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/ProductListing/CartContext"; // adjust path
import "./globals.css";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white min-h-screen flex flex-col`}>
        {/* Wrap your app in SessionProvider and CartProvider */}
        <SessionProvider>
          <CartProvider>
            {/* Header */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-grow flex items-center justify-center">
              {children}
            </main>

            {/* Footer */}
            <Footer />
          </CartProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
