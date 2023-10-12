import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-web";

import { useState } from "react";

const notifications = [
    {
        nome: 'Oferta Especial',
        descricao: 'Vinho Tinto Cabernet Sauvignon 2018 em promoção!',
        valor: 'R$ 29,90',
        data: '1h',
        visualizaca: false
    },
    {
        nome: 'Lançamento',
        descricao: 'Novo Vinho Branco Chardonnay Safra 2024 disponível!',
        valor: 'R$ 45,50',
        data: '2h',
        visualizaca: true
    },
    {
        nome: 'Desconto Exclusivo',
        descricao: 'Desconto de 15% em todas as garrafas de Malbec!',
        valor: '15% de desconto',
        data: '7h',
        visualizaca: false
    },
    {
        nome: 'Degustação',
        descricao: 'Degustação de Vinhos Premium no sábado, participe!',
        valor: 'Evento Gratuito',
        data: '1d',
        visualizaca: true
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

    const [allSelected, setAllSelected] = useState(true);

    const handleToggle = () => {
        setAllSelected(!allSelected);´

        if(){

        }
    };

    return (
        <View style={styles.container}>

            <View style={styles.container}>
                <View style={styles.toggleContainer}>
                    <CustomToggleButton label="Todas" selected={allSelected} onPress={handleToggle} />
                    <CustomToggleButton label="Não Lidas" selected={!allSelected} onPress={handleToggle} />
                </View>
            </View>


            {notifications.map((note, index) => (
                <Notification
                    key={index}
                    nome={note.nome}
                    descricao={note.descricao}
                    valor={note.valor}
                    data={note.data}
                />
            ))}
        </View>
    );
};

const Notification = (props) => {
    return (
        <View style={styles.notification}>
            <Text style={styles.notificationTitle}>{props.nome}</Text>
            <Text style={styles.notificationText}>{props.descricao}</Text>
            <Text style={styles.notificationText}>{props.valor}</Text>
            <Text style={styles.notificationDate}>{props.data}</Text>
        </View>
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
        backgroundColor: '#fafafa', // Cor de fundo
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        marginBottom: 10,
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2, // Sombreamento (Android)
        shadowColor: '#000', // Sombreamento (iOS)
        shadowOffset: { width: 0, height: 2 }, // Sombreamento (iOS)
        shadowOpacity: 0.2, // Sombreamento (iOS)
        shadowRadius: 2, // Sombreamento (iOS)
    },
    notificationTitle: {
        fontSize: 20,
        color: 'red',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    notificationText: {
        fontSize: 16,
        color: 'gray',
        marginBottom: 5,
    },
    notificationDate: {
        fontSize: 14,
        color: 'gray'
    },
    toggleContainer: {
      flexDirection: 'row',
    },
    toggleButton: {
      padding: 10,
      marginRight: 10,
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
      color: 'white',
    },
});

export default Notifications;
