import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

const notifications = [
    {
        nome: 'Oferta Especial',
        descricao: 'Vinho Tinto Cabernet Sauvignon 2018 em promoção!',
        valor: 'R$ 29,90',
        data: '10/10/2023',
    },
    {
        nome: 'Lançamento',
        descricao: 'Novo Vinho Branco Chardonnay Safra 2024 disponível!',
        valor: 'R$ 45,50',
        data: '09/10/2023',
    },
    {
        nome: 'Desconto Exclusivo',
        descricao: 'Desconto de 15% em todas as garrafas de Malbec!',
        valor: '15% de desconto',
        data: '08/10/2023',
    },
    {
        nome: 'Degustação',
        descricao: 'Degustação de Vinhos Premium no sábado, participe!',
        valor: 'Evento Gratuito',
        data: '07/10/2023',
    },
];

const Notifications = ({ navigation }) => {
    return (
        <View style={styles.container}>
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
        borderRadius: 10,
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
        color: 'gray',
    },
});

export default Notifications;
