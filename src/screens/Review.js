
import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, Button } from "react-native";

const Review = ({ route, navigation }) => {
  const vinhos = route.params.vinho;

  const [teste, setTeste] = useState('0');
  return (
    <>

      <ScrollView contentContainerStyle={styles.container}>
        <Image source={vinhos.imagem} style={styles.image} />
        <Text style={styles.name}>{vinhos.nome}</Text>

        <View style={styles.vconteudo}>
          <Text style={styles.price}>Preço: </Text>
          <Text style={styles.conteudo}>{vinhos.preco}</Text></View>

        <View style={styles.vconteudo}>
          <Text style={styles.alcoholContent}>Teor Alcoólico: </Text>
          <Text style={styles.conteudo}>{vinhos.teorAlcool}%</Text></View>

        <View style={styles.vconteudo}>
          <Text style={styles.description}>Descrição: </Text>
          <Text style={styles.conteudo}>{vinhos.classificacao} Sobre o vinho...</Text></View>

        <View style={styles.vconteudo}>
          <Text style={styles.rating}>Classificação: </Text>
          <Text style={styles.conteudo}>{vinhos.rating} Estrelas</Text></View>
        <Button title="Comprar" onPress={()=>{setTeste('1')}}/>

      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 120,
    height: 500,
    marginBottom: 10,
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
    margin: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold"
  },
  conteudo: {
    fontSize: 20,
    fontWeight: "normal"
  },
  vconteudo: {
    flexDirection: "row"
  },

  alcoholContent: {
    fontSize: 20,
    fontWeight: "bold"
  },
  description: {
    fontSize: 20,
    fontWeight: "bold",
  },
  rating: {
    fontSize: 20,
    fontWeight: "bold"
  },

});

export default Review;

