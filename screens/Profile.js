import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

export default function Profile() {
  const info = [
    {
      name: "Mohamed Ashraf Mohamed",
      track: "Open Source Application El Mansoura",
      intake: "Intake 41",
      email: "mohamed77bermawy@gmail.com",
      linkedin:
        "https://www.linkedin.com/in/mohamed-elbermawy-b99954b8/?trk=nav_responsive_tab_profile_pic",
      github: "https://github.com/mohamed-elbermawy",
      phone: "01124031914",
    },
  ];
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <FlatList
        data={info}
        renderItem={({ item }) => {
          return (
            <View>
              <Image
                style={{
                  width: "50%",
                  height: 150,
                  marginVertical: "7%",
                  marginHorizontal: "25%",
                  borderRadius: "50%",
                }}
                source={require("../images/me.jpg")}
              />
              <Text style={styles.items}>{item.name}</Text>
              <Text style={styles.items}>Track: {item.track}</Text>
              <Text style={styles.items}>Intack: {item.intake}</Text>
              <Text style={styles.items}>Email: {item.email}</Text>
              <Text style={styles.items}>LinkedIn: {item.linkedin}</Text>
              <Text style={styles.items}>GitHub: {item.github}</Text>
              <Text style={styles.items}>Phone: {item.phone}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  items: {
    fontSize: 25,
    fontWeight: "bold",
    marginHorizontal: "5%",
    marginBottom: "5%",
  },
});
