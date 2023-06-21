import { View, Text, ScrollView } from "react-native";
import React from "react";
import styled from "styled-components";
import Screen from "../atoms/Screen";
import ConvenienceCard from "../organisms/ConvenienceCard";

const Product = [
  {
    id: 0,
    imgUrl: require("../images/Convenience/Store.png"),
  },
  {
    id: 1,
    imgUrl: require("../images/Convenience/StoreCard.png"),
  },
  {
    id: 2,
    imgUrl: require("../images/Convenience/Store.png"),
  },
];

const Prod = [
  {
    id: 0,
    title: "Begs & Megs ",
    imgUrl: require("../images/Convenience/Rectangle.png"),
    time: "Opens at 8:00",
    pay: "Spend US$20, save US$5",
  },
  {
    id: 1,
    title: "Begs & Megs ",
    imgUrl: require("../images/Convenience/Rectangle198.png"),
    time: "Opens at 8:00",
    pay: "Spend US$20, save US$5",
  },
  {
    id: 2,
    title: "Begs & Megs ",
    imgUrl: require("../images/Convenience/Rectangle8.png"),
    time: "Opens at 8:00",
    pay: "Spend US$20, save US$5",
  },
  {
    id: 3,
    title: "Begs & Megs ",
    imgUrl: require("../images/Convenience/Rectangle.png"),
    time: "Opens at 8:00",
    pay: "Spend US$20, save US$5",
  },
];

const Container = styled(Screen)``;

const Main = styled.View`
  padding: 30px 25px;
  gap: 15px;
`;
const Title = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  color: #000000;
`;

const Para = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 44px;
  color: #000000;
`;

const Scroll = styled.ScrollView`
  padding: 0 25px;
`;

const Convenience = () => {
  return (
    <Container>
      <Main>
        <Title>Convenience</Title>
        <Para>Featured stores</Para>
      </Main>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          paddingHorizontal: 25,
          flexDirection: "row",
          display: "flex",
        }}
      >
        {Product.map((item) => {
          return <ConvenienceCard key={item.id} imgUrl={item.imgUrl} />;
        })}
      </ScrollView>
      <Scroll>
        {Prod.map((item) => {
          return (
            <ConvenienceCard
              time={item.time}
              key={item.id}
              title={item.title}
              imgUrl={item.imgUrl}
            />
          );
        })}
      </Scroll>
    </Container>
  );
};

export default Convenience;
