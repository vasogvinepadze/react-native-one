import { createDrawerNavigator } from "@react-navigation/drawer";
import * as ROUTES from "../src/constants/routes";
import Home from "../src/components/screens/Home";
import Browse from "../src/components/screens/Browse";
import Shop from "../src/components/screens/Shop";
import SettingsNavigator from "./SettingsNavigator";
import BottomTabNavigator from "./BottomTabNavigator";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name={ROUTES.BOTTOM_TAB_NAV}
        component={BottomTabNavigator}
        options={{ headerShown: true, title: "" }}
      />
      <Drawer.Screen
        name={ROUTES.HOME_SCREEN}
        component={Home}
        options={{ title: "Home" }}
      />
      <Drawer.Screen
        name={ROUTES.BROWSE_SCREEN}
        component={Browse}
        options={{ title: "Order" }}
      />
      <Drawer.Screen
        name={ROUTES.SHOP_SCREEN}
        component={Shop}
        options={{ title: "Shop" }}
      />
      <Drawer.Screen
        name={ROUTES.SETTINGS_NAVIGATOR}
        component={SettingsNavigator}
        options={{ title: "Setting" }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
