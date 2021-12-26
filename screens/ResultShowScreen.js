import React, {useState, useEffect} from 'react';
import {StyleSheet, View ,Text, FlatList, Image } from 'react-native';
import { WebView } from 'react-native-webview';
import yelp from '../apis/yelp';


const ResultShowScreen = (props) => {
  const [result, setResult] = useState(null);
  const ID = props.navigation.getParam('id');

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  }

  useEffect(() => {
    getResult(ID) 
  }, []);

  if(!result){
    return null; 
  }
  return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to {result.name},
            </Text>
            <Text style={styles.welcome}>
            {result.location.address1}- {result.location.zip_code}.
          </Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            centerContent
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({item}) => {
              return <Image source={{uri : item}} style={styles.image} />
            }}
          />
        </View>
  );
}

const styles = StyleSheet.create({
  welcome : {
    fontFamily : 'ubuntu',
    fontSize : 20,
    marginHorizontal : 10,
    marginVertical : 7
  },
  container :{
    textAlign : 'center',
    flex : 1,
    width : 370,
    marginHorizontal : 20
  },
  image : {
    height : 180,
    width : '90%',
    marginVertical : 15,
    borderRadius : 10,
    marginHorizontal : 'auto'
  }
});

export default ResultShowScreen;