"use client";

import * as React from "react";
import { useCart } from "@/components/ProductListing/CartContext";
import itemData from "@/components/ProductListing/ProductData";
import {
  Container,
  SimpleGrid,
  Stack,
  Image,
  Text,
  Button,
  Title,
  Paper,
} from "@mantine/core";

export default function ProductDetail({ params }: { params: { id: string } }) {
  const { id } = params;
  const product = itemData.find((i) => i.id === Number(id));
  const { addToCart } = useCart();

  if (!product) return <p>Product not found</p>;

  return (
    <Container my="xl">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
        {/* Product Image */}
        <Paper shadow="md" radius="md" p="md">
          <Image
            src={product.img}
            alt={product.title}
            radius="md"
            fit="cover"
          />
        </Paper>

        {/* Product Details */}
        <Stack justify="center" gap="md">
          <Title order={2}>{product.title}</Title>
          <Text size="lg" fw={500}>
            ${product.price}
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            sollicitudin, nunc ut efficitur, magna quam varius est.
          </Text>
          <Button
            color="blue"
            size="md"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </Button>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
