import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components";
import Screen from "../atoms/Screen";

const ContainerScroll = styled.ScrollView`
  background-color: #ffffff;
  padding: 0 15px;
`;
const Container = styled(Screen)``;

const MainTitle = styled.View``;
const Title = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  color: #000000;
`;

const TypeContainer = styled.View`
  width: 342px;
  height: 52px;
  background: #eeeeee;
  border-radius: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 10px;
`;

const Delivery = styled.View`
  background: #ffffff;
  border-radius: 40px;
  width: 140px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;
const DeliveryTitle = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;

  color: #000000;
`;

const PickUp = styled.View``;
const PickUpTitle = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  text-align: center;

  color: #000000;
`;
const DeliveryDetails = (onPress) => {
  return (
    <ContainerScroll>
      <Container onPress={onPress}>
        <MainTitle>
          <Title>Delivery Details</Title>
        </MainTitle>
        <TypeContainer>
          <Delivery>
            <DeliveryTitle>Delivery</DeliveryTitle>
          </Delivery>
          <PickUp>
            <PickUpTitle>PickUp</PickUpTitle>
          </PickUp>
        </TypeContainer>
      </Container>
    </ContainerScroll>
  );
};

export default DeliveryDetails;
