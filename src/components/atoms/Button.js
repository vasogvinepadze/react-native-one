import React from "react";
import styled from "styled-components";

const Container = styled.Pressable`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Titles = styled.Text`
  color: ${({ light }) => (light ? "#55837D" : "black")};
`;

const Button = ({ title, onPress, light = false, ...otherProps }) => {
  return (
    <Container onPress={onPress} light={light} {...otherProps}>
      <Titles>{title}</Titles>
    </Container>
  );
};

export default Button;
