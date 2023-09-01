import React from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components";
import Button from "../atoms/Button";
import { Text } from "react-native";
import * as ROUTES from "../../constants/routes";

const MainContainer = styled.ScrollView`
  background-color: #ffffff;
`;

const Header = styled.View`
  padding: 20px;
  margin: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;

const Container = styled.View`
  padding: 20px;
  background-color: #eeeeee;
  border-bottom-width: 10px;
  border-bottom-color: #fffafa;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TextContainer = styled.View`
  margin-bottom: 10px;
`;
const SubTextContainer = styled.View`
  margin: 10px 0;
  flex-direction: row;
  justify-content: space-between;
`;

const BtnContainer = styled.View`
  align-items: center;
  margin-top: 20px;
`;

const Icon = styled.Image``;

const data = [
  {
    id: 0,
    title: "Cantina Crispy Chicken",
    subtitle: "Buy 1, get 1 free (add 2 to basket)",
  },
  {
    id: 1,
    title: "Spicy Cheesy Double",
    subtitle: "Buy 1, get 1 free (add 2 to basket)",
  },
  {
    id: 2,
    title: "Mango Freeze",
    subtitle: "Buy 1, get 1 free (add 2 to basket)",
  },
];

function Recommendations({ bottomSheetRef }) {
  const navigation = useNavigation();

  const handleGoCheckout = () => {
    navigation.navigate(ROUTES.TRACK_ORDER_SCREEN);
    bottomSheetRef.current.close();
  };

  const handleAddToCart = () => {
    navigation.navigate(ROUTES.ORDER_SCREEN);
    bottomSheetRef.current.close();
  };

  return (
    <MainContainer>
      <Header>
        <TextContainer>
          <Text size="large">Taco Bell (2255 Telegraph Avenue)</Text>
          <Text size="small" color="green">
            You‘re saving US$55
          </Text>
        </TextContainer>
        <Icon source={require("../images/addIcon.png")} />
      </Header>
      {data.map((item) => (
        <Container key={item.id}>
          <TextContainer>
            <Text>{item.title}</Text>
            <Text size="small" color="green">
              {item.subtitle}
            </Text>
          </TextContainer>
          <Icon source={require("../images/plusBtn.png")} />
        </Container>
      ))}
      <SubTextContainer>
        <Text>Subtotal</Text>
        <Text size="medium">US$68.20</Text>
      </SubTextContainer>
      <BtnContainer>
        <Button
          light={false}
          title="Go to Checkout"
          onPress={() => handleGoCheckout()}
        />
        <Button
          light={true}
          title="Add items"
          onPress={() => handleAddToCart()}
        />
      </BtnContainer>
    </MainContainer>
  );
}

export default Recommendations;
