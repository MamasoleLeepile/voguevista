"use client";

import Cart from "@/components/ProductListing/Cart";
import { CartProvider } from "@/components/ProductListing/CartContext";

export default function CartWrapper() {
  return (
    <CartProvider>
      <Cart/>
    </CartProvider>
  );
}
