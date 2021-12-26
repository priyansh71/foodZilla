import React, {useState} from 'react';
import {StyleSheet, View ,Text, Image } from 'react-native';


const ResultDetail = ({result}) => {

  return (
    <View style= {styles.container}>
        <Image 
            style={styles.image} 
            source={{
                uri : result.image_url
        }} 
        />
        <Text style={styles.name}>
            {result.name}
        </Text>
        <Text>
            {result.rating} Stars , {result.review_count} reviews.
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container : {
        marginLeft: 5,
        marginVertical : 5,
        padding : 10,
        borderColor : "#777",
        borderRadius : 7,
    },
    image :{
        width : 250,
        height : 130,
        borderRadius : 5
    },
    name : {
        paddingTop : 14,
        fontSize : 15,
        fontWeight : "600"
    }
});

export default ResultDetail;