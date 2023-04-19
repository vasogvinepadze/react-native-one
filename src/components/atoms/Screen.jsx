import React from "react";
import styled from "styled-components";
import { Dimensions, Platform } from "react-native";

const windowHeight = Dimensions.get("screen").height;
const windowWidth = Dimensions.get("screen").width;

const MainWrapper = styled.KeyboardAvoidingView``;
console.log(windowWidth);
console.log(windowHeight);

const ImageBackground = styled.ImageBackground`
  height: ${windowHeight}px;
  width: ${windowWidth}px;
`;

const Container = styled.SafeAreaView`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
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
