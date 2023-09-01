import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { Host } from "react-native-portalize";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import * as ROUTES from "../src/constants/routes";
// import BottomTabNavigator from "./BottomTabNavigator";
import Button from "../src/components/atoms/Button";
import SignIn from "../src/components/screens/SignIn";
import ForgotPassword from "../src/components/screens/ForgotPassword";
import DrawerNavigator from "./DrawerNavigator";
import RestaurantDetails from "../src/components/screens/RestaurantDetails";
import Deals from "../src/components/screens/Deals";

import OrderCard from "../src/components/screens/OrderCard";
import DeliveryDetails from "../src/components/screens/DeliveryDetails";
import Grocery from "../src/components/screens/Grocery";
import RegisterScreen from "../src/components/screens/RegisterScreen";
import Convenience from "../src/components/screens/Convenience";
import TrackOrderScreen from "../src/components/screens/TrackOrderScreen";
import BasketEnd from "../src/components/screens/BasketEnd";

const Stack = createNativeStackNavigator();

function SignUp({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Go To Back" light onPress={() => navigation.goBack()} />
      <Button
        title="Finish shop"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
}

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Host>
        <Stack.Navigator>
          <Stack.Screen
            name={ROUTES.SIGN_IN_SCREEN}
            component={SignIn}
            options={{ title: "Sign in", headerShown: false }}
          />
          <Stack.Screen
            name={ROUTES.FORGOT_PASSWORD_SCREEN}
            component={ForgotPassword}
            options={{ title: "Forgot Password", headerShown: true }}
          />
          <Stack.Screen
            name={ROUTES.SIGN_UP_SCREEN}
            component={SignUp}
            options={{ title: "Sign Up", headerShown: true }}
          />
          <Stack.Screen
            name={ROUTES.REGISTER_SCREEN}
            component={RegisterScreen}
            options={{ title: "Sign Up", headerShown: true }}
          />
          <Stack.Screen
            name={ROUTES.DRAWER_NAVIGATOR}
            component={DrawerNavigator}
            options={{ headerShown: false, title: "" }}
          />
          <Stack.Screen
            name={ROUTES.REST_DETAILS}
            component={RestaurantDetails}
            options={{ headerShown: false, title: "" }}
          />
          <Stack.Screen
            name="TrackOrderScreen"
            component={TrackOrderScreen}
            options={{ headerShown: false, title: "" }}
          />
          <Stack.Screen
            name={ROUTES.DEALS_SCREEN}
            component={Deals}
            options={{ headerShown: false, title: "" }}
          />
          <Stack.Screen
            name={ROUTES.BASKET_END}
            component={BasketEnd}
            options={({ navigation }) => ({
              title: "",
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate("DrawerNavigator")}
                >
                  <Ionicons name="close" size={28} color="black" />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name={ROUTES.ORDER_SCREEN}
            component={OrderCard}
            options={{ headerShown: true, title: "Order Details" }}
          />
          <Stack.Screen
            name={ROUTES.DELIVERY_DETAILS}
            component={DeliveryDetails}
            options={{ title: "Delivery Details", headerShown: true }}
          />
          <Stack.Screen
            name={ROUTES.GROCERY_SCREEN}
            component={Grocery}
            options={{ title: "Delivery Details", headerShown: true }}
          />
          <Stack.Screen
            name={ROUTES.CONVENIENCE_SCREEN}
            component={Convenience}
            options={{ title: "", headerShown: true }}
          />
        </Stack.Navigator>
      </Host>
    </NavigationContainer>
  );
};

export default MainNavigator;
