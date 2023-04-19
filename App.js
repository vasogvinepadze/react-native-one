import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthForm from "./src/components/molecules/AuthForm";
import LoginScreen from "./src/components/screens/LoginScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Sign in", headerShown: false }}
        />

        <Stack.Screen
          name="Register"
          component={AuthForm}
          options={{ title: "Register new account", headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
