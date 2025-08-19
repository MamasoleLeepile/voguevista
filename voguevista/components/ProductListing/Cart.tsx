"use client";

import { useCart } from "@/components/ProductListing/CartContext";
import Button from "@mui/material/Button";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-semibold">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product List */}
        <div className="flex-1 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-4 border p-4 rounded-lg shadow-sm"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-28 h-28 object-cover rounded-lg"
              />
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="font-semibold text-lg">{item.title}</h2>
                  <p className="text-gray-600">${item.price}</p>
                </div>
                <div className="flex items-center mt-4 space-x-2">
                  <button
                    onClick={() =>
                      updateQuantity(item.id, Math.max(1, item.quantity - 1))
                    }
                    className="px-3 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span className="px-2">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                  <Button
                    color="error"
                    variant="outlined"
                    size="small"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="w-full lg:w-96 border p-6 rounded-lg shadow-sm bg-white">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${totalPrice().toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-6">
            <span>Shipping</span>
            <span>$5.00</span>
          </div>
          <div className="flex justify-between font-semibold text-lg mb-6">
            <span>Total</span>
            <span>${(totalPrice() + 5).toFixed(2)}</span>
          </div>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className="bg-indigo-600 hover:bg-indigo-500 py-3"
          >
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}
