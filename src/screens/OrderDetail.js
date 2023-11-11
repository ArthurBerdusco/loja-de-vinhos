import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, FlatList } from "react-native";

const OrderDetail = ({ route }) => {
    const order = route.params.order;

    const renderWineItem = ({ item }) => {
        if (item) {
            const vinho = item[0]
            return (
                <View style={styles.wineItemContainer}>
                    <Image source={vinho.imagem} style={styles.wineImage} />
                    <View style={styles.wineInfo}>
                        <Text style={styles.wineName}>{vinho.nome}</Text>
                        <Text style={styles.wineOrigin}>{`País: ${vinho.pais}`}</Text>
                        <Text style={styles.wineOrigin}>{`Cidade: ${vinho.cidade}`}</Text>
                        <Text style={styles.wineRating}>{`Avaliação: ${vinho.rating}`}</Text>
                    </View>
                    <View style={styles.wineDetails}>
                        <Text style={styles.winePrice}>{`R$: ${vinho.preco}`}</Text>
                        <Text style={styles.wineQuantity}>{`Qnt: ${item[1]}`}</Text>
                        <Text style={styles.wineTotal}>{`Total: ${vinho.preco * item[1]}`}</Text>
                    </View>
                </View>
            );
        } else {
            return null;
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.orderInfoContainer}>
                <Text style={styles.orderInfo}>Informações do pedido:</Text>
                <Text style={styles.orderID}>{`ID: ${order.orderID}`}</Text>
                <Text style={styles.orderDate}>{`Data: ${order.orderDate}`}</Text>
                <Text style={styles.orderValue}>{`Valor: ${order.orderValue}`}</Text>
                <Text style={styles.deliveryStatus}>{`Status de Entrega: ${order.deliveryStatus}`}</Text>
            </View>
           
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
        backgroundColor: '#eaeaea'
    },
    orderInfoContainer: {
        backgroundColor: 'white',
        padding: 12,
        marginBottom: 16,
        borderRadius: 10,
    },
    orderInfo: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 8,
    },
    orderID: {
        fontSize: 18,
        color: "#333",
        marginBottom: 8,
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
        marginBottom: 16,
    },
    wineItemContainer: {
        padding: 14,
        backgroundColor: 'white',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        marginBottom: 16,
        borderRadius: 10,
    },
    wineImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginRight: 16,
    },
    wineInfo: {
        flex: 1,
        marginRight: 16,
    },
    wineDetails: {
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    wineName: {
        fontSize: 18,
        fontWeight: "bold",
    },
    winePrice: {
        fontSize: 16,
    },
    wineQuantity: {
        fontSize: 16,
        marginBottom: 4,
    },
    wineTotal: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default OrderDetail;
