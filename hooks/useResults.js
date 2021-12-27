import { useState, useEffect } from "react";
import yelp from "../apis/yelp";

const useResults = () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const handleResults = async (searchTerm, searchLocation) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: searchLocation
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setError("Something went wrong.");
    }
  };

  // useEffect(() => {
  //   handleResults("Pizza", "San Jose");
  // }, []);

  return [handleResults, error, results];
};

export default useResults;
