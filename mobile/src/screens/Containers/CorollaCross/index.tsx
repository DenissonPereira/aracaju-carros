import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useAracajuCarrosContext } from "../../../context";
import { styles } from "./styles";
import { ICarros } from "../../../model";

export const CorollaCross = () => {
  const { carros } = useAracajuCarrosContext();
  const [corSelecionada, setCorSelecionada] = useState<number>(1);

  const carro = carros.find((car) => car.id === 5);

  const handleCor = (numero: number) => {
    setCorSelecionada(numero);
  };

  return (
    <View style={styles.view}>
      <Text>Conheça as versões</Text>
      {carro && (
        <View key={carro.id}>
          <Text>{carro.modelo}</Text>
          <Image
            source={{ uri: corSelecionada === 1 ? carro.imagem1 : corSelecionada === 2 ? carro.imagem2 : corSelecionada === 3 ? carro.imagem3 : carro.imagem4 }}
            style={styles.imagemCarro}
          />
          <View style={styles.linha}>
            <TouchableOpacity
              style={[styles.branco, styles.branco]}
              onPress={() => handleCor(1)}
            />
            <TouchableOpacity
              style={[styles.prata, styles.prata]}
              onPress={() => handleCor(2)}
            />
            <TouchableOpacity
              style={[styles.preto, styles.preto]}
              onPress={() => handleCor(3)}
            />
            <TouchableOpacity
              style={[styles.vermelho, styles.vermelho]}
              onPress={() => handleCor(4)}
            />
          </View>
        </View>
      )}
    </View>
  );
};
