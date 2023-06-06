import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import Home from "../src/components/screens/Home";
import Browse from "../src/components/screens/Browse";
import Shop from "../src/components/screens/Shop";
import Grocery from "../src/components/screens/Grocery";
import SettingsNavigator from "./SettingsNavigator";

import * as ROUTES from "../src/constants/routes";

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size = "20", focused }) => {
          let icon;
          if (route.name === ROUTES.HOME_SCREEN) {
            icon = focused ? "home" : "home-outline";
          } else if (route.name === ROUTES.BROWSE_SCREEN) {
            icon = focused ? "card-outline" : "card";
          } else if (route.name === ROUTES.GROCERY_SCREEN) {
            icon = focused ? "fast-food-outline" : "fast-food";
          } else if (route.name === ROUTES.SHOP_SCREEN) {
            icon = focused ? "fast-food-outline" : "fast-food";
          } else if (route.name === ROUTES.SETTINGS_NAVIGATOR) {
            icon = focused ? "cog-outline" : "cog";
          }
          return <Icon name={icon} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name={ROUTES.HOME_SCREEN}
        component={Home}
        options={{ title: "Home" }}
      />
      <Tab.Screen
        name={ROUTES.BROWSE_SCREEN}
        component={Browse}
        options={{ title: "Browse" }}
      />
      <Tab.Screen
        name={ROUTES.GROCERY_SCREEN}
        component={Grocery}
        options={{ title: "Grocery" }}
      />
      <Tab.Screen
        name={ROUTES.SHOP_SCREEN}
        component={Shop}
        options={{ title: "Shop" }}
      />
      <Tab.Screen
        name={ROUTES.SETTINGS_NAVIGATOR}
        component={SettingsNavigator}
        options={{ title: "Setting" }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
