import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, TextInput, Button } from 'react-native';

const Payment = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: '',
    cvv: '',
    expiration: '',
    cardHolderName: '',
    pixValue: '',
  });
  const [errors, setErrors] = useState({
    cardNumber: '',
    cvv: '',
    expiration: '',
    cardHolderName: '',
  });

  const handlePaymentSelection = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
    setModalVisible(true);
  };

  const validateFormData = () => {
    const { cardNumber, cvv, expiration, cardHolderName } = formData;
    const newErrors = {};

    if (cardNumber === '') {
      newErrors.cardNumber = 'Por favor, insira o número do cartão!';
    }

    if (cvv === '') {
      newErrors.cvv = 'Por favor, insira o número de segurança!';
    }

    if (expiration === '') {
      newErrors.expiration = 'Por favor, insira a validade!';
    }

    if (cardHolderName === '') {
      newErrors.cardHolderName = 'Por favor, insira o nome do titular do cartão!';
    }

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === '');
  };

  const handlePaymentSubmit = () => {
    if (validateFormData()) {
      setModalVisible(false);
      setPaymentModalVisible(true);
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
          <View style={styles.modalView}>
            <TouchableOpacity color="#44ff" onPress={() => setModalVisible(false)}>
              Voltar
            </TouchableOpacity>
            <TextInput
              style={styles.inputBorder(errors.cardNumber)}
              placeholder="Número do Cartão"
              value={formData.cardNumber}
              onChangeText={(text) => setFormData({ ...formData, cardNumber: text })}
            />
            <TextInput
              style={styles.inputBorder(errors.cvv)}
              placeholder="CVV"
              value={formData.cvv}
              onChangeText={(text) => setFormData({ ...formData, cvv: text })}
            />
            <TextInput
              style={styles.inputBorder(errors.expiration)}
              placeholder="Vencimento (MM/AA)"
              value={formData.expiration}
              onChangeText={(text) => setFormData({ ...formData, expiration: text })}
            />
            <TextInput
              style={styles.inputBorder(errors.cardHolderName)}
              placeholder="Nome do Titular"
              value={formData.cardHolderName}
              onChangeText={(text) => setFormData({ ...formData, cardHolderName: text })}
            />
            <Button title="Confirmar Pagamento" onPress={handlePaymentSubmit} />
          </View>
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
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  paymentOption: {
    borderWidth: 1,
    borderColor: '#44ff',
    borderRadius: 5,
    padding: 12,
    margin: 10,
    width: 200,
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: '#44ff',
    borderColor: '#44ff',
  },
  paymentOptionText: {
    color: 'black',
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#44ff',
    padding: 12,
    borderRadius: 5,
    marginTop: 20,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'green',

  },
  modalView: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: 600,

  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#44ff',
    marginBottom: 12,
    padding: 10,
  },
  txtBack: {
    color: 'red'
  },
  inputBorderError: {
    borderBottomWidth: 1,
    borderColor: 'red',
    marginBottom: 12,
    padding: 10,
  },
  inputBorderSuccess: {
    borderBottomWidth: 1,
    borderColor: 'green',
    marginBottom: 12,
    padding: 10,
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green', // Cor de fundo para indicar sucesso
  },
  successText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white', // Cor do texto
    marginBottom: 20,
  },
  infoText: {
    fontSize: 18,
    color: 'white', // Cor do texto
  },

  inputBorder: (error) => ({
    borderBottomWidth: 1,
    borderColor: error ? 'red' : '#44ff',
    marginBottom: 12,
    padding: 10,
  }),
});

export default Payment;