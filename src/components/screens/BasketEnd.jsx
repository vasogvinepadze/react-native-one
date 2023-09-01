import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import * as Progress from "react-native-progress";
import MapView, { Marker, Polyline } from "react-native-maps";
import Screen from "../atoms/Screen";

const Container = styled.SafeAreaView`
  background-color: #00ccbb;
  flex: 1;
`;

const Main = styled.View`
  margin-bottom: 50px;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
  padding: 20px;
`;
const BasketEnd = () => {
  const mapRef = useRef(null);
  const [region, setRegion] = useState({
    latitude: 41.7151,
    longitude: 44.8271,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const restaurantLatLng = { latitude: 41.7151, longitude: 44.8271 };
  const customerLatLng = { latitude: 41.7872, longitude: 44.7102 };

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.fitToCoordinates([restaurantLatLng, customerLatLng], {
        edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
        animated: true,
      });
    }
  }, [mapRef]);
  return (
    <View style={{ flex: 1, backgroundColor: "#00CCBB" }}>
      <Container>
        <Main>
          <Title>Order Help</Title>
        </Main>
        <View
          style={{
            backgroundColor: "white",
            height: 100,
            // padding: 10,
            width: "auto",
            zIndex: 9999,
            margin: 40,
            gap: 5,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 16, color: "gray" }}>Estimated Arrival</Text>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>
            45-55 Minutes
          </Text>
          <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />
        </View>
      </Container>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 80,
          zIndex: -1,
        }}
      >
        <MapView
          ref={mapRef}
          style={styles.map}
          region={region}
          onRegionChangeComplete={setRegion}
        >
          <Polyline
            coordinates={[restaurantLatLng, customerLatLng]}
            strokeWidth={2}
            strokeColor="blue"
          />
        </MapView>
        <SafeAreaView
          style={{
            backgroundColor: "white",
            flexDirection: "row",
            height: 50,
            width: 429,
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ padding: 10, marginHorizontal: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Vasili Gvinepadze
            </Text>
            <Text style={{ color: "gray" }}>Your Rider</Text>
          </View>
          <Text
            style={{
              paddingHorizontal: 30,
              fontWeight: "bold",
              color: "#00CCBB",
              fontSize: 20,
            }}
          >
            Call
          </Text>
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    zIndex: 0,
    width: "100%",
    height: "85%",
  },
});

export default BasketEnd;
