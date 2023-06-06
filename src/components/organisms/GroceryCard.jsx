import { View, Text, Image } from "react-native";
import React from "react";
import styled from "styled-components";

const Container = styled.Pressable`
  width: 168px;
  height: 160px;
  ${({ color }) => (color ? `background-color: ${color}` : "")}
`;
const GroceryCard = ({ onPress, imgUrl, deliveryTime, color }) => {
  return (
    <Container onPress={onPress} color={color}>
      <Image source={imgUrl} />
      <View>
        <Text>In {deliveryTime} Minutes</Text>
      </View>
    </Container>
  );
};

export default GroceryCard;
