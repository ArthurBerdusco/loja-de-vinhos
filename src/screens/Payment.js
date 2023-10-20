import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, TextInput, Button } from 'react-native';

const Payment = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [paymentModalVisible, setPaymentModalVisible] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCVV] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [pixValue, setPixValue] = useState('');
  //Altera campos para vermelho em caso de falha da validação
  const [cardNumberError, setCardNumberError] = useState('');
  const [cvvError, setCVVError] = useState('');
  const [expirationError, setExpirationError] = useState('');
  const [cardHolderNameError, setCardHolderNameError] = useState('');
  //Altera campos para verde em caso de sucesso da validação
  const [cardNumberSuccess, setCardNumberSuccess] = useState(false);
  const [cvvSuccess, setCVVSuccess] = useState(false);
  const [expirationSuccess, setExpirationSuccess] = useState(false);
  const [cardHolderNameSuccess, setCardHolderNameSuccess] = useState(false);

  const handlePaymentSelection = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
    setModalVisible(true);
  };

  const handlePaymentSubmit = () => {
    switch (selectedPayment) {
      case 'creditCard':
        let isValid = true;

        if (cardNumber === '') {
          setCardNumberError('Por favor, insira o número do cartão!');
          setCardNumberSuccess(false);
          isValid = false;
          break;
        } else {
          setCardNumberError('');
          setCardNumberSuccess(true);
        }

        if (cvv === '') {
          setCVVError('Por favor, insira o número de segurança!');
          setCVVSuccess(false);
          isValid = false;
          break;
        } else {
          setCVVError('');
          setCVVSuccess(true);
        }

        if (expiration === '') {
          setExpirationError('Por favor, insira a validade!');
          setExpirationSuccess(false);
          isValid = false;
          break;
        } else {
          setExpirationError('');
          setExpirationSuccess(true);
        }

        if (cardHolderName === '') {
          setCardHolderNameError('Por favor, insira o nome do titular do cartão!');
          setCardHolderNameSuccess(false);
          isValid = false;
          break;
        } else {
          setCardHolderNameError('');
          setCardHolderNameSuccess(true);
          setModalVisible(false);
        }

        break;

      case 'debitCard':
      // Handle debit card fields here

      case 'pix':
        // Handle pix payment fields here
        break;

      default:
        break;
    }
    setPaymentModalVisible(true)
    //setModalVisible(false);
  };

  const finish = () => {
    return(
      <View>{renderPaymentSuccess()}</View>
    )
  }

  const renderPaymentSuccess = () => {
    return (
      <Modal animationType="slide" transparent={true} visible={paymentModalVisible}>
        <View style={styles.container1}>
          <Text style={styles.successText}>Compra realizada com sucesso!</Text>
          <Text style={styles.infoText}>Obrigado por sua compra. Seu pedido será processado em breve.</Text>
        </View>
      </Modal>

    );
  }

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
              <TouchableOpacity color='#44ff' onPress={() => setModalVisible(false)}>
                Voltar
              </TouchableOpacity>
              <TextInput
                style={
                  cardNumberError
                    ? styles.inputBorderError
                    : cardNumberSuccess
                      ? styles.inputBorderSuccess
                      : styles.input
                }
                placeholder="Número do Cartão"
                value={cardNumber}
                onChangeText={setCardNumber}


              />
              <TextInput
                style={
                  cvvError
                    ? styles.inputBorderError
                    : cvvSuccess
                      ? styles.inputBorderSuccess
                      : styles.input
                }
                placeholder="CVV"
                value={cvv}
                onChangeText={setCVV}
              />
              <TextInput
                style={
                  expirationError
                    ? styles.inputBorderError
                    : expirationSuccess
                      ? styles.inputBorderSuccess
                      : styles.input
                }
                placeholder="Vencimento (MM/AA)"
                value={expiration}
                onChangeText={setExpiration}
              />
              <TextInput
                style={
                  cardHolderNameError
                    ? styles.inputBorderError
                    : cardHolderNameSuccess
                      ? styles.inputBorderSuccess
                      : styles.input
                }
                placeholder="Nome do Titular"
                value={cardHolderName}
                onChangeText={setCardHolderName}
                
              />
              <View>{finish}</View>
            </View>

          ) : (
            <View style={styles.modalView}>
              <TouchableOpacity color='#44ff' onPress={() => setModalVisible(false)}>
                Voltar
              </TouchableOpacity>
              <TextInput
                style={styles.input}
                placeholder="R$ 00,00"
                value={pixValue}
                onChangeText={setPixValue}
                keyboardType="numeric"
              />
            </View>
          )}


          <TouchableOpacity style={styles.submitButton} onPress={() => handlePaymentSubmit()}>

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
});

export default Payment;