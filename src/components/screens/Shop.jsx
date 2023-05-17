import { Image } from "react-native";
import React, { useState } from "react";
import styled from "styled-components";
import Screen from "../atoms/Screen";
import CtgrBtn from "../atoms/CtgrBtn";
import ShopCard from "../organisms/ShopCard";

const fakeData = [
  {
    id: 0,
    title: "Begs & Megs",
    subTitle: "1 item • US$43.00",
    desc: "Deliver to San Franciscao Bay Area",
    imageUrl: require("../images/shopingCart/Rectangle.png"),
  },
  {
    id: 1,
    title: "Taco Bell",
    subTitle: "1 item • US$43.00",
    desc: "Deliver to San Franciscao Bay Area",
    imageUrl: require("../images/shopingCart/Rectangle1.png"),
  },
  {
    id: 2,
    title: "Begs & Megs",
    subTitle: "1 item • US$43.00",
    desc: "Deliver to San Franciscao Bay Area",
    imageUrl: require("../images/shopingCart/Rectangle.png"),
  },
  {
    id: 3,
    title: "Begs & Megs",
    subTitle: "1 item • US$43.00",
    desc: "Deliver to San Franciscao Bay Area",
    imageUrl: require("../images/shopingCart/Rectangle1.png"),
  },
];

const orderIcon = require("../images/shopingCart/Order.png");
const shopCardTest = require("../images/shopingCart/Rectangle.png");
const shopcarTestTwo = require("../images/shopingCart/Rectangle1.png");

const Container = styled(Screen)``;

const InnerContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
`;
const MainTitle = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: #000000;
`;
const Title = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding-top: 12px;
  text-align: center;
  color: #545454;
`;

const Cart = styled.Text`
  position: absolute;
  top: 40px;
  left: 15px;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  color: #000000;
`;

const StartBtn = styled(CtgrBtn)`
  border-radius: 99px;
  width: 132px;
  height: 40px;
  margin-top: 38px;
`;

const OrderBtn = styled(CtgrBtn)`
  position: absolute;
  top: 9px;
  right: 33px;
  border-radius: 99px;
  width: 107px;
  display: flex;
  height: 40px;
`;

const DataCont = styled.View`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 80%;
  padding: 11px 18px;
  gap: 10px;
`;

const Shop = () => {
  const [data, setData] = useState(fakeData);
  return (
    <Container>
      <Cart>Cart</Cart>
      <OrderBtn title="Orders" light iconLeft={orderIcon} />
      {!data ? (
        <InnerContainer>
          <Image source={require("../images/shopingCart/Group.png")} />
          <MainTitle>Add items to start a basket</MainTitle>
          <Title>
            Once you add items from a restuarant or store, your basket will
            appear here.
          </Title>
          <StartBtn
            onPress={() => console.log("Hello")}
            title="Start Shopping"
          />
        </InnerContainer>
      ) : (
        <DataCont>
          {data.map((item) => {
            return (
              <ShopCard
                title={item.title}
                subTitle={item.subTitle}
                desc={item.desc}
                imageUrl={item.imageUrl}
                key={item.id}
                onPress={() => console.log("Hey")}
              />
            );
          })}
        </DataCont>
      )}
    </Container>
  );
};

export default Shop;
