import MainNavigator from "./navigator/MainNavigator";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import { StatusBar } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return <MainNavigator />;
}
