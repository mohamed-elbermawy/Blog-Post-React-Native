import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MainTab from "./navigation/index";

export default function App() {
  return (
    <NavigationContainer>
      <MainTab />
    </NavigationContainer>
  );
}
