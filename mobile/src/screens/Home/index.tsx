import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { styles } from "./styles";

export const Home = () => {

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/carro.png")}
        style={styles.imageBackground}
      >
      </ImageBackground>
    </View>
  );
};