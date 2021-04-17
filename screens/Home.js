import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 200,
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("Posts")}
        style={{
          backgroundColor: "#b184da",
          width: "100%",
          padding: 20,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
          GET POSTS
        </Text>
      </TouchableOpacity>
    </View>
  );
}
