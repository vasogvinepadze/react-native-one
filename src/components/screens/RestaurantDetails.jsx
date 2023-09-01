import { View, Text, Image } from "react-native";
import { ScrollView } from "react-native";
import styled from "styled-components";
import Screen from "../atoms/Screen";
import RestDetailsCard from "../organisms/RestDetailsCard";

import * as ROUTES from "../../constants/routes";

const MainContainer = styled.Pressable``;

const Container = styled.ScrollView`
  background: #ffffff;
`;

const Popular = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  padding: 0 15px;
  color: #000000;
  margin-top: 10px;
`;

const MainImg = styled(Image)`
  display: flex;
  align-items: center;
  width: 100%;
`;

const GoogleMap = styled(Image)`
  height: 30%;
  width: 100%;
`;

const HeaderContainer = styled.View`
  padding: 0 16px;
`;
const RestTitle = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #000000;
  margin-top: 50px;
  width: 250px;
`;

const InfoContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 2px;
`;

const RestInfo = styled.Text`
  margin-left: 5px;
  color: #000000;
`;
const Arrow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 5px;
`;

const Group = styled.View`
  width: 142px;
  height: 40px;
  align-items: center;
  background: #eeeeee;
  border-radius: 99px;
  display: flex;
  flex-direction: row;
  margin-top: 18px;
  justify-content: center;
`;
const GroupTitle = styled.Text`
  padding-left: 5px;
`;

const Delivery = styled.View`
  display: flex;
  flex-direction: row;
  border-radius: 40px;
  background-color: #6b6b6b;
  width: 350px;
  height: 50px;
  align-items: center;
  justify-content: center;
  gap: 35px;
  margin-top: 18px;
`;

const DeliveryRight = styled.Text`
  width: 98px;
  height: 35px;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  text-align: center;

  color: #000000;
`;
const DeliveryLeft = styled.Text`
  width: 90px;
  height: 35px;

  /* Body/medium/b1 */

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  /* or 143% */

  text-align: center;

  color: #000000;
`;

const SectionContainer = styled.View``;

const SectionTitle = styled.Text``;

const ratingImage = require("../images/star.png");
const arrowRight = require("../images/Chevron-Down.png");
const group = require("../images/Group.png");

const RestaurantDetails = ({ navigation, onPress }) => {
  const data = {
    RestaurnatName: {
      name: "Lanespan Pizza & Pub (Emeryville)",
      rating: "4.6",
      ratingQuantity: "300",
      workingHours: "Open until 3:00 AM",
    },
    mostPopular: [
      {
        id: 0,
        title: "McMushroom Pizza",
        price: 21.0,
        desc: "Garlic, olive oil base, mozarella,cremini mushrooms, ricotta, thyme, white truffle oil. Addarugula for an extra charge",
        imgUrl: require("../images/Pizza/Pizza.png"),
        // handlePress: () => navigation.navigate(ROUTES.ORDER_SCREEN),
      },
      {
        id: 1,

        title: "Broken Mush Pizza",
        price: "US $18.00",
        desc: "Hot peppers, mozzarella, spicy marinara, spicy sporessata and picante infused olive oil",
        imgUrl: require("../images/Pizza/Pizza2.png"),
      },
      {
        id: 2,
        title: "Margarita Pizza",
        price: "US $20.00",
        desc: "Whole milk mozarrela pearls,mozarrela, arinara, shavedParmesan, fresh basil and extravirgin olive oil",
        imgUrl: require("../images/Pizza/Pizza3.png"),
      },
    ],
  };

  const rest = data.RestaurnatName;

  const calcRaiting = (num) => {
    if (num > 200) {
      return " (200 + ratings)";
    } else {
      return num;
    }
  };
  return (
    <Container contentContainerStyle={{ paddingBottom: 400 }}>
      <MainContainer onPress={onPress}>
        <MainImg source={require("../images/MainPic.png")} />
        <GoogleMap source={require("../images/googlemap.png")} />

        <HeaderContainer>
          <RestTitle>{rest.name}</RestTitle>
          <InfoContainer>
            <View>
              <Image source={ratingImage} />
            </View>
            <RestInfo>
              {rest.rating}
              {calcRaiting(rest.ratingQuantity)} •Pizza• $$
            </RestInfo>
          </InfoContainer>

          <Arrow>
            <Text>{rest.workingHours}</Text>
            <Image source={arrowRight} />
          </Arrow>
          <Group>
            <GroupTitle>
              <Image source={group} />
              Group Order
            </GroupTitle>
          </Group>
          {/* <Delivery>
            <DeliveryRight>Delivery 25 - 35 min 1.7mi</DeliveryRight>
            <DeliveryLeft>Pickup 5 - 15 min 1.7mi</DeliveryLeft>
          </Delivery> */}
        </HeaderContainer>
        <SectionContainer>
          <Popular>Most Popular</Popular>
          {data.mostPopular.map((item) => {
            return (
              <RestDetailsCard
                title={item.title}
                price={item.price}
                desc={item.desc}
                imgUrl={item.imgUrl}
                key={item.id}
                onPress={() =>
                  navigation.navigate(ROUTES.ORDER_SCREEN, {
                    ...item,
                    RestaurnatName: rest.name,
                  })
                }
              />
            );
          })}
        </SectionContainer>
      </MainContainer>
    </Container>
  );
};

export default RestaurantDetails;
