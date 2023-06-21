import { View, Text, Button } from "react-native";
import React, { useState, useRef } from "react";
import { Checkbox } from "react-native-paper";
import { Portal } from "react-native-portalize";

import * as ROUTES from "../../constants/routes";

import styled from "styled-components";
import Screen from "../atoms/Screen";
import PromotionWidget from "../molecules/PromotionWidget";
import RadioLabel from "../molecules/RadioLabel";
import BottomSheet from "../atoms/BottomSheet";
import CtgrBtn from "../atoms/CtgrBtn";

const souces = [
  {
    id: 0,
    value: 1,
    label: "Mariana Sauce",
    isChecked: false,
  },
  {
    id: 1,
    value: 2,
    label: "Garlicy Sauce",
    isChecked: false,
  },
  {
    id: 2,
    value: 3,
    label: "BBQ Sauce",
    isChecked: false,
  },
  {
    id: 3,
    value: 4,
    label: "Buffalo Sauce",
    isChecked: false,
  },
];
const sizes = [
  {
    id: 0,
    isChecked: false,
    label: "Small",
  },
  {
    id: 1,
    price: 4,
    isChecked: false,
    label: "Medium",
  },
  {
    id: 2,
    price: 10,
    isChecked: false,
    label: "Large",
  },
  {
    id: 3,
    isChecked: false,
    price: 15,
    label: "Exta Large",
  },
  {
    id: 4,
    isChecked: false,
    price: 18,
    label: "Super",
  },
];

const crust = [
  {
    id: 0,
    value: 1,
    label: "Regular Crust",
  },
  {
    id: 1,
    value: 2,
    price: 4,
    label: "Corn Skinny Crust",
  },
  {
    id: 3,
    value: 3,
    price: 10,
    label: "Thick Pan Crust",
  },
];

const choose = [
  {
    id: 0,
    value: 1,
    price: 0.5,
    label: "1 Side of Ranch Dressing",
  },
  {
    id: 1,
    value: 2,
    price: 1,
    label: "2 Side of Ranch Dressing",
  },
  {
    id: 2,
    value: 3,
    price: 0.69,
    label: "Side of Marinara Sauce",
  },
];

const frequently = [
  {
    id: 0,
    value: 1,
    price: 1,
    label: "Soda",
  },
  {
    id: 1,
    value: 2,
    price: 1,
    label: "Cheeze Pizza",
  },
  {
    id: 2,
    value: 3,
    price: 0.69,
    label: "Amigos Hawaiana Pizza",
  },
];

const Container = styled(Screen)``;

const Scroll = styled.ScrollView`
  background-color: #ffffff;
`;
const RestaurantTitle = styled.Text`
  /* font-size: 24; */
`;

const ItemPrice = styled.Text`
  /* font-size: 22; */
  margin: 8px 0;
`;

const ItemDesc = styled.Text`
  color: #545454;
`;

const Promotion = styled(PromotionWidget)`
  margin-top: 35px;
`;

const SouceTitle = styled.View`
  padding: 15px 8px;
`;
const SouceText = styled.Text`
  font-size: 16px;
`;

const SourceContainer = styled.View`
  padding-right: 10px;
`;

const SizeTitleWrapper = styled.View`
  padding-right: 2px;
`;

const ChooseText = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #545454;
`;
const CtgrButton = styled.View`
  width: 343px;
  height: 54px;
  background: #000000;
  border: 1px solid #000000;
  align-items: center;
  justify-content: center;
  left: 8%;
`;
const CtgrButtonTitle = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
`;

const CtgrBtnTitle = styled.View``;
const CtgrBtnMainTitle = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  color: #000000;
`;
const CtgrMiniText = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #05a357;
`;
const OrderCard = ({ route, onPress, navigation }) => {
  const { RestaurnatName, price, desc } = route.params;
  const [count, setCount] = useState(parseInt(price));
  const [sizeArr, setSizeArr] = useState(sizes);

  const handlePress = (id, amount) => {
    let num = parseInt(price);
    setCount(num + (amount ? amount : 0));

    sizeArr.forEach((item) => {
      if (item.id !== id) {
        item.isChecked = false;
      } else {
        item.isChecked = true;
      }
    });
  };
  const categorySheetRef = useRef();

  return (
    <Scroll contentContainerStyle={{ paddingBottom: 350 }}>
      <Container>
        <RestaurantTitle>{RestaurnatName}</RestaurantTitle>
        <ItemPrice>US ${price}</ItemPrice>
        <ItemDesc>{desc}</ItemDesc>
        <Promotion />
        <SourceContainer>
          <SouceTitle>
            <SouceText>Choose Your Souce</SouceText>
          </SouceTitle>
          {souces.map((item) => {
            return (
              <RadioLabel
                label={item.label}
                key={item.id}
                checked={item.isChecked}
                onPress={() => handlePress(item.id)}
              />
            );
          })}
        </SourceContainer>
        <SizeTitleWrapper>
          <SouceTitle>
            <SouceText>Choose Your Size</SouceText>
            {sizeArr.map((item) => {
              return (
                <RadioLabel
                  label={item.label}
                  key={item.id}
                  price={item.price}
                  onPress={() => handlePress(item.id, item.price)}
                  checked={item.isChecked}
                />
              );
            })}
          </SouceTitle>
          <SouceTitle>
            <SouceText>Choose Your crust</SouceText>
            {crust.map((item) => {
              return (
                <RadioLabel
                  label={item.label}
                  key={item.id}
                  price={item.price}
                  checked={item.isChecked}
                />
              );
            })}
          </SouceTitle>
          <SouceTitle>
            <SouceText>Choose your add-on</SouceText>
            <ChooseText>Choose up to 3</ChooseText>
            {choose.map((item) => {
              return (
                <Checkbox label={item.label} key={item.id} price={item.price} />
              );
            })}
          </SouceTitle>
          <SouceTitle>
            <SouceText>Frequently brought together</SouceText>
            {frequently.map((item) => {
              return (
                <Checkbox label={item.label} key={item.id} price={item.price} />
              );
            })}
          </SouceTitle>
        </SizeTitleWrapper>

        <CtgrButton>
          <CtgrButtonTitle onPress={() => categorySheetRef.current.open()}>
            {count}
          </CtgrButtonTitle>
        </CtgrButton>

        <Portal>
          <BottomSheet bottomSheetRef={categorySheetRef} modalHeight={555}>
            <Button
              title="Close"
              onPress={() => categorySheetRef.current.close()}
            />
            <CtgrBtnTitle>
              <CtgrBtnMainTitle>
                Taco Bell (2255 Telegraph Avenue)
              </CtgrBtnMainTitle>
              <CtgrMiniText>You`re saving US$25</CtgrMiniText>
            </CtgrBtnTitle>
            <CtgrBtn
              title="Go to Checkout"
              onPress={() => navigation.navigate(ROUTES.DELIVERY_DETAILS)}
            />
          </BottomSheet>
        </Portal>
      </Container>
    </Scroll>
  );
};

export default OrderCard;
