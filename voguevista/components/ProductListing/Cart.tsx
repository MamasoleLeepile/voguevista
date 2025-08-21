"use client";

import { useCart } from "@/components/ProductListing/CartContext";
import { Button, IconButton } from "@mui/material";
import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";
import { Grid } from "@mantine/core";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <p className="text-2xl font-semibold mb-4">Your cart is empty 🛒</p>
        <Button
          variant="contained"
          color="primary"
          href="/properties"
          className="bg-indigo-600 hover:bg-indigo-500"
        >
          Continue Shopping
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <Grid gutter="xl">
        {/* Cart Items */}
        <Grid.Col span={{ base: 12, lg: 8 }}>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-4 border p-4 rounded-lg shadow-sm bg-white"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full sm:w-28 h-28 object-cover rounded-lg"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="font-semibold text-lg">{item.title}</h2>
                    <p className="text-gray-600">${item.price}</p>
                  </div>
                  <div className="flex items-center mt-4 space-x-2">
                    <IconButton
                      onClick={() =>
                        updateQuantity(item.id, Math.max(1, item.quantity - 1))
                      }
                      size="small"
                      color="primary"
                    >
                      <RemoveIcon />
                    </IconButton>
                    <span className="px-2">{item.quantity}</span>
                    <IconButton
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      size="small"
                      color="primary"
                    >
                      <AddIcon />
                    </IconButton>
                    <Button
                      className="bg-indigo-600 hover:bg-indigo-500 py-3 transition-colors duration-200"
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
        </Grid.Col>

        {/* Summary */}
        <Grid.Col span={{ base: 12, lg: 4 }}>
          <div className="w-full border p-6 rounded-lg shadow-lg bg-gray-50">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${totalPrice().toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
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
  className="bg-indigo-600 hover:bg-indigo-500 py-3 transition-colors duration-200"
>
  Proceed to Checkout
</Button>
          </div>
        </Grid.Col>
      </Grid>
    </div>
  );
}
