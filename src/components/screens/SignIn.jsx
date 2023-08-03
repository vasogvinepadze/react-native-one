import styled from "styled-components";
import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { signInWithEmailAndPassword } from "firebase/auth";

import * as ROUTES from "../../constants/routes";

import LoginScreenImage from "../images/LoginScreenImage";
import Button from "../atoms/Button";
import Screen from "../atoms/Screen";
import { authentication } from "../../../Firebaseconfig";

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Image = styled(LoginScreenImage)`
  margin-bottom: 40px;
`;

const SignInBtn = styled(Button)`
  padding: 16px 24px;
  gap: 8px;
  background: #54924f;
  width: 258px;
  border-radius: 16px;
  margin-top: 25px;
`;

const SignUpContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
`;

const SignUpButton = styled.Text`
  color: blue;
  margin-left: 10px;
`;

const UserName = styled.TextInput`
  height: 40px;
  border-radius: 10px;
  background-color: #edf2f4;
  width: 277px;
  padding: 0 10px;
  font-size: 17px;
  margin-bottom: 10px;
`;

const SignIn = ({ navigation }) => {
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = loginCredentials;
  const [isVisible, setIsVisible] = useState(true);

  const loginUser = () => {
    signInWithEmailAndPassword(authentication, email, password)
      .then(() => {
        Alert.alert("წარმატებით შეხვედით სისტემაში");
        navigation.navigate(ROUTES.DRAWER_NAVIGATOR);
      })
      .catch((err) => {
        Alert.alert("მომხმარებლის მაილი ან პაროლი არასწორია");
      });
  };
  return (
    <Container>
      <Image />

      <UserName
        placeholder="Email"
        onChangeText={(e) => {
          setLoginCredentials({ ...loginCredentials, email: e });
        }}
        value={email}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItem: "center",
        }}
      >
        <TextInput
          style={{
            height: 40,
            borderRadius: 10,
            backgroundColor: "#edf2f4",
            flexDirection: "row",
            width: 250,
            paddingHorizontal: 10,
            fontSize: 17,
            marginBottom: 10,
          }}
          placeholder="Password"
          secureTextEntry={isVisible}
          keyboardType="ascii-capable"
          onChangeText={(e) => {
            setLoginCredentials({ ...loginCredentials, password: e });
          }}
          value={password}
        />
        <Ionicons
          onPress={() => {
            setIsVisible(!isVisible);
          }}
          name={isVisible == true ? "eye-off-outline" : "eye-outline"}
          size={24}
          color="black"
        />
      </View>

      <SignInBtn title="Sign In" onPress={loginUser} />

      <SignUpContainer style={{ marginBottom: 20 }}>
        <Text>Forgot password?</Text>
        <Pressable
          onPress={() => navigation.navigate(ROUTES.FORGOT_PASSWORD_SCREEN)}
        >
          <SignUpButton>Reset</SignUpButton>
        </Pressable>
      </SignUpContainer>

      <SignUpContainer>
        <Text>Don't have an account ? </Text>
        <SignUpButton
          onPress={() => navigation.navigate(ROUTES.REGISTER_SCREEN)}
        >
          Sign Up
        </SignUpButton>
      </SignUpContainer>
    </Container>
  );
};

export default SignIn;
