import React from "react";
import styled from "styled-components";
import { Modalize } from "react-native-modalize";

const Container = styled(Modalize)``;
const ContainerView = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ContainerTitle = styled.Text``;

const BottomSheet = ({ bottomSheetRef, children }) => {
  return (
    <Container ref={bottomSheetRef} modalHeight={555}>
      <ContainerView>
        <ContainerTitle>{children}</ContainerTitle>
      </ContainerView>
    </Container>
  );
};

export default BottomSheet;
