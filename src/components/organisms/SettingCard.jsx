import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components";
import { ScrollView } from "react-native";

const Container = styled.Pressable``;
const ImgUrls = styled.Image``;
const Main = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 11px;
  height: 50px;
  padding: 17px 10px;
  gap: 28px;
  align-items: center;
  background-color: #ffffff;
`;
const Title = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
`;
const SettingCard = ({ title, imgUrl, onPress }) => {
  return (
    <Container onPress={onPress}>
      <Main>
        <ImgUrls source={imgUrl} />
        <Title>{title}</Title>
      </Main>
    </Container>
  );
};

export default SettingCard;
