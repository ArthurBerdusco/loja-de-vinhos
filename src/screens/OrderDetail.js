import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { FlatList } from "react-native";

const OrderDetail = ({ route }) => {
    const order = route.params.order;

    const renderWineItem = ({ item }) => {
        if (item && item.nome) {
            return (
                <View style={styles.wineItemContainer}>
                    <Image source={item.imagem} style={styles.wineImage} />
                    <View style={styles.wineInfo}>
                        <Text style={styles.wineName}>{item.nome}</Text>
                        <Text style={styles.winePrice}>{`Preço: ${item.preco}`}</Text>
                        <Text style={styles.wineOrigin}>{`Origem: ${item.origem}`}</Text>
                        <Text style={styles.wineRating}>{`Avaliação: ${item.rating}`}</Text>
                    </View>
                </View>
            );
        } else {
            return null; 
        }
    };
    

    return (
        <ScrollView contentContainerStyle={styles.container}>

            <Text style={styles.orderID}>{`ID: ${order.orderID}`}</Text>

            <Text style={styles.orderDate}>{`Data do Pedido: ${order.orderDate}`}</Text>
            <Text style={styles.orderValue}>{`Valor: ${order.orderValue}`}</Text>
            <Text style={styles.deliveryStatus}>{`Status de Entrega: ${order.deliveryStatus}`}</Text>
            <FlatList
                data={order.orderWines}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderWineItem}
            />
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

    orderID: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
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
    wineItemContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
    },
    wineImage: {
        width: 100,
        height: 150,
        resizeMode: 'contain',
        marginRight: 16,
    },
    wineInfo: {
        flex: 1,
    },
    wineName: {
        fontSize: 18,
        fontWeight: "bold",
    },
    winePrice: {
        fontSize: 16,
    },
    wineOrigin: {
        fontSize: 16,
    },
    wineRating: {
        fontSize: 16,
    },
});

export default OrderDetail;
