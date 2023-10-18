import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Easing } from 'react-native';

const Notification1 = () => {
  const [cupomVisible, setCupomVisible] = useState(false);
  const slideAnim = new Animated.Value(0);

  const toggleCupom = () => {
    setCupomVisible(!cupomVisible);
    const toValue = cupomVisible ? 0 : 1;

    Animated.timing(slideAnim, {
      toValue,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cupom de Vinho</Text>
      <TouchableOpacity onPress={toggleCupom} style={styles.button}>
        <Text style={styles.buttonText}>
          {cupomVisible ? 'Fechar Cupom' : 'Receber Cupom'}
        </Text>
      </TouchableOpacity>
      <Animated.View
        style={[
          styles.cupomContainer,
          {
            transform: [
              {
                translateY: slideAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [200, 0],
                }),
              },
            ],
          },
        ]}
      >
        {cupomVisible ? (
          <Text style={styles.revealedCupomText}>50OFF</Text>
        ) : (
          <Text style={styles.hiddenCupomText}>5***F</Text>
        )}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#7E3030',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
  cupomContainer: {
    backgroundColor: 'gold',
    padding: 20,
    borderRadius: 15, // Aumentei o raio da borda
    marginTop: 20,
    alignItems: 'center', // Centralize o conteúdo horizontalmente
    justifyContent: 'center', // Centralize o conteúdo verticalmente
  },
  revealedCupomText: {
    fontSize: 24, // Aumentei o tamanho da fonte
    color: '#7E3030', // Uma cor relacionada ao vinho
    fontWeight: 'bold', // Deixa o texto em negrito
  },
  hiddenCupomText: {
    fontSize: 24, // Aumentei o tamanho da fonte
    color: '#7E3030', // Uma cor relacionada ao vinho
    fontWeight: 'bold', // Deixa o texto em negrito
  },
});

export default Notification1;
