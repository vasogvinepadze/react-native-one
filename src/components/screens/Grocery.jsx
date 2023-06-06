import { View, Text, ScrollView } from "react-native";
import React from "react";
import styled from "styled-components";
import Screen from "../atoms/Screen";
import GroceryCard from "../organisms/GroceryCard";

const groceryShop = [
  {
    id: 0,
    imgUrl: require("../images/GroceryImage/Store.png"),
    color: "#F60000",
    deliveryTime: "60",
  },
  {
    id: 1,
    imgUrl: require("../images/GroceryImage/Store-1.png"),
    color: "#F60000",
    deliveryTime: "60",
  },
  {
    id: 2,
    imgUrl: require("../images/GroceryImage/Store-2.png"),
    color: "#F60000",
    deliveryTime: "60",
  },
  {
    id: 3,
    imgUrl: require("../images/GroceryImage/Store-3.png"),
    color: "#F60000",
    deliveryTime: "60",
  },
  {
    id: 4,
    imgUrl: require("../images/GroceryImage/Store-4.png"),
    color: "#F60000",
    deliveryTime: "60",
  },
  {
    id: 5,
    imgUrl: require("../images/GroceryImage/Store-1.png"),
    color: "#F60000",
    deliveryTime: "30",
  },
];

const Container = styled(Screen)``;

const Main = styled.View`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 10px;
  padding: 0 20px;
`;
const Grocery = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 250 }}
    >
      <Container>
        <Main>
          {groceryShop.map((item) => {
            return (
              <GroceryCard
                color={item.color}
                imgUrl={item.imgUrl}
                deliveryTime={item.deliveryTime}
                key={item.id}
              />
            );
          })}
        </Main>
      </Container>
    </ScrollView>
  );
};

export default Grocery;
