import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components";

const Container = styled.Pressable``;
const MainContainer = styled.View``;
const CategoryImg = styled.Image``;

const CategoryCard = ({ imgUrl, onPress }) => {
  return (
    <MainContainer>
      <Container onPress={onPress}>
        <CategoryImg source={imgUrl} />
      </Container>
    </MainContainer>
  );
};

export default CategoryCard;
