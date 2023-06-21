import { View, Text, ScrollView, TextInput } from "react-native";
import React from "react";
import styled from "styled-components";
import Screen from "../atoms/Screen";
import GroceryCard from "../organisms/GroceryCard";

const groceryShop = [
  {
    id: 0,
    imgUrl: require("../images/GroceryImage/Store.png"),
    color: "#F60000",
  },
  {
    id: 1,
    imgUrl: require("../images/GroceryImage/Store-1.png"),
    color: "#F60000",
  },
  {
    id: 2,
    imgUrl: require("../images/GroceryImage/Store-2.png"),
    color: "#F60000",
  },
  {
    id: 3,
    imgUrl: require("../images/GroceryImage/Store-3.png"),
    color: "#F60000",
  },
  {
    id: 4,
    imgUrl: require("../images/GroceryImage/Store-4.png"),
    color: "#F60000",
  },
  {
    id: 5,
    imgUrl: require("../images/GroceryImage/Store-1.png"),
    color: "#F60000",
  },
];

const Container = styled(Screen)``;

const Main = styled.View`
  display: flex;
  width: 500px;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 40px;
  padding: 50px 30px;
`;

const SearchBar = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 328px;
  height: 44px;
  margin: 20px auto;
  padding: 0 10px;
  background: #eeeeee;
`;
const Grocery = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 0 }}
    >
      <Container>
        <SearchBar>
          <TextInput placeholder="Search stores and produ..." />
        </SearchBar>
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
