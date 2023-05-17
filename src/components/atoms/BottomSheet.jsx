import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components";
import { Modalize } from "react-native-modalize";

const Container = styled(Modalize)``;
const ContainerView = styled.View``;
const ContainerTitle = styled.Text``;

const BottomSheet = ({ bottomSheetRef, children }) => {
  return (
    <Container ref={bottomSheetRef}>
      <ContainerView>
        <ContainerTitle>{children}</ContainerTitle>
      </ContainerView>
    </Container>
  );
};

export default BottomSheet;
