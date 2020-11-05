import React, { useEffect, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, Callout } from "react-native-maps";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import mapMarkerIcon from "../images/marker.png";
import api from "../services/api";

interface House {
  id:number;
  name:string;
  latitude:number;
  longitude:number;
}

export default function App() {
  const [houses, setHouses] = useState<House[]>([])
  const navigation = useNavigation();

  useEffect(() => {
    api.get('houses').then(response=> {
      setHouses(response.data)
    })
  })

  function handleNavigateHouseDetails() {
    navigation.navigate("Details");
  }

  function handleNavigateAddNewHouse() {
    navigation.navigate("SelectMap");
  }

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -23.552588,
          longitude: -46.63288,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        {houses.map(house => {
          return (
            <Marker
              key={house.id}
              calloutAnchor={{
                x: 0.5,
                y: 0.0,
              }}
              icon={mapMarkerIcon}
              coordinate={{
                latitude: house.latitude,
                longitude: house.longitude,
              }}
            >
              <Callout tooltip onPress={handleNavigateHouseDetails}>
                <View style={styles.calloutContainer}>
                  <Text style={styles.calloutText}> {house.name} </Text>
                </View>
              </Callout>
            </Marker>
          );
        })}
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>02 casas encontradas</Text>
        <TouchableOpacity style={styles.addHouseBtn} onPress={handleNavigateAddNewHouse}>
          <Feather name="plus" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  calloutContainer: {
    width: 168,
    paddingHorizontal: 16,
    backgroundColor: "rgb(255,255,255)",
    borderRadius: 16,
    justifyContent: "center",
  },
  calloutText: {
    color: "#f00dd0",
    fontSize: 20,
  },
  footer: {
    position: "absolute",
    left: 24,
    right: 24,
    bottom: 32,

    backgroundColor: "#fff",
    borderRadius: 50,
    padding: 6,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    elevation: 3,
  },
  footerText: {
    color: "#8fa7b3",
    fontSize: 18,
    paddingLeft: 24,
  },
  addHouseBtn: {
    width: 56,
    height: 56,
    backgroundColor: "#D90368",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
