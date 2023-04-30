import { View, Text, Image } from "react-native";
import React from "react";
import styled from "styled-components";

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 10px 15px;
`;

const RightContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

const LeftContainer = styled.View`
  width: 50%;
`;

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
  color: #000000;
`;
const Desc = styled.Text`
  width: 220px;
  height: 100px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #545454;
`;

const RestDetailsCard = ({ title, price, desc, imgUrl }) => {
  return (
    <Container>
      <RightContainer>
        {title && <Title>{title}</Title>}
        {price && <SubTitle>{price}</SubTitle>}
        {desc && <Desc>{desc}</Desc>}
      </RightContainer>
      <LeftContainer>
        <Image source={imgUrl} />
      </LeftContainer>
    </Container>
  );
};

export default RestDetailsCard;
