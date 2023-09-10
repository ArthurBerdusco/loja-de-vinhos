import { View, Text, Button, ScrollView, Image, StyleSheet, TouchableOpacity } from "react-native"

const vinhos = [
    {
        nome: 'Vinho Tinto Reserva',
        preco: 299.99,
        teorAlcool: 13.5,
        imagem: require('../assets/img/vinho1.jpg'),
    },
    {
        nome: 'Vinho Branco Chardonnay',
        preco: 150.29,
        teorAlcool: 12.0,
        imagem: require('../assets/img/vinho2.jpg'),
    },
    {
        nome: 'Vinho Rosé Seco',
        preco: 190.39,
        teorAlcool: 11.5,
        imagem: require('../assets/img/vinho3.jpg'),
    },
    {
        nome: 'Vinho Espumante Brut',
        preco: 345.29,
        teorAlcool: 12.8,
        imagem: require('../assets/img/vinho4.jpg'),
    },
    {
        nome: 'Vinho Tinto Cabernet',
        preco: 270.79,
        teorAlcool: 14.0,
        imagem: require('../assets/img/vinho5.jpg'),
    },
    {
        nome: 'Vinho Branco Sauvignon',
        preco: 220.99,
        teorAlcool: 11.8,
        imagem: require('../assets/img/vinho6.jpg'),
    },
];


const Home = ({ navigation }) => {

    return (
        <>
            <ScrollView style={{ backgroundColor: 'white' }}>
                <View style={styles.container}>

                    <View style={styles.row}>
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
                </View>

            </ScrollView>
            <View style={styles.menu}>
                <TouchableOpacity>
                    <View style={styles.menuItem}>
                        <Text style={styles.textMenu}>Tinto</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.menuItem}>
                        <Text style={styles.textMenu}>
                            Branco
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.menuItem}>
                        <Text style={styles.textMenu}>
                            Rosé
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.menuItem}>
                        <Text style={styles.textMenu}>
                            Espumante
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    )

}

const Vinho = (props) => {

    return (
        <View style={styles.card}>
            <View style={styles.imageContainer}>
                <Image source={(props.imagem)} style={styles.image} />
            </View>
            <Text style={styles.text}>{props.nome}</Text>
            <Text style={styles.text}>Preço: {props.preco}</Text>
            <Text style={styles.text}>Teor: {props.teorAlcool}%</Text>
            <View style={styles.button}>
                <Button title="Comprar" color='green' onPress={() => props.navigation.navigate('Review', { vinho: props })} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'black',

    },
    row: {
        flexDirection: 'row',

        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },

    card: {
        width: 182,
        height: 430,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 10,
        margin: 4,
        backgroundColor: "#ffffff"
    },

    title: {
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 40,
        color: '#AA00AB',
        fontStyle: 'italic'


    },
    text: {
        marginTop: 10,
        textAlign: 'center',
        fontSize: 14
    },
    imageContainer: {
        alignItems: 'center',
    },
    image: {
        alignItems: 'center',
        width: 60,
        height: 250,
        marginTop: 20,
    },
    button: {
        marginTop: 20,
        marginBottom: 70,
        alignItems: "center",
    },
    menu: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'black'

    },
    menuItem: {
        borderWidth: 0.3,
        borderColor: 'gray',
        height: 50,
        width: 85,
        margin: 5,
        borderRadius: 5,
        justifyContent: 'center',
        backgroundColor: '#ab1239',
      },

    textMenu: {
        textAlign: 'center',
        color: 'white',
    }

})

export default Home