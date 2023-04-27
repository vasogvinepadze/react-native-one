import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
import * as ROUTES from "../src/constants/routes";
import Settings from "../src/components/screens/Settings";
import SettingDetails from "../src/components/screens/SettingDetails";

function SettingsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.SETTINGS_SCREEN}
        component={Settings}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.SETTINGS_DETAILS}
        component={SettingDetails}
        options={{ title: "Setting Details" }}
      />
    </Stack.Navigator>
  );
}

export default SettingsNavigator;
