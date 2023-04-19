import styled from "styled-components";

import LoginScreenImage from "../images/LoginScreenImage";
import Button from "../atoms/Button";
import Screen from "../atoms/Screen";

const Container = styled(Screen)``;

const SignInEmail = styled(Button)`
  background-color: #c7dac5;
  margin-bottom: 38px;
  border-radius: 16px;
  width: 266px;
  padding: 16px 48px 16px 24px;
`;
const SignInGoogle = styled(Button)`
  margin-bottom: 53px;
  width: 169px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled(LoginScreenImage)`
  margin-bottom: 40px;
`;

const GetStarted = styled(Button)`
  padding: 16px 24px;
  gap: 8px;
  background: #54924f;
  width: 258px;
  border-radius: 16px;
  margin-bottom: 23px;
`;
const Skip = styled(Button)`
  width: 258px;
  background: #54924f;
  padding: 16px 92px;
  border-radius: 16px;
`;

const LoginScreen = ({ navigation }) => {
  return (
    <Container>
      <SignInEmail
        onPress={() => console.log("Email")}
        title="Sign in with email"
      />

      <SignInGoogle
        onPress={() => console.log("Google")}
        title="Sign in with google"
      />

      <Image />

      <GetStarted
        title="Get Started"
        onPress={() => navigation.navigate("Register")}
      />

      <Skip title="Skip" onPress={() => console.log("Skip")} />
    </Container>
  );
};

export default LoginScreen;
