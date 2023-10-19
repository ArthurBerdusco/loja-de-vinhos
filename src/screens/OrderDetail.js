import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const OrderDetail = ({ route }) => {
    const order = route.params.order;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.orderInfoContainer}>
                <Text style={styles.orderInfo}>{`Pedido ${order.num}:`}</Text>
                <Text style={styles.orderID}>{order.orderID}</Text>
            </View>
            <Text style={styles.orderDate}>{`Data do Pedido: ${order.orderDate}`}</Text>
            <Text style={styles.orderValue}>{`Valor: ${order.orderValue}`}</Text>
            <Text style={styles.deliveryStatus}>{`Status de Entrega: ${order.deliveryStatus}`}</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    orderInfoContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
    },
    orderInfo: {
        fontSize: 24,
        fontWeight: "bold",
    },
    orderID: {
        fontSize: 24,
        fontWeight: "bold",
        color: "blue",
        marginLeft: 8,
    },
    orderDate: {
        fontSize: 18,
        marginBottom: 8,
    },
    orderValue: {
        fontSize: 18,
        marginBottom: 8,
    },
    deliveryStatus: {
        fontSize: 18,
        marginBottom: 8,
    },
});

export default OrderDetail;
