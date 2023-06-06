import React from "react";
import MainNavigator from "./navigator/MainNavigator";
import "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { StatusBar } from "react-native";

// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <MainNavigator />
    </PaperProvider>
  );
}
