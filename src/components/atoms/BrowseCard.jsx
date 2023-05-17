import React from "react";
import styled from "styled-components";

const Container = styled.Pressable``;

const CardImage = styled.Image``;

const Title = styled.Text``;

const BrowseCard = ({ title, imgUrl, onPress }) => {
  return (
    <Container onPress={onPress}>
      <CardImage source={imgUrl} />
      <Title>{title}</Title>
    </Container>
  );
};

export default BrowseCard;
