import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import HomeStack from "../navigation/HomeStack";
import Profile from "../screens/Profile";

const { Navigator, Screen } = createBottomTabNavigator();

export default function ManiTab() {
  return (
    <Navigator tabBarOptions={{ style: { backgroundColor: "#8236a0" } }}>
      <Screen
        name="HOME"
        component={HomeStack}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{ color: focused ? "black" : "white", fontWeight: "bold" }}
            >
              HOME
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Text style={{ fontWeight: "bold" }}>
              <AntDesign
                name="home"
                size={20}
                color={focused ? "black" : "white"}
              />
            </Text>
          ),
        }}
      />
      <Screen
        name="PROFILE"
        component={Profile}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{ color: focused ? "black" : "white", fontWeight: "bold" }}
            >
              PROFILE
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Text style={{ fontWeight: "bold" }}>
              <AntDesign
                name="user"
                size={20}
                color={focused ? "black" : "white"}
              />
            </Text>
          ),
        }}
      />
    </Navigator>
  );
}
