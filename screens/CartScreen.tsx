import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CartScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.iconContainer}>
        <Ionicons
          name="cart-outline"
          size={58}
          color="#111827"
        />
      </View>

      <Text style={styles.title}>
        Your cart is empty
      </Text>

      <Text style={styles.message}>
        Looks like you haven't added anything yet
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Start Shopping
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },

  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#E8F3EF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },

  title: {
    fontSize: 25,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 10,
  },

  message: {
    fontSize: 15,
    color: "#777",
    textAlign: "center",
    lineHeight: 22,
    maxWidth: 280,
  },

  button: {
    marginTop: 28,
    backgroundColor: "#409e6a",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 14,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
  },
});