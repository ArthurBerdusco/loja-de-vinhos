import { View, StyleSheet, Text, TouchableOpacity } from "react-native"

const Cart = ( {navigation} ) => {
    return (
        <View style={styles.container}>
          <Text>Página Inicial</Text>
          <View style={styles.content}>
            {/* Conteúdo da página */}
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