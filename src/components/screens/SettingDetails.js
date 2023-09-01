import { View, Pressable, TextInput, ScrollView } from "react-native";
import React, { useState } from "react";
import styled from "styled-components";
import ImagePicker from "../atoms/ImagePicker";

import Screen from "../atoms/Screen";
import SettingDet from "./SettingDet";

const Container = styled(Screen)`
  display: flex;
  align-items: center;
`;
const MainInfoContainer = styled.View`
  display: flex;
  align-items: center;
  margin-top: 20px;
  justify-content: space-evenly;
`;

const MainImage = styled.Image`
  width: 100px;
  height: 100px;
  margin: 23px 0 20px 0;
  border-radius: 50px;
`;
const MainTitle = styled.Text``;

const SettingsDetails = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("John Doe");

  const startEditing = () => {
    setEditing(true);
  };

  const finishEditing = () => {
    setEditing(false);
  };
  const handleNameChange = (newName) => {
    setName(newName);
  };

  const handleImagePick = (pickedImage) => {
    setImage(pickedImage);
  };

  return (
    <Container>
      <ScrollView>
        <MainInfoContainer>
          <MainImage
            source={image ? { uri: image } : require("../images/userInfo.png")}
          />
          {editing ? (
            <TextInput
              value={name}
              onChangeText={handleNameChange}
              onBlur={finishEditing}
              autoFocus
            />
          ) : (
            <Pressable onPress={startEditing}>
              <MainTitle>{name}</MainTitle>
            </Pressable>
          )}
          <ImagePicker title={"EDIT ACCOUNT"} callback={handleImagePick} />
        </MainInfoContainer>
        <SettingDet />
      </ScrollView>
    </Container>
  );
};

export default SettingsDetails;
