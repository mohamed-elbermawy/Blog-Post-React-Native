import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Profile from "../screens/Profile";

const { Navigator, Screen } = createStackNavigator();

export default function ProfileStack() {
  return (
    <Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#b184da" },
        headerTitle: () => (
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 35,
                marginRight: 5,
              }}
            >
              My PROFILE
            </Text>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              <AntDesign name="user" size={35} />
            </Text>
          </View>
        ),
      }}
    >
      <Screen
        name="PROFILE"
        component={Profile}
        options={{
          headerLeft: () => null,
        }}
      />
    </Navigator>
  );
}
