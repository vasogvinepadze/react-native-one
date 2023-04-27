import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../src/components/screens/Home";
import Orders from "../src/components/screens/Orders";
import Shop from "../src/components/screens/Shop";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
import * as ROUTES from "../src/constants/routes";
import SettingsNavigator from "./SettingsNavigator";

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size = "20", focused }) => {
          let icon;
          if (route.name === ROUTES.HOME_SCREEN) {
            icon = focused ? "home" : "home-outline";
          } else if (route.name === ROUTES.ORDERS_SCREEN) {
            icon = focused ? "card-outline" : "card";
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
        fd
        options={{ title: "Home" }}
      />
      <Tab.Screen
        name={ROUTES.ORDERS_SCREEN}
        component={Orders}
        options={{ title: "Order" }}
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
