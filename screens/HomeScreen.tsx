import React, { useState } from "react";
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { Ionicons } from "@expo/vector-icons";



export default function HomeScreen() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>

      <View style={styles.header}>

        <View style={styles.logo}>
          <Text style={styles.logoText}>MK</Text>
        </View>

        <View style={styles.headerText}>
          <Text style={styles.appName}>Marketplace</Text>
        </View>

      </View>

      <View style={styles.titleSection}>
        <Text style={styles.heading}>Discover</Text>

        <Text style={styles.subtitle}>
          Find what you need
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons
          name="search-outline"
          size={21}
          color="#777"
        />

        <TextInput
          style={styles.search}
          placeholder="Search products..."
          placeholderTextColor="#999"
          value={search}
          onChangeText={setSearch}
        />

        {search.length > 0 && (
          <TouchableOpacity onPress={() => setSearch("")}>
            <Ionicons
              name="close-circle"
              size={20}
              color="#999"
            />
          </TouchableOpacity>
        )}
      </View>

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard product={item} />
        )}
        numColumns={2}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 28,
    marginTop: 25,
  },

  logo: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: "#409e6a",
    justifyContent: "center",
    alignItems: "center",
  },

  logoText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "800",
    letterSpacing: -1,
  },

  headerText: {
    flex: 1,
    marginLeft: 12,
  },

  appName: {
    fontSize: 20,
    fontWeight: "700",
    color: "#409e6a",
  },


  titleSection: {
    marginBottom: 18,
  },

  heading: {
    fontSize: 30,
    fontWeight: "700",
    color: "#111827",
  },

  subtitle: {
    fontSize: 15,
    color: "#777",
    marginTop: 4,
  },

  searchContainer: {
    height: 52,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginBottom: 20,
  },

  search: {
    flex: 1,
    height: "100%",
    paddingHorizontal: 10,
    fontSize: 15,
    color: "#111827",
  },

  list: {
    paddingBottom: 25,
  },

  row: {
    justifyContent: "space-between",
  },
});