import { View, Text, ScrollView } from "react-native";
import styled from "styled-components";
import React from "react";
import MainCard from "../organisms/MainCard";

const listToRender = [
  {
    id: 0,
    imgUrl: require("../images/HomeScreenImg/MainImage.png"),
    title: "Adenine Kitchen",
    price: "0.29",
    time: "15-25",
    rating: "4.4",
    promotion: true,
    promQuant: 5,
    promPrice: 8,
  },
  {
    id: 1,
    imgUrl: require("../images/HomeScreenImg/Picture2.png"),
    title: "Cardinal Chips",
    price: "1.29",
    time: "15-30",
    rating: "4.8",
  },
  {
    id: 2,
    imgUrl: require("../images/HomeScreenImg/Picture3.png"),
    title: "Ice Cream Bar",
    price: "2.35",
    time: "10-25",
    rating: "5.0",
  },
  {
    id: 3,
    imgUrl: require("../images/HomeScreenImg/picture4.png"),
    title: "Round eatery",
    price: "0.29",
    time: "10-25",
    rating: "4.4",
  },
];

const Container = styled.ScrollView``;

const Home = () => {
  return (
    <Container>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F6F6F6",
        }}
      >
        {listToRender.map((item) => {
          return (
            <MainCard
              key={item.id}
              imgUrl={item.imgUrl}
              title={item.title}
              price={item.price}
              time={item.time}
              rating={item.rating}
              promotion={item.promotion}
              promQuant={item.promQuant}
              promPrice={item.promPrice}
            />
          );
        })}
      </View>
    </Container>
  );
};

export default Home;
