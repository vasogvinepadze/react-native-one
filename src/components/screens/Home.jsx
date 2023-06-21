import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Portal } from "react-native-portalize";
import {
  ActivityIndicator,
  ScrollView,
  View,
  Text,
  Image,
  Button,
} from "react-native";

import BottomSheet from "../atoms/BottomSheet";
import MainCard from "../organisms/MainCard";
import CtgrBtn from "../atoms/CtgrBtn";
import CategoryCard from "../atoms/CategoryCard";
import * as ROUTES from "../../constants/routes";
import Screen from "../atoms/Screen";

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
];

const scroll = [
  {
    id: 6,
    imgUrl: require("../images/HorizontalScrollFood/Promo.png"),
  },
  {
    id: 20,
    imgUrl: require("../images/HomeScreenImg/picture4.png"),
  },
];

const deli = [
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
  {
    id: 21,
    imgUrl: require("../images/HomeScreenImg/picture5.png"),
    title: "Round eatery",
    price: "0.29",
    time: "10-25",
    rating: "4.4",
  },
];

const deliveryTwo = [
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
  {
    id: 21,
    imgUrl: require("../images/HomeScreenImg/picture5.png"),
    title: "Round eatery",
    price: "0.29",
    time: "10-25",
    rating: "4.4",
  },
  {
    id: 31,
    imgUrl: require("../images/HomeScreenImg/picture5.png"),
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

const bottomSheetCategory = [
  {
    id: 0,
    imgUrl: require("../images/bottomSheetImg/Category-1.png"),
  },
  {
    id: 1,
    imgUrl: require("../images/bottomSheetImg/Category-2.png"),
  },
  {
    id: 2,
    imgUrl: require("../images/bottomSheetImg/Category-3.png"),
  },
  {
    id: 3,
    imgUrl: require("../images/bottomSheetImg/Category-4.png"),
  },
  {
    id: 4,
    imgUrl: require("../images/bottomSheetImg/Category-5.png"),
  },
  {
    id: 5,
    imgUrl: require("../images/bottomSheetImg/Category-6.png"),
  },
  {
    id: 6,
    imgUrl: require("../images/bottomSheetImg/Category-7.png"),
  },
  {
    id: 7,
    imgUrl: require("../images/bottomSheetImg/Category-8.png"),
  },
  {
    id: 8,
    imgUrl: require("../images/bottomSheetImg/Category-9.png"),
  },
  {
    id: 9,
    imgUrl: require("../images/bottomSheetImg/Category-10.png"),
  },
  {
    id: 10,
    imgUrl: require("../images/bottomSheetImg/Category-11.png"),
  },
  {
    id: 11,
    imgUrl: require("../images/bottomSheetImg/Category-12.png"),
  },
  {
    id: 12,
    imgUrl: require("../images/bottomSheetImg/Category-13.png"),
  },
  {
    id: 13,
    imgUrl: require("../images/bottomSheetImg/Category-14.png"),
  },
  {
    id: 14,
    imgUrl: require("../images/bottomSheetImg/Category-15.png"),
  },
  {
    id: 15,
    imgUrl: require("../images/bottomSheetImg/Category-16.png"),
  },
  {
    id: 16,
    imgUrl: require("../images/bottomSheetImg/Category-17.png"),
  },
  {
    id: 17,
    imgUrl: require("../images/bottomSheetImg/Category-18.png"),
  },
  {
    id: 18,
    imgUrl: require("../images/bottomSheetImg/Category-19.png"),
  },
  {
    id: 19,
    imgUrl: require("../images/bottomSheetImg/Category.png"),
  },
];

const MainContainer = styled(Screen)``;

const Container = styled.ScrollView`
  background-color: #f6f6f6;
`;

const SortConatinaer = styled.View``;

const SortTopContainer = styled.View`
  margin: 0 auto;
  width: 300px;
  flex-direction: row;
  gap: 10px;
`;

const CategoryBtn = styled(CtgrBtn)`
  margin: 10px 0;
  border-radius: 25px;
  padding: 0 22px;
`;

const SortBottom = styled.View`
  width: 280px;
  height: 25px;
  margin: 5px auto;

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

const LoadingSnipper = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const ScrollHorizontal = styled(ScrollView)`
  padding: 10px 5px;
`;

const Population = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  padding: 0 30px;
  align-items: center;
`;

const PopulationTitle = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 37px;
  color: #000000;
`;

const SeeAll = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #000000;
`;

const CtgrFood = styled.View`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 5px 5px;
`;

const CtgrFoodTitle = styled.Text`
  background: #eeeeee;
  border-radius: 7px;
  width: 145px;
  height: 75px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  gap: 25px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #000000;
`;

const CtgrFoodTitleTwo = styled.Text`
  background: #eeeeee;
  border-radius: 7px;
  width: 145px;
  height: 75px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  gap: 25px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #000000;
`;

const HomeContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 15px;
  padding-bottom: 30px;
`;

const HomeCtgrImage = styled.Image``;

const HomeCtgrTitle = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;

  text-align: center;

  color: #000000;
`;

const BottomSheetCategoryImg = styled.View``;

const firstimage = require("../images/homeCategory/alcohol1.png");
const firstimageTwo = require("../images/homeCategory/convenience1.png");
const firstimageThree = require("../images/homeCategory/pet_supplies-removebg-preview1.png");
const firstimageFour = require("../images/homeCategory/Menu.png");

const Home = ({ navigation }) => {
  const [ctgr, setCtgr] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setIsLoading] = useState(false);

  const categorySheetRef = useRef();

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
    setIsLoading(true);
    setTimeout(() => {
      fetchData();
      setIsLoading(false);
    }, 500);
  }, []);

  const handlePress = (value) => {
    setCtgr(value);
  };

  const btns = [
    { title: "Delivery", value: 0 },
    { title: "Pickup", value: 1 },
    { title: "Dine-in", value: 2 },
  ];

  return (
    <Container contentContainerStyle={{ paddingBottom: 200 }}>
      {loading && <ActivityIndicator size="large" color="red" />}
      <LoadingSnipper style={{ display: loading ? "none" : "flex" }}>
        <SortConatinaer>
          <SortTopContainer>
            {btns.map((item) => {
              return (
                <CategoryBtn
                  title={item.title}
                  onPress={() => handlePress(item.value)}
                  key={item.value}
                  light={item.value === ctgr ? false : true}
                />
              );
            })}
          </SortTopContainer>

          <SortBottom>
            <Location>Now • London Hall</Location>
          </SortBottom>
          <HomeContainer>
            <View
              style={{
                width: 90,
                height: 90,
                backgroundColor: "rgba(230, 230, 230, 0.4);",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 6,
              }}
            >
              <HomeCtgrImage source={firstimage} />
              <HomeCtgrTitle
                onPress={() => navigation.navigate(ROUTES.CONVENIENCE_SCREEN)}
              >
                Convenience
              </HomeCtgrTitle>
            </View>
            <View
              style={{
                width: 90,
                height: 90,
                backgroundColor: "rgba(230, 230, 230, 0.4);",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 6,
              }}
            >
              <HomeCtgrImage source={firstimageTwo} />
              <HomeCtgrTitle>Alcohol</HomeCtgrTitle>
            </View>

            <View
              style={{
                width: 90,
                height: 90,
                backgroundColor: "rgba(230, 230, 230, 0.4);",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 6,
              }}
            >
              <HomeCtgrImage source={firstimageThree} />
              <HomeCtgrTitle>Pet Supplies</HomeCtgrTitle>
            </View>

            <View
              style={{
                width: 78,
                height: 70,
                backgroundColor: "rgba(230, 230, 230, 0.4);",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 6,
              }}
            >
              <HomeCtgrImage source={firstimageFour} />
              <HomeCtgrTitle onPress={() => categorySheetRef.current.open()}>
                More
              </HomeCtgrTitle>
            </View>
          </HomeContainer>
        </SortConatinaer>
        {data.map((item) => {
          return (
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
              onPress={() => navigation.navigate(ROUTES.REST_DETAILS)}
            />
          );
        })}
        <Portal>
          <BottomSheet bottomSheetRef={categorySheetRef}>
            <Button
              title="Close"
              onPress={() => categorySheetRef.current.close()}
            />

            <BottomSheetCategoryImg>
              <Text
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {bottomSheetCategory.map((item) => {
                  return <CategoryCard key={item.id} imgUrl={item.imgUrl} />;
                })}
              </Text>
            </BottomSheetCategoryImg>
          </BottomSheet>
        </Portal>
        <ScrollHorizontal
          style={{ paddingHorizontal: 25 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {scroll.map((item) => {
            return <MainCard key={item.id} imgUrl={item.imgUrl} />;
          })}
        </ScrollHorizontal>
        {deli.map((item) => {
          return (
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
              onPress={() => navigation.navigate(ROUTES.REST_DETAILS)}
            />
          );
        })}
        <Population>
          <PopulationTitle>Popular Near you</PopulationTitle>
          <SeeAll>See all</SeeAll>
        </Population>
        <ScrollHorizontal
          style={{ paddingHorizontal: 25 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {scroll.map((item) => {
            return <MainCard key={item.id} imgUrl={item.imgUrl} />;
          })}
        </ScrollHorizontal>
        {deliveryTwo.map((item) => {
          return (
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
              onPress={() => navigation.navigate(ROUTES.REST_DETAILS)}
            />
          );
        })}
        <CtgrFood>
          <CtgrFoodTitle>
            Carribean
            <Image source={require("../images/CategoryFood/asian.png")} />
          </CtgrFoodTitle>

          <CtgrFoodTitleTwo>
            Asian
            <Image source={require("../images/CategoryFood/Indian.png")} />
          </CtgrFoodTitleTwo>
        </CtgrFood>
        <CtgrFood>
          <CtgrFoodTitle>
            Pizza
            <Image source={require("../images/CategoryFood/pizza.png")} />
          </CtgrFoodTitle>

          <CtgrFoodTitleTwo>
            Asian
            <Image source={require("../images/CategoryFood/asian.png")} />
          </CtgrFoodTitleTwo>
        </CtgrFood>
      </LoadingSnipper>
    </Container>
  );
};

export default Home;
