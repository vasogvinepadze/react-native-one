import { View, Text } from "react-native";
import React, { useState } from "react";
import styled from "styled-components";
import ImagePicker from "../atoms/ImagePicker";

const Container = styled.View``;
const UserProfile = styled.View`
  display: flex;
  align-items: center;
  padding: 7px;
`;
const UserImage = styled.Image``;
const UserName = styled.Text`
  margin-top: 10px;
  margin-bottom: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
`;

const imgUrl = require("../images/username/userName.png");

const SettingDetails = () => {
  const [imgUri, setImgUri] = useState(false);
  return (
    <Container>
      <UserProfile>
        <UserImage source={imgUri ? { uri: imgUri } : imgUrl} />
        <UserName>John Doe</UserName>
        <ImagePicker title="Edit Account" callback={setImgUri} />
      </UserProfile>
    </Container>
  );
};

export default SettingDetails;
