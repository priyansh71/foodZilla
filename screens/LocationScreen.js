import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import { withNavigation } from "react-navigation";

const LocationScreen = ({ navigation }) => {
  const [place, setPlace] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.header}>foodZilla</Text>
      <Text style={styles.title}>Enter a US location.</Text>
      <SearchBar
        term={place}
        onTermChange={(text) => setPlace(text)}
        onTermSubmit={() => {
          navigation.navigate("Restaurants", { location: place });
          setPlace("");
        }}
        placeHolder={null}
      />
      <Text style={styles.footer}>Made by Priyansh.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 40,
    marginTop: 20,
    marginHorizontal: 30,
    fontSize: 70,
    fontFamily: "headerBold",
  },
  title: {
    fontSize: 24,
    fontFamily: "nunito",
    marginVertical: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    fontFamily: "nunito",
    fontSize: 16,
    position: "absolute",
    bottom: 15,
  },
});

export default withNavigation(LocationScreen);
