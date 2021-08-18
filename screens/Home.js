/** @format */

import React , { useState} from "react";
import { Text, View } from "react-native";
import yelp from "../apis/yelp";
import Search from "../components/Search";

const Home = () => {

    const [value, setValue] = useState("")
    const [results, setResults] = useState([])
    const [error, setError] = useState("")

    const handleValue = (text) =>{
        setValue(text)
    }

    const handleResults = async () => {
        try{
            const response = await yelp.get('/search', {
                 params: {
                    limit : 50,
                     term : value,
                     location : 'San Jose'
                }

            });
            setResults(response.data.businesses);   
        }
        catch (err){
            setError("Something went wrong.")
        }}
    return (
        <View>
            <Search 
                term={value} 
                onTermChange={handleValue}
                onTermSubmit={handleResults}
            />
            <Text>{results.length}</Text>
            {error ? <Text>{error}</Text> : null}
            </View>
    )
};

export default Home;