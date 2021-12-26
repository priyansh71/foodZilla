import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { View, StyleSheet, TextInput } from "react-native";

const Search = (props) => {
  return (
    <View style={styles.view}>
      <AntDesign 
        name="search1" 
        size={30} 
        color="black" 
        style={styles.icon} 
   />
      <TextInput
        style={styles.input}
        placeholder="Type Here.."
        selectionColor="black"
        autoCapitalize="none"
        autoCorrect={false}
        value={props.term}     
        onChangeText={props.onTermChange}
        onEndEditing={props.onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    top: 16,
    flexDirection: "row",
    marginBottom: 18,
    marginHorizontal: 20,
    paddingHorizontal: 7,
    backgroundColor: "#eaeaea",
    borderBottomWidth: 2,
    borderColor: "#444",
    height: 50,
    borderRadius: 5
  },
  input: {
    borderRadius: 7,
    color: "#333",
    fontSize: 20,
    fontWeight: "300",
    flex: 1,
    marginTop: 6,
    paddingBottom: 9,
  },
  icon: {
    marginBottom: 7,
    marginTop: 10,
    marginHorizontal: 14,
    alignItems: "center",
  },
});
export default Search;
