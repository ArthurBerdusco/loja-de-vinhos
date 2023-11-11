import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const notifications = [
    {
        nome: 'Oferta Especial',
        descricao: 'Vinho Tinto Cabernet Sauvignon 2018 em promoção!',
        valor: 'R$ 29,90',
        data: '1h',
        viewed: false
    },
    {
        nome: 'Lançamento',
        descricao: 'Novo Vinho Branco Chardonnay Safra 2024 disponível!',
        valor: 'R$ 45,50',
        data: '2h',
        viewed: true
    },
    {
        nome: 'Desconto Exclusivo',
        descricao: 'Desconto de 15% em todas as garrafas de Malbec!',
        valor: '15% de desconto',
        data: '7h',
        viewed: false
    },
    {
        nome: 'Somente hoje',
        descricao: 'Cupom de 100R$ para compras acima de 300R$!',
        valor: '100R$',
        data: '9h',
        viewed: false
    },
    {
        nome: 'Degustação',
        descricao: 'Degustação de Vinhos Premium no sábado, participe!',
        valor: 'Evento Gratuito',
        data: '1d',
        viewed: true
    },
];

const CustomToggleButton = ({ label, selected, onPress }) => {
    return (
        <TouchableOpacity style={[styles.toggleButton, selected ? styles.selected : null]} onPress={onPress}>
            <Text style={[styles.toggleButtonText, selected ? styles.selectedText : null]}>{label}</Text>
        </TouchableOpacity>
    );
};

const Notifications = ({ navigation }) => {
    const [selection, setSelection] = useState('Todas'); // Inicialmente, exibe todas
    const [notificationData, setNotificationData] = useState(notifications); // Substitua o array com suas notificações reais

    const handleToggle = (newSelection) => {
        setSelection(newSelection);
    };

    const handleNotificationPress = (notification) => {
        // Verifique alguma condição específica na notificação antes de marcá-la como "viewed".
        if (!notification.viewed) {
            const updatedNotifications = notificationData.map((n) =>
                n === notification ? { ...n, viewed: true } : n
            );
            setNotificationData(updatedNotifications);
        }
    };

    // Filtrar as notificações com base na seleção atual
    const filteredNotifications = selection === 'Todas' ? notificationData : notificationData.filter(notification => !notification.viewed);

    return (
        <View style={styles.container}>
            <View style={styles.toggleContainer}>
                <CustomToggleButton label="Todas" selected={selection === 'Todas'} onPress={() => handleToggle('Todas')} />
                <CustomToggleButton label="Não Lidas" selected={selection === 'Não Lidas'} onPress={() => handleToggle('Não Lidas')} />
            </View>
            {filteredNotifications.map((note, index) => (
                <Notification
                    key={index}
                    viewed={note.viewed}
                    descricao={note.descricao}
                    valor={note.valor}
                    data={note.data}
                    navigation={navigation}
                    handleNotificationPress={() => handleNotificationPress(note)} // Passa a função diretamente
                />
            ))}
        </View>
    );
};

const Notification = (props) => {
    const bolinhaStyle = props.viewed ? styles.bolinhaNaoLida : styles.bolinhaLida;

    return (
        <TouchableOpacity style={styles.notification} onPress={() => {
            props.handleNotificationPress(); // Chama a função passada como prop
            props.navigation.navigate('Notification1');
        }}>
            <View style={bolinhaStyle}></View>
            <View style={styles.notificationContent}>
                <Text style={styles.notificationText}>{props.descricao}</Text>
                <Text style={styles.notificationDate}>{props.data}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#eaeaea'
    },
    notification: {
        backgroundColor: '#fafafa',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        width: '95%',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        paddingLeft: 20,
        paddingRight: 20
    },
    notificationContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    bolinhaLida: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'blue',
        marginRight: 30,
    },
    bolinhaNaoLida: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'transparent',
        marginRight: 30,
    },
    notificationText: {
        fontSize: 14,
        color: 'gray',
        marginRight: 30,
        width: '80%'
    },
    notificationDate: {
        fontSize: 14,
        color: 'gray',
        
    },
    toggleContainer: {
        flexDirection: 'row',
    },
    toggleButton: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginRight: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'blue',
    },
    selected: {
        backgroundColor: 'blue',
    },
    toggleButtonText: {
        color: 'blue',
    },
    selectedText: {
        color: 'white'
    },
});

export default Notifications;
