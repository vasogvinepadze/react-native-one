import { View, Text } from "react-native";
import React, { useState } from "react";
import { RadioButton, Checkbox } from "react-native-paper";
import styled from "styled-components";

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const LeftContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const PriceWrapper = styled.View``;
const Price = styled.Text``;
const BottomContainer = styled.View``;

const RadioLabel = ({ label, price, checked, onPress }) => {
  return (
    <Container>
      <LeftContainer>
        <RadioButton.Android
          value={checked}
          status={checked === true ? "checked" : "unchecked"}
          onPress={onPress}
        />

        <Text>{label}</Text>
      </LeftContainer>
      {price && (
        <PriceWrapper>
          <Price>US ${price}</Price>
        </PriceWrapper>
      )}
    </Container>
  );
};

export default RadioLabel;
