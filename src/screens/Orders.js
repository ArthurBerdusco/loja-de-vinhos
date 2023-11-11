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
            onPress={() => navigation.navigate('OrderDetail', {order})}>

            <Text style={styles.orderInfo}>{`ID: `}<Text style={styles.orderID}>{order.orderID}</Text></Text>
            <Text style={styles.orderDate}>{`Data do Pedido: ${order.orderDate}`}</Text>
            <Text style={styles.orderValue}>{`Valor: ${order.orderValue =  calculateTotalValue(order.orderWines)}`}</Text>
            <Text style={styles.deliveryStatus}>{`Status de Entrega: ${order.deliveryStatus}`}</Text>
        </TouchableOpacity>
    );
}

const vinhos = [
    {
        nome: 'Vinho Tinto Moriet',
        preco: 299.99,
        teorAlcool: 13.5,
        imagem: require('../assets/img/vinho1.png'),
        bandeira: require('../assets/img/china.png'),
        origem: 'Baoshan, China',
        rating: 5

    },
    {
        nome: 'Vinho Branco Chardonnay',
        preco: 150.29,
        teorAlcool: 12.0,
        imagem: require('../assets/img/vinho2.png'),
        bandeira: require('../assets/img/germany.png'),
        origem: 'Heidelberg, Alemanha',
        rating: 4.2
    },
    {
        nome: 'Vinho Rosé Seco',
        preco: 190.39,
        teorAlcool: 11.5,
        imagem: require('../assets/img/vinho3.png'),
        bandeira: require('../assets/img/south-korea.png'),
        origem: 'Geoje-si, Coreia do Sul',
        rating: 4.3
    },
    {
        nome: 'Vinho Espumante Brut',
        preco: 345.29,
        teorAlcool: 12.8,
        imagem: require('../assets/img/vinho4.png'),
        bandeira: require('../assets/img/china.png'),
        origem: 'Guilin, China',
        rating: 3.3
    },
    {
        nome: 'Vinho Tinto Cabernet',
        preco: 270.79,
        teorAlcool: 14.0,
        imagem: require('../assets/img/vinho5.png'),
        bandeira: require('../assets/img/switzerland.png'),
        origem: 'Grindelwald, Suiça',
        rating: 5
    },
    {
        nome: 'Vinho Branco Sauvignon',
        preco: 220.99,
        teorAlcool: 11.8,
        imagem: require('../assets/img/vinho6.png'),
        bandeira: require('../assets/img/germany.png'),
        origem: 'Yangshuo , China',
        rating: 4.5
    },
];

const Orders = ({navigation}) => {

    const orderList = [
        {  orderID: '918239182', orderDate: '01/10/2023',orderValue: '', orderWines: [vinhos[1], vinhos[3], vinhos[5]], deliveryStatus: 'Em trânsito' },
        {  orderID: '129380232', orderDate: '05/10/2023',orderValue: '', orderWines: [vinhos[5], vinhos[3], vinhos[2]], deliveryStatus: 'Entregue' },
        {  orderID: '392783012', orderDate: '10/10/2023',orderValue: '', orderWines: [vinhos[3], vinhos[0], vinhos[1]], deliveryStatus: 'Pendente' },
        {  orderID: '626382911', orderDate: '10/10/2023',orderValue: '', orderWines: [vinhos[3], vinhos[2], vinhos[0],vinhos[5], vinhos[4], vinhos[2]], deliveryStatus: 'Pendente' },
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
