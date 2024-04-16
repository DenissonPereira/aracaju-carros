import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { useAracajuCarrosContext } from "../../context";
import { styles } from "./styles";

export const Home = () => {
  const { carros } = useAracajuCarrosContext();

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