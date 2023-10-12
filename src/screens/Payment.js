import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Payment = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);

  const handlePaymentSelection = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha a forma de pagamento:</Text>
      <TouchableOpacity
        style={[styles.paymentOption, selectedPayment === 'creditCard' && styles.selectedOption]}
        onPress={() => handlePaymentSelection('creditCard')}
      >
        <Text>Cartão de Crédito</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.paymentOption, selectedPayment === 'debitCard' && styles.selectedOption]}
        onPress={() => handlePaymentSelection('debitCard')}
      >
        <Text>Cartão de Débito</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.paymentOption, selectedPayment === 'cash' && styles.selectedOption]}
        onPress={() => handlePaymentSelection('cash')}
      >
        <Text>Dinheiro</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.paymentOption, selectedPayment === 'boleto' && styles.selectedOption]}
        onPress={() => handlePaymentSelection('boleto')}
      >
        <Text>Boleto</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.paymentOption, selectedPayment === 'pix' && styles.selectedOption]}
        onPress={() => handlePaymentSelection('pix')}
      >
        <Text>Pix</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  paymentOption: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  selectedOption: {
    backgroundColor: 'blue', // Estilo de seleção
    borderColor: 'blue',
  },
});

export default Payment;