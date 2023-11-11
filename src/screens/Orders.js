import { useNavigation } from "@react-navigation/native";
import { Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

const Order = ({ order }) => {

    const navigation = useNavigation();

    const calculateTotalValue = (wines) => {
        let totalValue = 0;
        for (const wine of wines) {
            totalValue += wine.preco;
        }
        return totalValue.toFixed(2);
    };


    return (
        <TouchableOpacity style={styles.orderContainer}
            onPress={() => navigation.navigate('OrderDetail', { order })}>

            <Text style={styles.orderInfo}>{`ID: `}<Text style={styles.orderID}>{order.orderID}</Text></Text>
            <Text style={styles.orderDate}>{`Data do Pedido: ${order.orderDate}`}</Text>
            <Text style={styles.orderValue}>{`Valor: ${order.orderValue = calculateTotalValue(order.orderWines)}`}</Text>
            <Text style={styles.deliveryStatus}>{`Status de Entrega: ${order.deliveryStatus}`}</Text>
        </TouchableOpacity>
    );
}

const tintos = [
    {
        nome: 'Tinto Moriet',
        preco: 299.99,
        teorAlcool: 13.5,
        imagem: require('../assets/img/vinhos/tinto/1.png'),
        bandeira: require('../assets/img/paises/china.png'),
        pais: 'China',
        cidade: 'Baoshan',
        rating: 5
    },
    {
        nome: 'Sauvignon',
        preco: 25.99,
        teorAlcool: 13.8,
        imagem: require('../assets/img/vinhos/tinto/2.png'),
        bandeira: require('../assets/img/paises/france.png'),
        pais: 'França',
        cidade: 'Bordeaux',
        rating: 4.7
    },
    {
        nome: 'Merlot Reserva',
        preco: 189.50,
        teorAlcool: 14.2,
        imagem: require('../assets/img/vinhos/tinto/3.png'),
        bandeira: require('../assets/img/paises/italy.png'),
        pais: 'Itália',
        cidade: 'Toscana',
        rating: 4.2
    },
    {
        nome: 'Pinot Elegance',
        preco: 129.99,
        teorAlcool: 12.5,
        imagem: require('../assets/img/vinhos/tinto/4.png'),
        bandeira: require('../assets/img/paises/new.png'),
        pais: 'Nova Zelândia',
        cidade: 'Marlborough',
        rating: 4.8
    },
    {
        nome: 'Malbec Intenso',
        preco: 79.90,
        teorAlcool: 15.0,
        imagem: require('../assets/img/vinhos/tinto/5.png'),
        bandeira: require('../assets/img/paises/argentina.png'),
        pais: 'Argentina',
        cidade: 'Mendoza',
        rating: 4.5
    }
];

const roses = [
    {
        nome: 'Rosé Seco',
        preco: 190.39,
        teorAlcool: 11.5,
        imagem: require('../assets/img/vinhos/rose/1.png'),
        bandeira: require('../assets/img/paises/south-korea.png'),
        pais: 'Coreia do Sul',
        cidade: 'Geoje',
        rating: 4.3
    },
    {
        nome: 'Provence Rosé',
        preco: 35.50,
        teorAlcool: 12.0,
        imagem: require('../assets/img/vinhos/rose/2.png'),
        bandeira: require('../assets/img/paises/france.png'),
        pais: 'França',
        cidade: 'Provence',
        rating: 4.8
    },
    {
        nome: 'Rosé Elegance',
        preco: 89.99,
        teorAlcool: 11.8,
        imagem: require('../assets/img/vinhos/rose/3.png'),
        bandeira: require('../assets/img/paises/spain.png'),
        pais: 'Espanha',
        cidade: 'Rioja',
        rating: 4.5
    },
    {
        nome: 'Rosé do Vale',
        preco: 120.75,
        teorAlcool: 12.5,
        imagem: require('../assets/img/vinhos/rose/4.png'),
        bandeira: require('../assets/img/paises/china.png'),
        pais: 'China',
        cidade: 'Douro',
        rating: 4.2
    },
    {
        nome: 'Rosé Refrescante',
        preco: 55.00,
        teorAlcool: 10.5,
        imagem: require('../assets/img/vinhos/rose/5.png'),
        bandeira: require('../assets/img/paises/italy.png'),
        pais: 'Itália',
        cidade: 'Sicília',
        rating: 4.6
    }
];

const espumantes = [
    {
        nome: 'Espumante Brut',
        preco: 345.29,
        teorAlcool: 12.8,
        imagem: require('../assets/img/vinhos/espumante/1.png'),
        bandeira: require('../assets/img/paises/china.png'),
        pais: 'China',
        cidade: 'Guilin',
        rating: 3.3
    },
    {
        nome: 'Prosecco Dry',
        preco: 28.99,
        teorAlcool: 11.0,
        imagem: require('../assets/img/vinhos/espumante/2.png'),
        bandeira: require('../assets/img/paises/italy.png'),
        pais: 'Itália',
        cidade: 'Veneto',
        rating: 4.7
    },
    {
        nome: 'Prestige',
        preco: 198.50,
        teorAlcool: 12.5,
        imagem: require('../assets/img/vinhos/espumante/3.png'),
        bandeira: require('../assets/img/paises/france.png'),
        pais: 'França',
        cidade: 'Champagne',
        rating: 4.2
    },
    {
        nome: 'Cava Espanhola',
        preco: 65.75,
        teorAlcool: 11.5,
        imagem: require('../assets/img/vinhos/espumante/4.png'),
        bandeira: require('../assets/img/paises/spain.png'),
        pais: 'Espanha',
        cidade: 'Penedès',
        rating: 4.5
    },
    {
        nome: 'Asti Spumante',
        preco: 42.00,
        teorAlcool: 7.5,
        imagem: require('../assets/img/vinhos/espumante/5.png'),
        bandeira: require('../assets/img/paises/italy.png'),
        pais: 'Itália',
        cidade: 'Piemonte',
        rating: 4.8
    }
];

const brancos = [
    {
        nome: 'Chardonnay',
        preco: 150.29,
        teorAlcool: 12.0,
        imagem: require('../assets/img/vinhos/branco/1.png'),
        bandeira: require('../assets/img/paises/germany.png'),
        pais: 'Alemanha',
        cidade: 'Heidelberg',
        rating: 4.2
    },
    {
        nome: 'Sauvignon Blanc',
        preco: 55.99,
        teorAlcool: 11.5,
        imagem: require('../assets/img/vinhos/branco/2.png'),
        bandeira: require('../assets/img/paises/new.png'),
        pais: 'Nova Zelândia',
        cidade: 'Marlborough',
        rating: 4.6
    },
    {
        nome: 'Pinot Grigio',
        preco: 89.50,
        teorAlcool: 13.2,
        imagem: require('../assets/img/vinhos/branco/3.png'),
        bandeira: require('../assets/img/paises/italy.png'),
        pais: 'Itália',
        cidade: 'Alto Adige',
        rating: 4.3
    },
    {
        nome: 'Riesling Clássico',
        preco: 120.75,
        teorAlcool: 10.5,
        imagem: require('../assets/img/vinhos/branco/4.png'),
        bandeira: require('../assets/img/paises/germany.png'),
        pais: 'Alemanha',
        cidade: 'Mosel',
        rating: 4.8
    },
    {
        nome: 'Albariño',
        preco: 65.00,
        teorAlcool: 12.0,
        imagem: require('../assets/img/vinhos/branco/5.png'),
        bandeira: require('../assets/img/paises/spain.png'),
        pais: 'Espanha',
        cidade: 'Rias Baixas',
        rating: 4.5
    }
];

const Orders = ({ navigation }) => {

    const orderList = [
        { orderID: '918239182', orderDate: '01/10/2023', orderValue: '', orderWines: [tintos[1], roses[3], tintos[4]], deliveryStatus: 'Em trânsito' },
        { orderID: '129380232', orderDate: '05/10/2023', orderValue: '', orderWines: [brancos[4], tintos[3], roses[2]], deliveryStatus: 'Entregue' },
        { orderID: '392783012', orderDate: '10/10/2023', orderValue: '', orderWines: [roses[3], roses[4], tintos[1]], deliveryStatus: 'Pendente' },
        { orderID: '626382911', orderDate: '10/10/2023', orderValue: '', orderWines: [roses[1], tintos[2], roses[0], espumantes[1], espumantes[4], tintos[2]], deliveryStatus: 'Pendente' },
    ];

    return (
        <>
            <FlatList
                data={orderList}
                keyExtractor={(item, index) => index.toString()}
                style={styles.container}
                renderItem={({ item }) => <Order order={item} />}
            />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#eaeaea'
    },
    orderContainer: {
        backgroundColor: "#f8f8f8",
        padding: 16,
        marginBottom: 16,
        borderRadius: 8,
    },
    orderInfo: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 8,
    },
    orderID: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#9a9a9a",
    },
    orderDate: {
        fontSize: 14,
    },
    orderValue: {
        fontSize: 14,
    },
    deliveryStatus: {
        fontSize: 14,
    },
});

export default Orders;
