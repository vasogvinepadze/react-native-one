import { View, Text, Image } from "react-native";
import React from "react";
import styled from "styled-components";

const Container = styled.Pressable`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 50px;
`;

const Wrapper = styled.View`
  padding-left: 5px;
`;

const Cont = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

const LeftContainer = styled.View`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const Title = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
`;

const Time = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #6b6b6b;
`;

const RightContainer = styled.View``;
const Scroll = styled.ScrollView``;

const ConvenienceCard = ({ onPress, imgUrl, title, pay, time, imgUrls }) => {
  return (
    <Container onPress={onPress}>
      <Wrapper>
        <Image source={imgUrl} />
      </Wrapper>
      <Scroll>
        <Cont>
          <RightContainer>
            <Title>{title}</Title>
            <Time>{time}</Time>
            <Text>{pay}</Text>
          </RightContainer>
          <LeftContainer></LeftContainer>
        </Cont>
      </Scroll>
    </Container>
  );
};

export default ConvenienceCard;
