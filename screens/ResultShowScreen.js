import React from 'react';
import {StyleSheet, View ,Text } from 'react-native';


const ResultShowScreen = (props) => {
  const ID = props.navigation.getParam('id');

  return (
    <View>
        <Text>Welcome to {ID}.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container :{

}
});

export default ResultShowScreen;