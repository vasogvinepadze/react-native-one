import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MainCard from "../organisms/MainCard";
import Screen from "../atoms/Screen";
import { FlatList } from "react-native";
import CtgrBtn from "../atoms/CtgrBtn";

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

const delivery = [
  {
    id: 4,
    imgUrl: require("../images/HomeScreenImg/MainImage.png"),
    title: "Delivery",
    price: "0.29",
    time: "15-25",
    rating: "4.4",
    promotion: true,
    promQuant: 5,
    promPrice: 8,
  },
  {
    id: 5,
    imgUrl: require("../images/HomeScreenImg/Picture2.png"),
    title: "Delivery",
    price: "1.29",
    time: "15-30",
    rating: "4.8",
  },
  {
    id: 6,
    imgUrl: require("../images/HomeScreenImg/Picture3.png"),
    title: "Delivery",
    price: "2.35",
    time: "10-25",
    rating: "5.0",
  },
  {
    id: 20,
    imgUrl: require("../images/HomeScreenImg/picture4.png"),
    title: "Round eatery",
    price: "0.29",
    time: "10-25",
    rating: "4.4",
  },
];

const pickup = [
  {
    id: 7,
    imgUrl: require("../images/HomeScreenImg/MainImage.png"),
    title: "Pickup",
    price: "0.29",
    time: "15-25",
    rating: "4.4",
    promotion: true,
    promQuant: 5,
    promPrice: 8,
    distance: 3.2,
  },
  {
    id: 8,
    imgUrl: require("../images/HomeScreenImg/Picture2.png"),
    title: "Pickup",
    price: "1.29",
    time: "15-30",
    rating: 4.8,
    distance: 5.2,
  },
  {
    id: 9,
    imgUrl: require("../images/HomeScreenImg/Picture3.png"),
    title: "Pickup",
    price: "2.35",
    time: "10-25",
    rating: "5.0",
    distance: 1.2,
  },
  {
    id: 15,
    imgUrl: require("../images/HomeScreenImg/Picture3.png"),
    title: "Pickup",
    price: "2.35",
    time: "10-25",
    rating: "5.0",
    distance: 1.2,
  },
];

const dineIn = [
  {
    id: 10,
    imgUrl: require("../images/HomeScreenImg/MainImage.png"),
    title: "dineIn",
    price: "0.29",
    time: "15-25",
    rating: "4.4",
    promotion: true,
    promQuant: 5,
    promPrice: 8,
  },
  {
    id: 11,
    imgUrl: require("../images/HomeScreenImg/Picture2.png"),
    title: "dineIn",
    price: "5",
    time: "15-30",
    rating: "4.8",
  },
  {
    id: 12,
    imgUrl: require("../images/HomeScreenImg/Picture3.png"),
    title: "dineIn",
    price: "2.35",
    time: "10-25",
    rating: "5.0",
  },
];

// const Container = styled.ScrollView``;

const Container = styled(Screen)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #f6f6f6;
`;

const SortConatinaer = styled.View``;

const SortTopContainer = styled.View`
  margin-right: 10px;
  flex-direction: row;
`;

const CategoryBtn = styled(CtgrBtn)`
  margin: 10px 0;
  border-radius: 25px;
  padding: 0 22px;
`;

const SortBottom = styled.View`
  width: 280px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Location = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 18.6209px;
  line-height: 23px;
  text-align: center;
`;

const Home = () => {
  const [ctgr, setCtgr] = useState(0);

  const [data, setData] = useState([]);

  const fetchData = () => {
    if (ctgr === 0) {
      setData(delivery);
    } else if (ctgr === 1) {
      setData(pickup);
    } else {
      setData(dineIn);
    }
  };

  useEffect(() => {
    fetchData();
  });

  const handlePress = (value) => {
    setCtgr(value);
  };

  const btns = [
    { title: "Delivery", value: 0 },
    { title: "Pickup", value: 1 },
    { title: "Dine-in", value: 2 },
  ];

  return (
    <Container>
      <SortConatinaer>
        <SortTopContainer>
          {btns.map((item) => {
            return (
              <CategoryBtn
                title={item.title}
                onPress={() => handlePress(item.value)}
                key={item.value}
                light={item.value === ctgr ? true : false}
              />
            );
          })}
        </SortTopContainer>
        <SortBottom>
          <Location>Now • London Hall</Location>
        </SortBottom>
      </SortConatinaer>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <MainCard
            key={item.id}
            imgUrl={item.imgUrl}
            title={item.title}
            price={ctgr === 0 ? item.price : ""}
            distance={ctgr === 1 ? item.distance : ""}
            time={item.time}
            rating={item.rating}
            promotion={ctgr === 0 ? item.promotion : ""}
            promQuant={item.promQuant}
            promPrice={item.promPrice}
          />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default Home;
