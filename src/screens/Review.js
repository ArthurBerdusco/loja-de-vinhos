import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Button } from "react-native";

const Review = ({ route, navigation, cartLabel, setCartLabel }) => {

  const vinhos = route.params.vinho;
  const [quantity, setQuantity] = useState(1);

  const [price, setPrice] = useState(vinhos.preco);

  const handleAddToCart = () => {
    // Add your logic to add the selected quantity of wine to the cart
    console.log(`Added ${quantity} bottles of ${vinhos.nome} to the cart`);
    setCartLabel(cartLabel + quantity);
  };

  const handleIncreaseQuantity = () => {
    const total = price + vinhos.preco;
    setQuantity(quantity + 1);
    setPrice(parseFloat(total.toFixed(2)));
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      const total = price - vinhos.preco;
      setQuantity(quantity - 1);
      setPrice(parseFloat(total.toFixed(2)));
    }
  };

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={vinhos.imagem} style={styles.image} />
        <Text style={styles.name}>{vinhos.nome}</Text>

        <View style={styles.infoContainer}>
          <View style={styles.rowContainer}>
            <Text style={styles.label}>Preço:</Text>
            <Text style={styles.content}>{vinhos.preco}</Text>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.label}>Teor Alcoólico:</Text>
            <Text style={styles.content}>{vinhos.teorAlcool}%</Text>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.label}>Classificação:</Text>
            <Text style={styles.content}>{vinhos.rating} Estrelas</Text>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.label}>Descrição:</Text>
            <Text style={styles.content}>{vinhos.classificacao} Sobre o vinho...</Text>
          </View>
        </View>

        <View style={styles.quantityContainer}>
          <Text style={styles.label}>Quantidade:</Text>
          <View style={styles.quantitySelector}>
            <TouchableOpacity onPress={handleDecreaseQuantity}>
              <Text style={styles.quantityButton}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity onPress={handleIncreaseQuantity}>
              <Text style={styles.quantityButton}>+</Text>
            </TouchableOpacity>

          </View>
          <Text style={styles.label}>{price}</Text>
        </View>

        <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
          <Text style={styles.addToCartButtonText}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    borderRadius: 10,
    marginBottom: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  infoContainer: {
    marginBottom: 16,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  quantitySelector: {
   
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
    margin: 15,
  },

  quantityButton: {
    
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    height: 30,
    width: 30,
  },
  quantityText: {
    
    fontSize: 18,
    marginHorizontal: 10,
  },
  addToCartButton: {
    backgroundColor: '#8e44ad',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  addToCartButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Review;
