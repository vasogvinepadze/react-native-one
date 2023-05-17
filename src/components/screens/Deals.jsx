import { View, Text, Pressable, FlatList } from "react-native";
import React, { useState } from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";

import MainCard from "../organisms/MainCard";

const Container = styled.Pressable`
  padding: 80px 30px;
  background-color: #ffffff;
`;
const HeaderWrapper = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50%;
`;
const LabelContainer = styled.Pressable`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  margin-bottom: 12px;
`;

const IconText = styled.Text`
  margin-left: 5px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #000000;
  height: 100%;
  text-align: center;
`;
const Separator = styled.View`
  height: 1px;
  border: 2px solid black;
  width: 100%;
  position: absolute;
  bottom: 0;
`;
const Cont = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`;
const Deals = ({ navigation, route }) => {
  // console.log(route.params.page);
  const [type, setTypes] = useState(route.params.page === 1 ? 0 : 1);

  const HeaderContainer = () => {
    return (
      <HeaderWrapper>
        <Cont>
          <LabelContainer
            onPress={() => setTypes(0)}
            style={{ border: type === 0 ? "1px solid black" : "" }}
          >
            <Ionicons name="pricetag" size={25} />
            <IconText>Offers</IconText>
          </LabelContainer>
          {type === 0 && <Separator />}
        </Cont>
        <Cont>
          <LabelContainer
            onPress={() => setTypes(1)}
            style={{ border: type === 1 ? "1px solid black" : "" }}
          >
            <Ionicons name="star" size={25} />
            <IconText>Rewards</IconText>
          </LabelContainer>
          {type === 1 && <Separator />}
        </Cont>
      </HeaderWrapper>
    );
  };

  const DeliveryList = [
    {
      id: 0,
      imgUrl: require("../images/HomeScreenImg/Picture2.png"),
      title: "BBN inn",
      price: "3",
      deliveryTime: "10-25",
      rating: 4.9,
      promQuantity: 5,
      promPrice: 8,
    },
    {
      id: 1,
      imgUrl: require("../images/HomeScreenImg/Picture2.png"),
      title: "Gourmet Burger Kitchen GBK",
      price: "0.70",
      deliveryTime: "10-25",
      rating: 4.4,
      promQuantity: 5,
      promPrice: 8,
    },
    {
      id: 2,
      imgUrl: require("../images/HomeScreenImg/Picture2.png"),
      title: "African Flavour",
      price: "0.29",
      deliveryTime: "10-25",
      rating: 4.5,
      promQuantity: 5,
      promPrice: 8,
    },
    {
      id: 3,
      imgUrl: require("../images/HomeScreenImg/Picture2.png"),
      title: "Cardinal Chips",
      price: "0.50",
      deliveryTime: "10-25",
      rating: 4.1,
      promotion: true,
      promQuantity: 5,
      promPrice: 8,
    },
    {
      id: 4,
      imgUrl: require("../images/HomeScreenImg/Picture2.png"),
      title: "Scents Restaurant",
      price: "0.60",
      deliveryTime: "10-25",
      rating: 4.3,
      promQuantity: 5,
      promPrice: 8,
    },
    {
      id: 5,
      imgUrl: require("../images/HomeScreenImg/Picture2.png"),
      title: "Steaky treats",
      price: "0.55",
      deliveryTime: "10-25",
      rating: 4.7,
      promQuantity: 5,
      promPrice: 8,
    },
    {
      id: 6,
      imgUrl: require("../images/HomeScreenImg/Picture2.png"),
      title: "Foodilistica",
      price: "0.33",
      deliveryTime: "10-25",
      rating: 5,
      promQuantity: 5,
      promPrice: 8,
    },
  ];

  const PickupList = [
    {
      id: 7,
      imgUrl: require("../images/HomeScreenImg/Picture2.png"),
      title: "BBN inn",
      price: "3",
      deliveryTime: "10-25",
      rating: 4.9,
      promQuantity: 5,
      promPrice: 8,
      distance: 3.4,
    },
    {
      id: 8,
      imgUrl: require("../images/HomeScreenImg/Picture2.png"),
      title: "Gourmet Burger Kitchen GBK",
      price: "0.70",
      deliveryTime: "10-25",
      rating: 4.4,
      promQuantity: 5,
      promPrice: 8,
    },
    {
      id: 9,
      imgUrl: require("../images/HomeScreenImg/Picture2.png"),
      title: "African Flavour",
      price: "0.29",
      deliveryTime: "10-25",
      rating: 4.8,
      promQuantity: 5,
      promPrice: 8,
      distance: 6.7,
    },
    {
      id: 10,
      imgUrl: require("../images/HomeScreenImg/Picture2.png"),
      title: "Cardinal Chips",
      price: "0.50",
      deliveryTime: "10-25",
      rating: 4.5,
      promotion: true,
      promQuantity: 5,
      promPrice: 8,
      distance: 2.4,
    },
    {
      id: 11,
      imgUrl: require("../images/HomeScreenImg/Picture2.png"),
      title: "Scents Restaurant",
      price: "0.60",
      deliveryTime: "10-25",
      rating: 4.3,
      promQuantity: 5,
      promPrice: 8,
      distance: 4.4,
    },
    {
      id: 12,
      imgUrl: require("../images/HomeScreenImg/Picture2.png"),
      title: "Steaky treats",
      price: "0.55",
      deliveryTime: "10-25",
      rating: 4.7,
      promQuantity: 5,
      promPrice: 8,
      distance: 5,
    },
    {
      id: 13,
      imgUrl: require("../images/HomeScreenImg/Picture2.png"),
      title: "Foodilistica",
      price: "0.33",
      deliveryTime: "10-25",
      rating: 5,
      promQuantity: 5,
      promPrice: 8,
      distance: 6.1,
    },
  ];

  return (
    <Container>
      <FlatList
        ListHeaderComponent={HeaderContainer}
        ListHeaderComponentStyle={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 50,
          backgroundColor: "#FFFFFF",
        }}
        showsVerticalScrollIndicator={false}
        data={type === 1 ? DeliveryList : PickupList}
        renderItem={({ item }) => (
          <MainCard
            key={item.id}
            imgUrl={item.imgUrl}
            title={item.title}
            price={type === 0 ? item.price : ""}
            distance={type === 1 ? item.distance : ""}
            deliveryTime={item.deliveryTime}
            rating={item.rating}
            promotion={type === 0 ? item.promotion : ""}
            promPrice={item.promPrice}
            promQuantity={item.promQuantity}
          />
        )}
      />
    </Container>
  );
};
export default Deals;
