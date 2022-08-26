import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name} </Text>
      <Text style={styles.ratings}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 250,
    height: 150,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  container: {
    marginLeft: 15,
  },
  ratings: {},
});

export default ResultsDetail;
