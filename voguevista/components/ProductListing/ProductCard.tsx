"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import { useCart } from "./CartContext"; // Adjust path to your context
import itemData from "@/components/ProductListing/ProductData";


const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: (theme.vars || theme).palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

export default function ProductCard({ products }: { products?: typeof itemData }) {
  const { addToCart } = useCart();
  const displayProducts = products || itemData;

  return (
    <Box sx={{ width: "100%", minHeight: 829 }}>
      <Masonry columns={{ xs: 2, sm: 3, md: 4 }} spacing={2}>
        {displayProducts.map((item) => (
          <div key={item.id} className="relative">
            <Label>{item.title}</Label>
            <Link href={`/product/${item.id}`}>
              <img
                src={item.img}
                alt={item.title}
                className="cursor-pointer w-full rounded-lg"
              />
            </Link>
            <div className="flex justify-between mt-1 px-1 items-center">
              <span className="font-medium text-gray-800">${item.price}</span>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                size="small"
                onClick={() => addToCart(item)}
                sx={{ textTransform: "none" }}
              >
                Add
              </Button>
            </div>
          </div>
        ))}
      </Masonry>
    </Box>
  );
}
/*
// Product data with unique IDs for routing
export const itemData = [
  { id: 1, img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f", title: "Fern", price: 12 },
  { id: 2, img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f", title: "Snacks", price: 8 },
  { id: 3, img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25", title: "Mushrooms", price: 15 },
  { id: 4, img: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383", title: "Tower", price: 25 },
  { id: 5, img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1", title: "Sea star", price: 18 },
  { id: 6, img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62", title: "Honey", price: 20 },
  { id: 7, img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6", title: "Basketball", price: 30 },
  { id: 8, img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e", title: "Breakfast", price: 10 },
  { id: 9, img: "https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d", title: "Tree", price: 14 },
  { id: 10, img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", title: "Burger", price: 9 },
  { id: 11, img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45", title: "Camera", price: 50 },
  { id: 12, img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c", title: "Coffee", price: 6 },
  { id: 13, img: "https://images.unsplash.com/photo-1627000086207-76eabf23aa2e", title: "Camping Car", price: 60 },
  { id: 14, img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8", title: "Hats", price: 12 },
  { id: 15, img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af", title: "Tomato basil", price: 7 },
  { id: 16, img: "https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7", title: "Mountain", price: 40 },
  { id: 17, img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6", title: "Bike", price: 35 },
];

*/
