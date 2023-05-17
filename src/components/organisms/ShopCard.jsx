import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components";

const Container = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 11px;
  width: 100%;
`;

const CardImage = styled.Image`
  margin-right: 12px;
`;

const InfoContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

const Icon = styled.Image``;

const Title = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
`;

const SubTitle = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #6b6b6b;
`;

const ShopCard = ({ imageUrl, title, desc, subTitle, onPress }) => {
  return (
    <Container onPress={onPress}>
      <InfoContainer>
        <CardImage source={imageUrl} />
        <View>
          <Title>{title}</Title>
          <SubTitle>{subTitle}</SubTitle>
          <SubTitle>{desc}</SubTitle>
        </View>
      </InfoContainer>
      <Icon source={require("../images/shopingCart/Vector.png")} />
    </Container>
  );
};

export default ShopCard;
