import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";

const Container = styled.View`
  padding: 14px 23px 14px 18px;
  background-color: #e9ffef;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.Text`
  margin-bottom: 8px;
`;
const SubTitle = styled.Text``;

const PromotionWidget = ({ ...otherProps }) => {
  return (
    <Container {...otherProps}>
      <View>
        <Title>Promotion applied</Title>
        <SubTitle>View basket for final. doscount</SubTitle>
      </View>
      <AntDesign name="exclamationcircle" size={24} color="black" />
    </Container>
  );
};

export default PromotionWidget;
