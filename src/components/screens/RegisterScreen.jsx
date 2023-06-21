import { View, Text, Button } from "react-native";
import React from "react";
import styled from "styled-components";
import Screen from "../atoms/Screen";
import * as ROUTES from "../../constants/routes";
const Container = styled(Screen)``;
const ScrollContainer = styled.ScrollView`
  padding: 10px 26px;
`;
const MainWrapper = styled.View``;

const Title = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 70%;
  color: #1f5460;
`;

const MiniTitle = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  color: #879ea4;
`;
const Register = styled.View`
  margin-top: 90px;
  gap: 10px;
  align-items: center;
  margin-bottom: 50px;
`;
const Email = styled.TextInput`
  width: 319px;
  height: 50px;
  border: 1px solid rgba(31, 84, 96, 0.2);
  border-radius: 4px;
  padding: 0 10px;
`;

const EmailAdd = styled.TextInput`
  width: 319px;
  height: 50px;
  border: 1px solid rgba(31, 84, 96, 0.2);
  border-radius: 4px;
  padding: 0 10px;
`;

const Pass = styled.TextInput`
  width: 319px;
  height: 50px;
  border: 1px solid rgba(31, 84, 96, 0.2);
  border-radius: 4px;
  padding: 0 10px;
`;
const ConfirmPass = styled.TextInput`
  width: 319px;
  height: 50px;
  border: 1px solid rgba(31, 84, 96, 0.2);
  border-radius: 4px;
  padding: 0 10px;
`;

const SignUp = styled.View`
  width: 319px;
  height: 50px;
  align-items: center;
  justify-content: center;
  margin: 15px 28px;
  background: #ffca42;
  border-radius: 100px;
`;
const SignTitle = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #10405a;
`;

const SignApple = styled.View`
  width: 319px;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin: 0 28px;
  background: #000000;
  border-radius: 100px;
`;
const AppleTitle = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;

  color: #ffffff;
`;

const SignGoogle = styled.View`
  width: 319px;
  height: 50px;
  align-items: center;
  justify-content: center;
  background: #f0f5f2;
  border-radius: 100px;
  margin: 15px 26px;
`;

const GoogleTitle = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #10405a;
`;

const Already = styled.View``;
const AlreadyTitle = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  padding: 50px 0;
  text-align: center;
  color: #1f5460;
`;

const RegisterScreen = ({ navigation }) => {
  return (
    <Container>
      <ScrollContainer>
        <MainWrapper>
          <Title>Create account</Title>
          <MiniTitle>Sign up to get started!</MiniTitle>
        </MainWrapper>
        <Register>
          <Email placeholder="Username" />
          <EmailAdd placeholder="Email Address" />
          <Pass placeholder="Password" />
          <ConfirmPass placeholder="Confirm Password" />
        </Register>
        <SignUp>
          <SignTitle
            onPress={() => navigation.navigate(ROUTES.DRAWER_NAVIGATOR)}
          >
            Sign Up
          </SignTitle>
        </SignUp>
        <SignApple>
          <AppleTitle>Sign up using Apple</AppleTitle>
        </SignApple>
        <SignGoogle>
          <GoogleTitle>Sign up using Google</GoogleTitle>
        </SignGoogle>
        <Already>
          <AlreadyTitle
            onPress={() => navigation.navigate(ROUTES.SIGN_IN_SCREEN)}
          >
            Already member? Log in
          </AlreadyTitle>
        </Already>
      </ScrollContainer>
    </Container>
  );
};

export default RegisterScreen;
