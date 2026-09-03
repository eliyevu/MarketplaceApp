import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>E</Text>
      </View>

      <Text style={styles.name}>Elikplim Yevu</Text>

      <Text style={styles.email}>
        elikplim@example.com
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
    paddingTop: 80,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#409e6a",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  avatarText: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "700",
  },

  name: {
    fontSize: 24,
    fontWeight: "700",
  },

  email: {
    color: "#777",
    marginTop: 6,
  },
});