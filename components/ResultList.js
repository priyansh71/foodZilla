import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ResultDetail from "./ResultDetail";
import { withNavigation } from "react-navigation";

// This function can help ResultList take the navigation prop directly without ever using the prop from the home screen component.
const ResultList = ({ header, results, navigation }) => {
  return (
    <View>
      <Text style={styles.title}>{header}</Text>
      <FlatList
        horizontal={true}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("ResultShowScreen", { id : item.id})}
            >
              <ResultDetail result={item} />
            </TouchableOpacity>
          );
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginHorizontal: 16,
    marginVertical: 5,
  },
});

export default withNavigation(ResultList);
