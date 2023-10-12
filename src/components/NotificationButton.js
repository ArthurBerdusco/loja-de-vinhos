import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const NotificationButton = (props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={()=>{
        props.navigation.navigate('Notifications')
      }}
    >
      <Icon name="bell" size={24} color="#333">

        <View style={styles.notificationBadge}>
          <Text style={styles.notificationText}>{props.notifications + '+'}</Text>
        </View>

      </Icon>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationBadge: {
    position: 'absolute', // Isso posiciona o badge de notificação absolutamente
    backgroundColor: 'red',
    borderRadius: 10, // Define o tamanho da bolinha vermelha
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    top: -5, // Posiciona o badge 5 pixels acima do ícone do sino
    left: 10, // Posiciona o badge 18 pixels à direita do ícone do sino
  },
  notificationText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default NotificationButton;
