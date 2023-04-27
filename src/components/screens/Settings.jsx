import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components";
import Button from "../atoms/Button";
import * as ROUTES from "../../constants/routes";

const Btn = styled(Button)``;

const Settings = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Settings Screen</Text>
      <Btn
        title="Go to details"
        onPress={() => navigation.navigate(ROUTES.SETTINGS_DETAILS)}
      />
    </View>
  );
};

export default Settings;
