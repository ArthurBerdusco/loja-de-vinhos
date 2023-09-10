import { useState } from "react";
import { View, Text, Button, ScrollView, Image, StyleSheet } from "react-native"

const vinhos = [
    {
        nome: 'Vinho Tinto Reserva',
        preco: 29.99,
        teorAlcool: 13.5,
        imagem: require('../assets/img/vinho1.jpg'),
    },
    {
        nome: 'Vinho Branco Chardonnay',
        preco: 24.99,
        teorAlcool: 12.0,
        imagem: require('../assets/img/vinho2.jpg'),
    },
    {
        nome: 'Vinho Rosé Seco',
        preco: 19.99,
        teorAlcool: 11.5,
        imagem: require('../assets/img/vinho3.jpg'),
    },
    {
        nome: 'Vinho Espumante Brut',
        preco: 34.99,
        teorAlcool: 12.8,
        imagem: require('../assets/img/vinho4.jpg'),
    },
    {
        nome: 'Vinho Tinto Cabernet Sauvignon',
        preco: 27.99,
        teorAlcool: 14.0,
        imagem: require('../assets/img/vinho5.jpg'),
    },
    {
        nome: 'Vinho Branco Sauvignon Blanc',
        preco: 22.99,
        teorAlcool: 11.8,
        imagem: require('../assets/img/vinho6.jpg'),
    },
];


const Home = ({ navigation }) => {

    return (
        <ScrollView>
            <View style={styles.container}>
                {vinhos.map((vinho, index) => (
                    <Vinho
                        key={index}
                        nome={vinho.nome}
                        preco={vinho.preco}
                        teorAlcool={vinho.teorAlcool}
                        imagem={vinho.imagem}
                        navigation={navigation}
                    />
                ))}
            </View>
        </ScrollView>
    )

}

const Vinho = (props) => {


    return (
        <View>
            <Text style={styles.title}>{props.nome}</Text>
            <Text style={styles.title}>Preço: {props.preco}</Text>
            <Text style={styles.title}>Teor: {props.teorAlcool}%</Text>
            <View style={styles.imageContainer}>
                <Image source={(props.imagem)} style={styles.image} />
            </View>
            <View style={styles.button}>
                <Button title="Comprar" onPress={() => props.navigation.navigate('Review', { vinho: props })} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ffffff',

    },
    title: {
        textAlign: 'center',
        fontSize: 18
    },
    imageContainer: {
        alignItems: 'center'
    },
    image: {
        alignItems: 'center',
        width: 50,
        height: 200,
    },
    button:{
        marginTop: 10,
        marginBottom: 70,
        alignItems: "center"
    }

})

export default Home