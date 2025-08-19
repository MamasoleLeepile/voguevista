"use client";

import { useCart } from "@/components/ProductListing/CartContext";
import itemData from "@/components/ProductListing/ProductData";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

export default function ProductDetail({ params }: { params: { id: string } }) {
  const { id } = params;
  const product = itemData.find((i) => i.id === Number(id));
  const { addToCart } = useCart();

  if (!product) return <p>Product not found</p>;

  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${product.img})` }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-lg max-w-md">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="mt-2 text-xl font-semibold">${product.price}</p>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          sollicitudin, nunc ut efficitur.
        </p>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{ mt: 4 }}
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
