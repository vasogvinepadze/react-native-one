import { View, Text } from "react-native";
import React from "react";
import * as ImgPicker from "expo-image-picker";
import styled from "styled-components";

const Container = styled.Pressable``;

const Title = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #1d5c2e;
`;

const ImagePicker = ({ title, callback }) => {
  const onPresHandler = async () => {
    const res = await ImgPicker.getMediaLibraryPermissionsAsync();
    if (res.granted) {
      const launchRes = ImgPicker.launchImageLibraryAsync();
      callback(launchRes.uri);
    } else {
      const requestRes = await ImgPicker.requestMediaLibraryPermissionsAsync();
      if (requestRes) {
        const response = await ImgPicker.launchImageLibraryAsync();
        callback(response.uri);
      }
    }
  };

  return (
    <Container onPress={onPresHandler}>
      <Title>{title}</Title>
    </Container>
  );
};

export default ImagePicker;
