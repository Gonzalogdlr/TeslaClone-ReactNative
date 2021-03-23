import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import CarItem from "./assets/components/CarItem/Index";
import ModelX from "./assets/images/ModelX.jpeg";

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem
       name={"Model X"} 
       tagline={"Starting from $99,500"}
       taglineCTA={"underline?"} 
       image={ModelX}/>

       
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  
});
