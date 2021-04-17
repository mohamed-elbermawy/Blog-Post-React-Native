import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function Posts() {
  let [posts, setPosts] = useState([{}]);
  const navigation = useNavigation();

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setPosts((posts = myJson));
        console.log(posts);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(posts);

  {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        {posts && posts.length > 0 && (
          <FlatList
            style={{ width: "90%", margin: "5%" }}
            data={posts}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("PostDetails", {
                      id: item.id,
                      title: item.title,
                      body: item.body,
                    })
                  }
                >
                  <Image
                    style={{ width: "100%", height: 180, borderRadius: 30 }}
                    source={{
                      uri: "https://source.unsplash.com/random",
                    }}
                  />
                  <Text
                    style={{
                      marginTop: "2%",
                      marginBottom: "10%",
                      fontWeight: "bold",
                      fontSize: 25,
                    }}
                    numberOfLines={2}
                    ellipsizeMode="middle"
                  >
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    );
  }
}
