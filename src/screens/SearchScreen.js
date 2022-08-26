import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";

import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <ResultsList title="Cheap Eats" results={filterResultsByPrice("$")} />
        <ResultsList title="Bit Pricier" results={filterResultsByPrice("$$")} />
        <ResultsList
          title="More Expensive"
          results={filterResultsByPrice("$$$")}
        />
        <ResultsList
          title="Fine Dining"
          results={filterResultsByPrice("$$$$")}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
