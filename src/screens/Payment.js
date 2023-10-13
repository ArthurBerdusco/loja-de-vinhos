import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, TextInput, Button } from 'react-native';

const Payment = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCVV] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [pixValue, setPixValue] = useState('');
  const [pixRecipient, setPixRecipient] = useState('');

  const handlePaymentSelection = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
    setModalVisible(true);
  };

  const handlePaymentSubmit = () => {
    if (!selectedPayment) {
      alert('Por favor, escolha uma forma de pagamento.');
      return;
    }
//Logica 
    // Add authentication logic here for the selected payment method
    switch (selectedPayment) {
      case 'creditCard':
        // Add credit card authentication logic
        break;
      case 'debitCard':
        // Add debit card authentication logic
        break;
      case 'pix':
        // Add Pix payment authentication logic
        break;
      default:
        break;
    }
  };

  const renderPaymentOption = (paymentMethod, label) => {
    return (
      <TouchableOpacity
        style={[
          styles.paymentOption,
          selectedPayment === paymentMethod && styles.selectedOption,
        ]}
        onPress={() => handlePaymentSelection(paymentMethod)}
      >
        <Text style={styles.paymentOptionText}>{label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha a forma de pagamento:</Text>
      {renderPaymentOption('creditCard', 'Cartão de Crédito')}
      {renderPaymentOption('debitCard', 'Cartão de Débito')}
      {renderPaymentOption('pix', 'Pix')}

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          {selectedPayment === 'creditCard' || selectedPayment === 'debitCard' ? (
            <View style={styles.modalView}>
              <TextInput
                style={styles.input}
                placeholder="Número do Cartão"
                value={cardNumber}
                onChangeText={setCardNumber}
              />
              <TextInput
                style={styles.input}
                placeholder="CVV"
                value={cvv}
                onChangeText={setCVV}
              />
              <TextInput
                style={styles.input}
                placeholder="Vencimento (MM/AA)"
                value={expiration}
                onChangeText={setExpiration}
              />
              <TextInput
                style={styles.input}
                placeholder="Nome do Titular"
                value={cardHolderName}
                onChangeText={setCardHolderName}
              />
            </View>
          ) : (
            <View style={styles.modalView}>
              <TextInput
                style={styles.input}
                placeholder="R$ 00,00"
                value={pixValue}
                onChangeText={setPixValue}
                keyboardType="numeric"
              />
            </View>
          )}
          <TouchableOpacity style={styles.submitButton} onPress={() => setModalVisible(false)}>
            <Text style={styles.submitButtonText}>Confirmar Pagamento</Text>
          </TouchableOpacity>

        </View>
      </Modal>
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
    fontSize: 24, // Increased font size
    marginBottom: 20,
    fontWeight: 'bold', // Added font weight
  },
  paymentOption: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 12, // Increased padding
    margin: 10,
    width: 200,
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: 'blue',
    borderColor: 'blue',
  },
  paymentOptionText: {
    color: 'black',
    fontSize: 16, // Increased font size
  },
  submitButton: {
    backgroundColor: 'blue',
    padding: 12, // Increased padding
    borderRadius: 5,
    marginTop: 20,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18, // Increased font size
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: 300,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 12, // Increased margin
    padding: 10,
  },
});

export default Payment;