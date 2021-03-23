import React from "react";
import { View, Text, ImageBackground } from "react-native";
import ModelX from "../../images/ModelX.jpeg";
import styles from "./styles"

const CarItem = ({}) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={ModelX} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>Model X</Text>
        <Text style={styles.subtitle}>Starting at $69,420</Text>
      </View>
    </View>
  );
};

export default CarItem;
