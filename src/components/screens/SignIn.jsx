import styled from "styled-components";
import { useState } from "react";
import { Pressable, Text } from "react-native";

import * as ROUTES from "../../constants/routes";

import LoginScreenImage from "../images/LoginScreenImage";
import Button from "../atoms/Button";
import Screen from "../atoms/Screen";

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
  width: 250px;
  padding: 0 10px;
  font-size: 17px;
  margin-bottom: 10px;
`;

const Password = styled.TextInput`
  height: 40px;
  border-radius: 10px;
  background-color: #edf2f4;

  width: 250px;
  padding: 0 10px;
  font-size: 17px;
  margin-bottom: 10px;
`;

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Container>
      <Image />

      <UserName
        placeholder="Email"
        onChange={(e) => setEmail(e.nativeEvent.text)}
        value={email}
      />
      <Password
        placeholder="Password"
        onChange={(e) => setPassword(e.nativeEvent.text)}
        value={password}
      />

      <SignInBtn
        title="Sign In"
        onPress={() => navigation.navigate(ROUTES.DRAWER_NAVIGATOR)}
      />

      <SignUpContainer style={{ marginBottom: 20 }}>
        <Text>Forgot password?</Text>
        <Pressable
          onPress={() => navigation.navigate(ROUTES.FORGOT_PASSWORD_SCREEN)}
        >
          <SignUpButton>Reset</SignUpButton>
        </Pressable>
      </SignUpContainer>

      <SignUpContainer>
        <Text>Don't have an account?</Text>
        <Pressable>
          <SignUpButton>Sign Up</SignUpButton>
        </Pressable>
      </SignUpContainer>
    </Container>
  );
};

export default SignIn;
