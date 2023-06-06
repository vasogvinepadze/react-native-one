import React from "react";
import styled from "styled-components";
import { SafeAreaView, ScrollView } from "react-native";

import * as ROUTES from "../../constants/routes";
import SettingCard from "../organisms/SettingCard";

const MainCont = styled.ScrollView`
  background-color: #ffffff;
`;

const Container = styled.View`
  padding: 15px 19px;
  background: #ffffff;
`;
const MainPerson = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
const Person = styled.Image`
  width: 36px;
  height: 36px;
`;
const User = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
`;

const info = [
  {
    id: 0,
    imgUrl: require("../images/accountPic/OrdersIcons.png"),
    title: "Order",
  },
  {
    id: 1,
    imgUrl: require("../images/accountPic/FavouritesIcon.png"),
    title: "Your favourites",
  },
  {
    id: 2,
    imgUrl: require("../images/accountPic/RewardsIcon.png"),
    title: "Restaurant Rewards",
    value: ROUTES.DEALS_SCREEN,
  },
  {
    id: 3,
    imgUrl: require("../images/accountPic/WalletIcon.png"),
    title: "Wallet",
  },
  {
    id: 4,
    imgUrl: require("../images/accountPic/BusinessIcon.png"),
    title: "Business preferences",
  },
  {
    id: 5,
    imgUrl: require("../images/accountPic/HelpIcon.png"),
    title: "Help",
  },
  {
    id: 6,
    imgUrl: require("../images/accountPic/PromotionsIcon.png"),
    title: "Promotions",
  },
  {
    id: 7,
    imgUrl: require("../images/accountPic/UberPassIcon.png"),
    title: "Uber Pass",
  },
  {
    id: 8,
    imgUrl: require("../images/accountPic/DeliverIcon.png"),
    title: "Deliver with Uber",
  },
  {
    id: 9,
    imgUrl: require("../images/accountPic/SettingsIcon.png"),
    title: "Settings",
    value: ROUTES.SETTINGS_DETAILS,
  },
];

const Details = styled.Text`
  padding: 21px 12px;
`;

const Settings = ({ navigation }) => {
  const handlePress = (str) => {
    console.log(str);
    navigation.navigate(str, { page: 2 });
  };
  return (
    <SafeAreaView>
      <MainCont>
        <Container>
          <MainPerson>
            <Person source={require("../images/accountPic/Ellipse.png")} />
            <User>John Doe</User>
          </MainPerson>

          {info.map((item) => {
            return (
              <SettingCard
                imgUrl={item.imgUrl}
                title={item.title}
                key={item.id}
                onPress={() => handlePress(item.value)}
              />
            );
          })}
          <Details>About</Details>
        </Container>
      </MainCont>
    </SafeAreaView>
  );
};

export default Settings;

// <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//   <Text>Settings Screen</Text>
//   <Btn
//     title="Go to details"
//     onPress={() => navigation.navigate(ROUTES.SETTINGS_DETAILS)}
//   />
// </View>
