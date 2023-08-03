import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import styled from "styled-components";
import Screen from "../atoms/Screen";
import * as ROUTES from "../../constants/routes";
import { Ionicons } from "@expo/vector-icons";
import { authentication, dataBase } from "../../../Firebaseconfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import uuid from "react-native-uuid";

const Container = styled(Screen)``;

const RegisterScreen = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(true);

  const [userCrendetials, setUserCrendetials] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { email, password, name } = userCrendetials;

  const uid = uuid.v4();
  const userAccount = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then(() => {
        navigation.navigate(ROUTES.SIGN_IN_SCREEN);
        Alert.alert("თქვენ წარმატებით დარეგისტრირდით");
        setDoc(doc(dataBase, "users", uid), {
          username: name,
          email: email,
          id: authentication.currentUser.uid,
        });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          Alert.alert("მაილი უკვე დარეგისტრირებულია");
        }

        if (error.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
        }

        console.error(error);
      });
  };

  return (
    <Container>
      <View style={{ paddingHorizontal: 20, marginTop: 50 }}>
        <Text style={{ fontSize: 24, fontWeight: 600 }}>Create account</Text>
        <Text style={{ opacity: 0.5, marginTop: 10, fontWeight: 300 }}>
          Sign up to get started!
        </Text>
        <Text style={{ marginTop: 40 }}>Username</Text>
        <TextInput
          maxLength={12}
          value={name}
          onChangeText={(e) => {
            setUserCrendetials({ ...userCrendetials, name: e });
          }}
          keyboardType="name-phone-pad"
          style={{
            borderColor: "#e3e3e3",
            borderBottomWidth: 2,

            marginTop: 10,
            fontSize: 20,
          }}
        />

        <Text style={{ marginTop: 40 }}>Email</Text>
        <TextInput
          value={email}
          onChangeText={(e) => {
            setUserCrendetials({ ...userCrendetials, email: e });
          }}
          keyboardType="email-address"
          style={{
            borderColor: "#e3e3e3",
            borderBottomWidth: 2,
            marginTop: 10,
            fontSize: 20,
          }}
        />
        <Text style={{ marginTop: 40 }}>Password</Text>
        <View
          style={{
            borderColor: "e3e3e3",

            flexDirection: "row",
            justifyContent: "space-between",
            alignItem: "center",
          }}
        >
          <TextInput
            value={password}
            onChangeText={(e) => {
              setUserCrendetials({ ...userCrendetials, password: e });
            }}
            secureTextEntry={isVisible}
            maxLength={12}
            keyboardType="ascii-capable"
            style={{
              borderColor: "#e3e3e3",
              borderBottomWidth: 2,

              marginTop: 10,
              fontSize: 20,
              borderBottomWidth: 2,
              flex: 1,
            }}
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
      </View>
      <TouchableOpacity
        onPress={userAccount}
        style={{
          backgroundColor: "green",
          marginTop: 30,
          flex: 0.1,

          borderRadius: 40,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 20, fontWeight: 400 }}>
          Sign Up
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          alignItem: "center",
          marginTop: 20,
          paddingHorizontal: 20,
          gap: 10,
        }}
      >
        <Text
          style={{
            fontSize: 15,
            fontWeight: 600,
          }}
        >
          Already member?
        </Text>
        <Text
          onPress={() => {
            navigation.navigate(ROUTES.SIGN_IN_SCREEN);
          }}
          style={{ fontWeight: 400, color: "blue" }}
        >
          Log In
        </Text>
      </View>
    </Container>
  );
};

export default RegisterScreen;
