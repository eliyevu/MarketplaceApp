import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Product } from "../data/products";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.category}>
          {product.category}
        </Text>

        <Text style={styles.title}>
          {product.title}
        </Text>

        <Text style={styles.price}>
          GH₵ {product.price.toFixed(2)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#E8F3EF",
    width: "48%",
    borderRadius: 14,
    marginBottom: 16,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: 120,
  },

  content: {
    padding: 16,
  },

  category: {
    fontSize: 13,
    color: "#777",
    marginBottom: 4,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
  },

  price: {
    fontSize: 18,
    fontWeight: "700",
  }
});