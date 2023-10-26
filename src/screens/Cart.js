import { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native"

const Cart = ({ navigation }) => {

  const [wines, setWines] = useState(["Vinho A - 50 R$", 'Vinho B - 120 R$'])

  return (
    <View style={styles.container}>

      <View style={styles.content}>
        {wines.length == 0 ? (
          <Text>Seu carrinho está vazio</Text>
        ) : (
          <View>

            {wines.map((wine, index) => (
              <Text>{wine}</Text>
            ))}

          </View>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Payment')}
        >
          <Text style={styles.buttonText}>Finalizar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between', // Distribui o conteúdo verticalmente
    padding: 25,
  },
  content: {
    flex: 1, // Isso fará com que o conteúdo ocupe todo o espaço restante
  },
  buttonContainer: {
    width: '100%', // Largura total da tela
  },
  button: {
    backgroundColor: '#44ff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Cart;