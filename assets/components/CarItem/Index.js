import React from "react";
import { View, Text, ImageBackground } from "react-native";
import ModelX from "../../images/ModelX.jpeg";
import StyledButton from "../StyledButton/Index";
import styles from "./styles";

const CarItem = ({}) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={ModelX} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>Model X</Text>
        <Text style={styles.subtitle}>Starting at $69,420</Text>
      </View>
      <StyledButton
        type="primary"
        content={"Custom Order"}
        onPress={() => {
          console.warn("Hey button 1");
        }}
      />
      <StyledButton
        type="secondary"
        content={"Existing Inventory"}
        onPress={() => {
          console.warn("Hey button 2");
        }}
      />
    </View>
  );
};

export default CarItem;
