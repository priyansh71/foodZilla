import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import ResultList from "../components/ResultList";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";


const HomeScreen = (props) => {
  const [value, setValue] = useState("");
  const [handleResults, error , results] = useResults();

  const filterByPrice = (price) => {
    return results.filter((item) => { 
      return item.price === price;
    });
  }

  const place = props.navigation.getParam('location');

  useEffect(() => {
    handleResults("Pizza", place)
  }, []);
  
  return (
    <>
      <SearchBar
        term={value}
        onTermChange={(text) => setValue(text)}
        onTermSubmit={() => { 
            handleResults(value, place)
          }
        }
        placeHolder="Search for cuisine.."
      />
      {error ? <Text>{error}</Text> : null}
      <ScrollView>
          <ResultList header="Cost Effective" results={filterByPrice('$')} />
          <ResultList header="Bit Pricier" results={filterByPrice('$$')} />
          <ResultList header="Big Spender" results={filterByPrice('$$$')} />
      </ScrollView>
    </>
  );
};

export default HomeScreen;
