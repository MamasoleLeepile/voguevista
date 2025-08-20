"use client";

import { Container, SimpleGrid, Card, Image, Text, Button } from "@mantine/core";
import { useCart } from "@/components/ProductListing/CartContext";
import { useRouter } from "next/navigation";

// --- Sample starter products (hardcoded) ---
const sampleProducts = [
  { id: 1, title: "Modern Sofa", price: 1200, img: "/images/coat.jpg" },
  { id: 2, title: "Elegant Lamp", price: 350, img: "/images/mens.jpg" },
  { id: 3, title: "Office Chair", price: 700, img: "/images/trouser.jpg" },
  { id: 4, title: "Stylish Table", price: 950, img: "/images/whiteblue.jpg" },
  { id: 5, title: "Wall Art", price: 180, img: "/images/springdress1.jpg" },
];

export default function ProductsPage() {
  const { addToCart } = useCart();
  const router = useRouter();

  return (
    <Container my="lg">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>

      <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }}>
        {sampleProducts.map((product) => (
          <Card key={product.id} shadow="sm" padding="md" radius="md" withBorder>
            <Card.Section>
              <Image src={product.img} height={160} alt={product.title} />
            </Card.Section>

            <Text fw={600} size="lg" mt="sm">{product.title}</Text>
            <Text size="sm" c="dimmed">${product.price}</Text>

            <div className="flex flex-col gap-2 mt-4">
              <Button variant="light" color="blue" onClick={() => addToCart(product)}>
                Add to Cart
              </Button>
              <Button color="indigo" onClick={() => router.push("/cart")}>
                Continue to Cart
              </Button>
            </div>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}
