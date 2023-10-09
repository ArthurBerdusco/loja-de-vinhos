import { View, Text, Button, ScrollView, Image, StyleSheet, TouchableOpacity } from "react-native"
import homeIcon from '../assets/img/home_icon.png'
import cartIcon from '../assets/img/cart_icon.png'
import orderIcon from '../assets/img/orders_icon.png'
import searchIcon from '../assets/img/search_icon.png'


const vinhos = [
    {
        nome: 'Vinho Tinto Reserva',
        preco: 299.99,
        teorAlcool: 13.5,
        imagem: require('../assets/img/vinho1.jpg'),
        bandeira: require('../assets/img/china.png'),
    },
    {
        nome: 'Vinho Branco Chardonnay',
        preco: 150.29,
        teorAlcool: 12.0,
        imagem: require('../assets/img/vinho2.jpg'),
        bandeira: require('../assets/img/germany.png'),
    },
    {
        nome: 'Vinho Rosé Seco',
        preco: 190.39,
        teorAlcool: 11.5,
        imagem: require('../assets/img/vinho3.jpg'),
        bandeira: require('../assets/img/south-korea.png'),
    },
    {
        nome: 'Vinho Espumante Brut',
        preco: 345.29,
        teorAlcool: 12.8,
        imagem: require('../assets/img/vinho4.jpg'),
        bandeira: require('../assets/img/china.png'),
    },
    {
        nome: 'Vinho Tinto Cabernet',
        preco: 270.79,
        teorAlcool: 14.0,
        imagem: require('../assets/img/vinho5.jpg'),
        bandeira: require('../assets/img/switzerland.png'),
    },
    {
        nome: 'Vinho Branco Sauvignon',
        preco: 220.99,
        teorAlcool: 11.8,
        imagem: require('../assets/img/vinho6.jpg'),
        bandeira: require('../assets/img/germany.png'),
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
                                bandeira={vinho.bandeira}
                                navigation={navigation}
                            />
                        ))}
                    </View>
                </View>

            </ScrollView>
            <View style={styles.menu}>
                <TouchableOpacity>
                    <View style={styles.menuItem}>
                        <Image style={styles.icons} source={homeIcon} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.menuItem}>
                        <Image style={styles.icons} source={cartIcon} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.menuItem}>
                        <Image style={styles.icons} source={orderIcon} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.menuItem}>
                        <Image style={styles.icons} source={searchIcon} />
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
                <Image source={(props.imagem)} style={styles.image} resizeMode="contain" />

            </View>
            <Text style={styles.text}>{props.nome}</Text>
            <Text style={styles.text}>Preço: {props.preco}</Text>
            <Text style={styles.text}>Teor: {props.teorAlcool}%</Text>
            <Image source={(props.bandeira)} style={styles.bandeira} />
            <View style={styles.button}>
                <Button title="Comprar" color='black' onPress={() => props.navigation.navigate('Review', { vinho: props })} />
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
        width: 373,
        borderRadius: 50,
        backgroundColor: "white",
        flexDirection: "column",
        height: 177,
        marginBottom: 20,

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
        marginLeft: 30,
        textAlign: "justify",
        top: 50,
        fontWeight: "600"


    },
    imageContainer: {
        alignItems: 'center',
    },
    image: {
        position: "absolute",
        left: 120,
        height: 164,
        width: "100%",
    },

    bandeira: {

        width: 20,
        height: 20,
        position: "relative",
        top: 55,
        left: 30,


    },


    button: {
        marginTop: 50,
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
        borderColor: 'black',
        height: 50,
        width: 85,
        margin: 5,
        borderRadius: 5,
        justifyContent: 'center',

    },

    textMenu: {
        textAlign: 'center',
        color: 'white',
    },
    icons: {

        width: 40,
        height: 40,
        alignSelf: "center",
        backgroundColor: "black",




    }

})

export default Home