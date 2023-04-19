import { useState } from "react";
import styled from "styled-components";
import Button from "../atoms/Button";

const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Text = styled.Text``;

const UserName = styled.TextInput`
  background-color: #edf2f4;
  height: 50px;
  border-radius: 16px;
  width: 250px;
  background-color: #ffebeb;
  padding: 0 10px;
  margin-bottom: 10px;
  font-size: 17px;
`;

const Password = styled.TextInput`
  height: 50px;
  border-radius: 10px;
  background-color: #ffebeb;

  width: 250px;
  padding: 0 10px;
  font-size: 17px;
  margin-bottom: 10px;
`;

const ActionBtn = styled(Button)`
  height: 50px;
  width: 250px;
  background-color: #ffebeb;
  border-radius: 10px;
  margin-bottom: 8px;
`;

const BackBtn = styled(Button)`
  height: 50px;
  width: 250px;
  background-color: #ffebeb;
  border-radius: 10px;
  margin-bottom: 8px;
`;

const AuthForm = ({ title, navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validate = () => {
    if (!email.includes("@")) {
      setEmailError("არასწორი ელ. ფოსტა");
    } else if (password.length < 6) {
      setPasswordError("პაროლი ნაკლებია 6-ზე");
    } else if (email.length === 0) {
      setEmailError("ემაილი არ წერია");
    } else if (email.indexOf(" ") >= 0) {
      setEmailError("ელფოსტა არ შეიძლება შეიცავდეს სივრცეებს");
    } else if (password.indexOf(" ") >= 0) {
      setPasswordError("პაროლი არ შეიძლება შეიცავდეს სივრცეებს");
    } else {
      setEmailError("");
      setPasswordError("");
    }
  };
  return (
    <Container>
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
      <ActionBtn title="რეგისტრაცია" onPress={validate} />
      <BackBtn
        title="მთავარი მენიუ"
        onPress={() => navigation.navigate("Login")}
      />
      <Text>{emailError}</Text>
      <Text>{passwordError}</Text>
      <Text></Text>
    </Container>
  );
};

export default AuthForm;
