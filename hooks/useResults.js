import { useState, useEffect } from "react";
import yelp from "../apis/yelp";

const useResults = () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const handleResults = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "San Jose",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setError("Something went wrong.");
    }
  };

  useEffect(() => {
    handleResults("pasta");
  }, []);

  return [handleResults, error, results];
};

export default useResults;
