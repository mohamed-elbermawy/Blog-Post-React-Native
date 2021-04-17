import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function PostDetails() {
  let { params } = useRoute();
  let [post, setPost] = useState([{}]);

  useEffect(() => {
    setPost([{ ...params }]);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      {post && post.length > 0 && (
        <FlatList
          style={{ width: "100%" }}
          data={post}
          renderItem={({ item }) => {
            return (
              <View>
                <Image
                  style={{ width: "100%", height: 200, marginBottom: "7%" }}
                  source={{
                    uri: "https://source.unsplash.com/random",
                  }}
                />
                <Text
                  style={{
                    marginHorizontal: "5%",
                    marginBottom: "10%",
                    fontWeight: "bold",
                    fontSize: 30,
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    marginHorizontal: "5%",
                    marginBottom: "5%",
                    fontSize: 25,
                  }}
                >
                  {item.body}
                </Text>
              </View>
            );
          }}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
}
