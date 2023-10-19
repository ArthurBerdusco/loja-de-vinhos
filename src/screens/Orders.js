import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, StyleSheet, FlatList } from "react-native";
import { TouchableOpacity } from "react-native";

const Order = ({ order }) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.orderContainer}
            onPress={() => navigation.navigate('OrderDetail', order={order})}>

            <Text style={styles.orderInfo}>{`Pedido ${order.num}: `}<Text style={styles.orderID}>{order.orderID}</Text></Text>
            <Text style={styles.orderDate}>{`Data do Pedido: ${order.orderDate}`}</Text>
            <Text style={styles.orderValue}>{`Valor: ${order.orderValue}`}</Text>
            <Text style={styles.deliveryStatus}>{`Status de Entrega: ${order.deliveryStatus}`}</Text>
        </TouchableOpacity>
    );
}

const generateRandomID = () => {
    return Math.floor(1000000 + Math.random() * 9000000).toString();
};

const Orders = () => {

    const [orderList, setOrderList] = useState([
        { num: '1', orderID: generateRandomID(), orderDate: '01/10/2023', orderValue: 'R$50', deliveryStatus: 'Em trânsito' },
        { num: '2', orderID: generateRandomID(), orderDate: '05/10/2023', orderValue: 'R$30', deliveryStatus: 'Entregue' },
        { num: '3', orderID: generateRandomID(), orderDate: '10/10/2023', orderValue: 'R$45', deliveryStatus: 'Pendente' },
        { num: '4', orderID: generateRandomID(), orderDate: '10/10/2023', orderValue: 'R$45', deliveryStatus: 'Pendente' },
        { num: '5', orderID: generateRandomID(), orderDate: '10/10/2023', orderValue: 'R$45', deliveryStatus: 'Pendente' },
        { num: '6', orderID: generateRandomID(), orderDate: '10/10/2023', orderValue: 'R$45', deliveryStatus: 'Pendente' },
        { num: '7', orderID: generateRandomID(), orderDate: '10/10/2023', orderValue: 'R$45', deliveryStatus: 'Pendente' },
    ]);

    return (
        <FlatList
            data={orderList}
            keyExtractor={(item, index) => index.toString()}
            style={styles.container}
            renderItem={({ item }) => <Order order={item} />}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
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
