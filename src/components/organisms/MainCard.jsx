import styled from "styled-components";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const Container = styled.Pressable`
  margin-bottom: 28px;
  position: relative;
`;

const CardImage = styled.Image``;

const TitleWrapper = styled.View``;

const Title = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 16.5519px;
  line-height: 21px;
  margin-top: 6px;
  color: #000000;
`;

const SubTitle = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 14.4829px;
  line-height: 21px;
  text-align: center;
  color: #6b6b6b;
`;

const Rating = styled.View`
  width: 28.38px;
  height: 27.21px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eeeeee;
  border-radius: 20px;
  margin-top: 6px;
`;

const RatingText = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 21px;
  text-align: center;
  color: #000000;
`;

const CardBottom = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Promotion = styled.View`
  border-bottom-right-radius: 25px;
  border-top-right-radius: 25px;
  width: 235px;
  background: #34a853;
  position: absolute;
  margin-top: 22px;
  padding: 2px 25px;
  display: flex;
  justify-content: center;
  height: 25px;
`;
const PromotionText = styled.Text`
  color: #ffffff;
`;

// const LikeBtn = styled.Image``;

const LikeButton = styled.Pressable`
  position: absolute;
  right: 20px;
  top: 22px;
`;

const MainCard = ({
  imgUrl,
  title,
  price,
  time,
  rating,
  promotion = false,
  promQuant,
  promPrice,
  distance,
}) => {
  const [liked, setLiked] = useState(false);
  const [changedRating, setChangedRating] = useState(rating);

  const toggleLike = () => {
    setLiked(!liked);
    let newRating = changedRating + (liked ? -0.1 : 0.1);
    if (newRating > 5) {
      newRating = 5;
    } else if (newRating < 0) {
      newRating = 0;
    }
    setChangedRating(newRating);
  };

  const LikeBtn = ({ likeIcon }) => {
    const { color, size, focused } = likeIcon;
    let icon = focused ? "heart" : "heart-outline";
    return <Ionicons name={icon} size={size} color={color} />;
  };

  return (
    <Container>
      <CardImage source={imgUrl} />
      <LikeButton onPress={() => toggleLike}>
        <LikeBtn likeIcon={{ color: "white", size: 22, focused: liked }} />
      </LikeButton>
      <CardBottom>
        <TitleWrapper>
          <Title>{title}</Title>
          {price && (
            <SubTitle>
              ${price} Delivery Fee • {time} min
            </SubTitle>
          )}
          {distance && (
            <SubTitle>
              {time} min • {distance} mi
            </SubTitle>
          )}
        </TitleWrapper>
        <Rating>
          <RatingText>{changedRating}</RatingText>
        </Rating>
      </CardBottom>
      {promotion && (
        <Promotion>
          <PromotionText>
            {promQuant} Orders until ${promPrice} reward
          </PromotionText>
        </Promotion>
      )}
    </Container>
  );
};

export default MainCard;
