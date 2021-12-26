import React, { useState } from "react";
import { Text, ScrollView } from "react-native";
import ResultList from "../components/ResultList";
import Search from "../components/Search";
import useResults from "../hooks/useResults";


const HomeScreen = () => {
  const [value, setValue] = useState("");
  const [handleResults, error, results] = useResults();

  const filterByPrice = (price) => {
    return results.filter((item) => { 
      return item.price === price;
    });
  }
  
  return (
    <>
      <Search
        term={value}
        onTermChange={(text) => setValue(text)}
        onTermSubmit={() => handleResults(value)}
      />
      {error ? <Text>{error}</Text> : null}
      <ScrollView>
          <ResultList header="Cost Effective" results={filterByPrice("$")} />
          <ResultList header="Bit Pricier" results={filterByPrice("$$")} />
          <ResultList header="Big Spender" results={filterByPrice("$$$")} />
      </ScrollView>
    </>
  );
};

export default HomeScreen;
