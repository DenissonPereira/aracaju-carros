import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useAracajuCarrosContext } from "../../../context";
import { styles } from "./styles";
import { ICarros } from "../../../model";

export const CorollaHybrid = () => {
  const { carros } = useAracajuCarrosContext();
  const [corSelecionada, setCorSelecionada] = useState<number>(1);

  const carro = carros.find((car) => car.id === 8);

  const handleCor = (numero: number) => {
    setCorSelecionada(numero);
  };

  return (
    <View style={styles.view}>
      <Text style={styles.titulo}>Conheça as versões: {carro?.modelo}</Text>
      {carro && (
        <View key={carro.id} style={styles.view}>
          <Text style={styles.descricao}>{carro.descricao}</Text>
          <Image
            source={{ uri: corSelecionada === 1 ? carro.imagem1 : corSelecionada === 2 ? carro.imagem2 : corSelecionada === 3 ? carro.imagem3 : carro.imagem4 }}
            style={styles.imagemCarro}
          />
          <View style={styles.caixa}>
            <Text style={styles.cor}>Selecione a cor</Text>
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
            <View style={styles.botao}>
              <TouchableOpacity>
                <Text style={styles.textButton}>EU QUERO!</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.preco}>
            <View style={styles.viewDescricao}>
              <Text>Com frete incluso, a partir de</Text>
              <Text style={styles.valor}>R$ {carro.preco}</Text>
              <Text>Preço base: Brasília</Text>
            </View>
            <View>
              <View>
                <Text style={styles.caracteristicas}>Ano {carro.ano}</Text>
                <Text style={styles.caracteristicas}>{carro.marca}</Text>
                <Text style={styles.caracteristicas}>{carro.quilometragem} Km</Text>
                <Text style={carro.disponibilidade === 'Em estoque' ? styles.disponivel : styles.indisponivel}>{carro.disponibilidade}</Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};
