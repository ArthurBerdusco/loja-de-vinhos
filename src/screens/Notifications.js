import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const notifications = [
    {
        nome: 'Oferta Especial',
        descricao: 'Vinho Tinto Cabernet Sauvignon 2018 em promoção!',
        valor: 'R$ 29,90',
        data: '1h',
        viwed: false
    },
    {
        nome: 'Lançamento',
        descricao: 'Novo Vinho Branco Chardonnay Safra 2024 disponível!',
        valor: 'R$ 45,50',
        data: '2h',
        viwed: true
    },
    {
        nome: 'Desconto Exclusivo',
        descricao: 'Desconto de 15% em todas as garrafas de Malbec!',
        valor: '15% de desconto',
        data: '7h',
        viwed: false
    },
    {
        nome: 'Degustação',
        descricao: 'Degustação de Vinhos Premium no sábado, participe!',
        valor: 'Evento Gratuito',
        data: '1d',
        viwed: true
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

    const handleToggle = (newSelection) => {
        setSelection(newSelection);
    };

    // Filtrar as notificações com base na seleção atual
    const filteredNotifications = selection === 'Todas' ? notifications : notifications.filter(notification => !notification.viwed);

    return (
        <View style={styles.container}>
            <View style={styles.toggleContainer}>
                <CustomToggleButton label="Todas" selected={selection === 'Todas'} onPress={() => handleToggle('Todas')} />
                <CustomToggleButton label="Não Lidas" selected={selection === 'Não Lidas'} onPress={() => handleToggle('Não Lidas')} />
            </View>
            {filteredNotifications.map((note, index) => (
                <Notification
                    key={index}
                    viwed={note.viwed}
                    descricao={note.descricao}
                    valor={note.valor}
                    data={note.data}
                />
            ))}
        </View>
    );
};

const Notification = (props) => {
    const bolinhaStyle = props.viwed ? styles.bolinhaLida : styles.bolinhaNaoLida;

    return (
        <TouchableOpacity style={styles.notification} onPress={()=>{props.viewd=true}}>
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
    },
    notificationContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bolinhaLida: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'blue',
        marginRight: 10,
    },
    bolinhaNaoLida: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'transparent',
        marginRight: 10,
    },
    notificationText: {
        fontSize: 16,
        color: 'gray',
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
