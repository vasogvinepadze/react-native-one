import React from "react";
import styled from "styled-components";
import { Dimensions, Platform, StatusBar } from "react-native";

const windowHeight = Dimensions.get("screen").height;
const windowWidth = Dimensions.get("screen").width;

const MainWrapper = styled.KeyboardAvoidingView``;
console.log(windowWidth);
console.log(windowHeight);

const ImageBackground = styled.ImageBackground`
  height: ${windowHeight}px;
  width: ${windowWidth}px;
`;

const statusBarHeight = StatusBar.currentHeight;

const Container = styled.SafeAreaView`
  flex: 1;
  display: flex;
  padding-top: ${Platform.OS === "ios" ? 0 : statusBarHeight}px;
  height: 100%;
  background-color: #ffffff;
`;

const Screen = ({ children }) => {
  return (
    <MainWrapper behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ImageBackground>
        <Container>{children}</Container>
      </ImageBackground>
    </MainWrapper>
  );
};

export default Screen;
