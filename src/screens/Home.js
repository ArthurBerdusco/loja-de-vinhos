import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, ImageBackground } from "react-native"
import homeIcon from '../assets/img/home_icon.png'
import cartIcon from '../assets/img/cart_icon.png'
import orderIcon from '../assets/img/orders_icon.png'
import star from '../assets/img/star.png'

import Icon from 'react-native-vector-icons/FontAwesome5'; // Importe o pacote FontAwesome5



const today = [
    {
        nome: 'Coyat',
        preco: 500.00,
        teorAlcool: 30.5,
        imagem: require('../assets/img/coyat.png'),
        bandeira: require('../assets/img/switzerland.png'),
        origem: 'Lucerna, Switzerland',
        rating: 4.5
    },
]

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

const Home = ({ navigation }) => {

    return (
        <>
            <ScrollView>

                <View style={styles.container}>
                    <Text style={styles.wines}>Somente hoje</Text>
                    <View style={styles.row}>
                        {today.map((today, index) => (
                            <Today
                                key={index}
                                nome={today.nome}
                                preco={today.preco}
                                teorAlcool={today.teorAlcool}
                                imagem={today.imagem}
                                bandeira={today.bandeira}
                                origem={today.origem}
                                rating={today.rating}
                                navigation={navigation}
                            />
                        ))}
                    </View>
                </View>


                <View style={styles.container}>
                    <Text style={styles.wines}>Vinhos</Text>
                    <View style={styles.row}>
                        {vinhos.map((vinho, index) => (
                            <Vinho
                                key={index}
                                nome={vinho.nome}
                                preco={vinho.preco}
                                teorAlcool={vinho.teorAlcool}
                                imagem={vinho.imagem}
                                bandeira={vinho.bandeira}
                                origem={vinho.origem}
                                rating={vinho.rating}
                                navigation={navigation}
                            />
                        ))}
                    </View>

                </View>

            </ScrollView>
            <View style={styles.menu}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <View style={styles.menuItem}>
                        <Icon name="home" size={26} color="#fff" />
                        <Text style={styles.textMenu}>Home</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                    <View style={styles.menuItem}>
                        <Icon name="shopping-cart" size={26} color="#fff" />
                        <Text style={styles.textMenu}>Carrinho</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
                    <View style={styles.menuItem}>
                        <Icon name="user-alt" size={26} color="#fff" />
                        <Text style={styles.textMenu}>Conta</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    )

}

const Vinho = (props) => {
    return (
        <TouchableOpacity title="Comprar" color='black' onPress={() => props.navigation.navigate('Review', {
            vinho:
            {
                nome: props.nome,
                preco: props.preco,
                teorAlcool: props.teorAlcool,
                imagem: props.imagem,
                rating: props.rating
            }

        })}>
            <View style={styles.card}>
                <View style={styles.imageContainer}>
                    <Image source={(props.imagem)} style={styles.image} resizeMode="contain" />
                </View>
                <Text style={styles.text_name}>{props.nome}</Text>
                <View style={styles.country}>
                    <Image source={(props.bandeira)} style={styles.bandeira} />
                    <Text style={styles.text_country}>{props.origem}</Text>
                </View>
                <Text style={styles.text}>Teor Alcolico: {props.teorAlcool}%</Text>
                <View style={styles.line}></View>
                <Text style={styles.text_preco}>R${props.preco}</Text>
                <View style={styles.classify}>
                    <Image source={star} style={styles.star} />
                    <Text style={styles.rating}>{props.rating}</Text>
                </View>
            </View>

        </TouchableOpacity>



    )
}
const Today = (props) => {
    return (

        <TouchableOpacity title="Comprar" color='black' onPress={() => props.navigation.navigate('Review', {
            vinho:
            {
                nome: props.nome,
                preco: props.preco,
                teorAlcool: props.teorAlcool,
                imagem: props.imagem,
                rating: props.rating,
            }
        })}>
            <View style={styles.card_today}>
                <View style={styles.imageContainer}>
                    <Image source={(props.imagem)} style={styles.image_today} resizeMode="contain" />
                </View>
                <Text style={styles.text_name_today}>{props.nome}</Text>
                <Text style={styles.text_name_today_today}>{props.nome}</Text>
                <View style={styles.container_today}>
                    <View style={styles.country}>
                        <Image source={(props.bandeira)} style={styles.bandeira} />
                        <Text style={styles.text_country}> {props.origem} </Text>
                    </View>
                    <Text style={styles.text}>Teor Alcolico: {props.teorAlcool}%</Text>
                    <View style={styles.line}></View>
                    <Text style={styles.text_preco}>R${props.preco}</Text>
                    <View style={styles.classify}>
                        <Image source={star} style={styles.star} />
                        <Text style={styles.rating}>{props.rating}</Text>
                    </View>
                </View>

            </View>

        </TouchableOpacity>



    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "#F8F8F8"
    },
    container_today: {
        marginTop: 40,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },

    card: {
        width: 373,
        borderRadius: 20,
        backgroundColor: "#F7E4CF",
        flexDirection: "column",
        height: 177,
        marginBottom: 20,
        marginTop: 30,
        marginLeft: 10,
    },

    card_today: {
        width: 373,
        borderRadius: 34,
        backgroundColor: "orange",
        flexDirection: "column",
        height: 240,
        marginBottom: 20,
        marginTop: 30,
        marginLeft: 10,
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
        marginLeft: 50,
        textAlign: "justify",
        top: 30,
        fontWeight: "400",
        color: "black",
        marginRight: "auto"



    },
    line: {
        height: 2,
        backgroundColor: 'black',
        top: 35,
        left: 25,
        marginRight: 125,
        borderRadius: 100,
    },
    text_preco: {
        marginLeft: "auto",
        marginRight: 100,
        textAlign: "right",
        top: 34,
        fontWeight: "bold",
        color: "black",
        fontSize: 15



    },
    text_name: {
        fontSize: 30,
        lineHeight: 30,
        fontWeight: "400",
        color: "black",
        textAlign: "left",
        width: 262,
        height: 60,
        marginLeft: 30,
        top: 25,
    },
    text_name_today: {
        fontSize: 60,
        lineHeight: 60,
        fontWeight: "700",
        fontStyle: "italic",
        fontVariant: "small-caps;",
        color: "#1117F5",
        textAlign: "left",
        width: 200,
        height: 60,
        marginLeft: 31,
        top: 10,

    },
    text_name_today_today: {
        position: "absolute",
        fontSize: 60,
        lineHeight: 60,
        fontWeight: "300",
        fontStyle: "italic",
        fontVariant: "small-caps;",
        color: "white",
        textAlign: "left",
        width: 200,
        height: 60,
        marginLeft: 30,
        top: 10,
    },
    text_country: {
        fontWeight: "600",

    },
    country: {
        marginLeft: 30,
        top: 30,
        flexDirection: 'row',
        alignItems: 'center'

    },
    rating: {


        fontWeight: "bold",
        color: "black",
        fontSize: 15

    },
    star: {
        top: 5,
    },

    classify: {
        margin: 50,
        marginTop: 13,
        flexDirection: "row"
    },

    wines: {
        fontSize: 30,
        left: 15,
        fontWeight: "300",
        color: "black",
        textAlign: "left",
        fontStyle: "italic",


    },


    imageContainer: {
        alignItems: 'center',
    },
    image: {
        position: "absolute",
        left: 130,
        height: 164,
        width: "100%",


    },
    image_today: {
        position: "absolute",
        flex: 1,
        left: 80,
        height: 240,
        width: "100%",

    },

    bandeira: {
        width: 20,
        height: 20,
    },

    background: {
        flex: 1,
        width: "100%",
        height: 844,
    },
    button: {
        marginTop: 50,
        marginBottom: 70,
        alignItems: "center",
    },
    menu: {
        flexDirection: 'row',
        backgroundColor: '#4D1F1F',
        justifyContent: 'space-between',
        height: 65,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    menuItem: {
        flex: 1,
        alignItems: 'center',
    },
    icons: {
        width: 24, // Ajuste o tamanho do ícone conforme necessário
        height: 24, // Ajuste o tamanho do ícone conforme necessário
        tintColor: '#FFFFFF', // Cor do ícone
    },
    textMenu: {
        color: '#FFFFFF',
        fontSize: 12, // Tamanho da fonte do texto

    },

})

export default Home