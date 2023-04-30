import React from "react";
import styled from "styled-components";

const Container = styled.Pressable`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ light }) => (light ? `background - color : #000000` : "")};
`;

const Title = styled.Text`
  color: ${({ light }) => (light ? "#FFFFFF" : "#000000")};
  font-size: 16px;
  background: #54924f;
  border-radius: 50px;
  width: 150px;
  text-align: center;
  height: 25px;
`;

const CtgrBtn = ({ title, onPress, light = false, ...otherProps }) => {
  return (
    <Container onPress={onPress} light={light} {...otherProps}>
      <Title>{title}</Title>
    </Container>
  );
};

export default CtgrBtn;
