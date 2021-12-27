import React from 'react';
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
        <Text style={styles.rating}>
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
        height : 160,
        borderRadius : 5
    },
    name : {
        paddingTop : 12,
        paddingBottom : 5,
        fontSize : 18,
        fontWeight : "900",
        fontFamily : "nunito",
    },
    rating : {
        fontFamily : "nunito",
        letterSpacing : -0.2,
        fontSize : 16
    }
});

export default ResultDetail;