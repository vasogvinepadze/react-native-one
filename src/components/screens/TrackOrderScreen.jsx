import React, { useEffect } from "react";
import styled from "styled-components";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import * as ROUTES from "../../constants/routes";

const Container = styled.View`
  background-color: #00ccbb;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TrackOrderScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(ROUTES.BASKET_END);
    }, 4000);
  }, []);

  return (
    <Container>
      <Animatable.Image
        style={{ height: 300, width: 300 }}
        source={require("../images/order-loading.gif")}
        animation="slideInUp"
        iterationCount={1}
      />

      <Animatable.Text
        style={{
          color: "white",
          marginTop: 10,
          fontWeight: "bold",
          textAlign: "center",
        }}
        animation="slideInUp"
        iterationCount={1}
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>

      <Progress.Circle
        size={60}
        indeterminate={true}
        color="white"
        style={{ marginTop: 40 }}
      />
    </Container>
  );
};

export default TrackOrderScreen;
