import { View, Text, Pressable, TextInput } from "react-native";
import React from "react";
import styled from "styled-components";
import BrowseCard from "../atoms/BrowseCard";

import * as ROUTES from "../../constants/routes";

const TopContainer = styled.ScrollView`
  background-color: #ffffff;
`;

const MainTitle = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  padding: 10px 20px;
  color: #000000;
`;

const MainContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const AllCategories = styled.View`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
`;
const SearchBar = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  width: 370px;
  height: 45px;
  gap: 8px;
  padding-left: 10px;
  background: #eeeeee;
  border-radius: 100px;
`;

const SearchImg = styled.Image``;

const Browse = ({ navigation }) => {
  const browseList = [
    {
      id: 0,

      imgUrl: require("../images/topCategories/Category-4.png"),
    },
    {
      id: 1,

      imgUrl: require("../images/topCategories/Category-1.png"),
    },
    {
      id: 2,

      imgUrl: require("../images/topCategories/Category-2.png"),
    },
    {
      id: 3,

      imgUrl: require("../images/topCategories/Category-3.png"),
    },
    {
      id: 4,

      imgUrl: require("../images/topCategories/Category-4.png"),
      handlePress: () => navigation.navigate(ROUTES.DEALS_SCREEN, { page: 1 }),
    },
    {
      id: 5,

      imgUrl: require("../images/topCategories/Category.png"),
      handlePress: () => navigation.navigate(ROUTES.DEALS_SCREEN, { page: 2 }),
    },
  ];

  const allCategories = [
    {
      id: 7,
      imgUrl: require("../images/allCategories/Category-1.png"),
    },
    {
      id: 8,
      imgUrl: require("../images/allCategories/Category-2.png"),
    },
    {
      id: 9,
      imgUrl: require("../images/allCategories/Category-3.png"),
    },
    {
      id: 10,
      imgUrl: require("../images/allCategories/Category-4.png"),
    },
    {
      id: 11,
      imgUrl: require("../images/allCategories/Category-5.png"),
    },
    {
      id: 12,
      imgUrl: require("../images/allCategories/Category-6.png"),
    },
    {
      id: 13,
      imgUrl: require("../images/allCategories/Category-6.png"),
    },
    {
      id: 14,
      imgUrl: require("../images/allCategories/Category-8.png"),
    },
    {
      id: 15,
      imgUrl: require("../images/allCategories/Category-6.png"),
    },
    {
      id: 16,
      imgUrl: require("../images/allCategories/Category-6.png"),
    },
    {
      id: 17,
      imgUrl: require("../images/allCategories/Category-11.png"),
    },
    {
      id: 18,
      imgUrl: require("../images/allCategories/Category-12.png"),
    },
    {
      id: 19,
      imgUrl: require("../images/allCategories/Category.png"),
    },
    {
      id: 20,
      imgUrl: require("../images/allCategories/Category-6.png"),
    },
  ];

  return (
    <TopContainer>
      <SearchBar>
        <SearchImg source={require("../images/Search.png")} />
        <TextInput placeholder="Food, shopping, drinks, etc" />
      </SearchBar>
      <MainTitle> Top categories </MainTitle>
      <MainContainer>
        {browseList.map((item) => {
          return (
            <BrowseCard
              title={item.title}
              imgUrl={item.imgUrl}
              key={item.id}
              onPress={item.handlePress}
            />
          );
        })}
      </MainContainer>
      <MainTitle>All categories</MainTitle>
      <AllCategories>
        {allCategories.map((item) => {
          return <BrowseCard key={item.id} imgUrl={item.imgUrl} />;
        })}
      </AllCategories>
    </TopContainer>
  );
};

export default Browse;
