
import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import BottomMenu from "../components/BottomMenu";

const Review = ({ route }) => {
  const vinhos = route.params.vinho;

  
  return (
    
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={vinhos.imagem} style={styles.image} />
      <Text style={styles.name}>{vinhos.nome}</Text>

      <View style= {styles.vconteudo}> 
      <Text style={styles.price}>Preço: </Text>
      <Text style={styles.conteudo}>{vinhos.preco}</Text></View>

      <View style= {styles.vconteudo}> 
      <Text style={styles.alcoholContent}>Teor Alcoólico: </Text>
      <Text style={styles.conteudo}>{vinhos.teorAlcool}%</Text></View>

      <View style= {styles.vconteudo}> 
      <Text style={styles.description}>Descrição: </Text>
      <Text style={styles.conteudo}>{vinhos.classificacao} Sobre o vinho...</Text></View>

      <View style= {styles.vconteudo}> 
      <Text style={styles.rating}>Classificação: </Text>
      <Text style={styles.conteudo}>{vinhos.rating} Estrelas</Text></View>

    </ScrollView>

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

