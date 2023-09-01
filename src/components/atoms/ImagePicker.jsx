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

const ImagePicker = ({
  title,
  callback,
  children,
  type = "Bold",
  fontSize,
  margin,
  color,
  ...otherProps
}) => {
  const onPressHandler = async () => {
    const res = await ImgPicker.getMediaLibraryPermissionsAsync();
    if (res.granted) {
      const launchRes = await ImgPicker.launchImageLibraryAsync();
      if (!launchRes.canceled) {
        const selectedAsset = launchRes.assets[0];
        callback(selectedAsset.uri);
      }
    } else {
      const requestRes = await ImgPicker.requestMediaLibraryPermissionsAsync();
      if (requestRes) {
        const response = await ImgPicker.launchImageLibraryAsync();
        if (!response.canceled) {
          const selectedAsset = response.assets[0];
          callback(selectedAsset.uri);
        }
      }
    }
  };

  return (
    <Container onPress={onPressHandler}>
      {title && <Text>{title}</Text>}
      {children}
    </Container>
  );
};

export default ImagePicker;
