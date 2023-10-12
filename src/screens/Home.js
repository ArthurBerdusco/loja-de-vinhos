import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, ImageBackground } from "react-native"
import homeIcon from '../assets/img/home_icon.png'
import cartIcon from '../assets/img/cart_icon.png'
import orderIcon from '../assets/img/orders_icon.png'
import searchIcon from '../assets/img/search_icon.png'
import LinearGradient from "react-native-linear-gradient"




const vinhos = [
    {
        nome: 'Vinho Tinto Moriet',
        preco: 299.99,
        teorAlcool: 13.5,
        imagem: require('../assets/img/vinho1.png'),
        bandeira: require('../assets/img/china.png'),
        origem: 'Baoshan, China',

    },
    {
        nome: 'Vinho Branco Chardonnay',
        preco: 150.29,
        teorAlcool: 12.0,
        imagem: require('../assets/img/vinho2.png'),
        bandeira: require('../assets/img/germany.png'),
        origem: 'Heidelberg, Alemanha',
    },
    {
        nome: 'Vinho Rosé Seco',
        preco: 190.39,
        teorAlcool: 11.5,
        imagem: require('../assets/img/vinho3.png'),
        bandeira: require('../assets/img/south-korea.png'),
        origem: 'Geoje-si, Coreia do Sul',
    },
    {
        nome: 'Vinho Espumante Brut',
        preco: 345.29,
        teorAlcool: 12.8,
        imagem: require('../assets/img/vinho4.png'),
        bandeira: require('../assets/img/china.png'),
        origem: 'Guilin, China',
    },
    {
        nome: 'Vinho Tinto Cabernet',
        preco: 270.79,
        teorAlcool: 14.0,
        imagem: require('../assets/img/vinho5.png'),
        bandeira: require('../assets/img/switzerland.png'),
        origem: 'Grindelwald, Suiça',
    },
    {
        nome: 'Vinho Branco Sauvignon',
        preco: 220.99,
        teorAlcool: 11.8,
        imagem: require('../assets/img/vinho6.png'),
        bandeira: require('../assets/img/germany.png'),
        origem: 'Yangshuo , China',
    },
];


const Home = ({ navigation }) => {

    return (
        <>
            <ImageBackground
                source={require('../assets/img/fundo.png')}
                style={styles.background}>
                <ScrollView>
                <Text style={styles.wines}>Wines</Text>
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
                                    origem={vinho.origem}
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
                            <Text style={styles.textMenu}>Home</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.menuItem}>
                            <Image style={styles.icons} source={cartIcon} />
                            <Text style={styles.textMenu}>Cart</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{}}>
                        <View style={styles.menuItem}>
                            <Image style={styles.icons} source={orderIcon} />
                            <Text style={styles.textMenu}>Orders</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.menuItem}>
                            <Image style={styles.icons} source={searchIcon} />
                            <Text style={styles.textMenu}>Search</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
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
            }
        })}>
            <View style={styles.card}>
                <View style={styles.imageContainer}>
                    <Image source={(props.imagem)} style={styles.image} resizeMode="contain" />
                </View>
                <Text style={styles.text_name}>{props.nome}</Text>
                <View style={styles.country}>
                    <Image source={(props.bandeira)} style={styles.bandeira} />
                    <Text style={styles.text_country}> {props.origem} </Text>
                </View>
                <Text style={styles.text}>Teor Alcolico: {props.teorAlcool}%</Text>
                <View style={styles.line}></View>
                <Text style={styles.text_preco}>R${props.preco}</Text>
            </View>
           
        </TouchableOpacity>

        

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },

    card: {
        width: 373,
        borderRadius: 50,
        backgroundColor: "#88F2CD ",
        flexDirection: "column",
        height: 177,
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
        marginLeft: 55,
        textAlign: "justify",
        top: 30,
        fontWeight: "400",
        color: "black",
        


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
        top: 35,
        fontWeight: "bold",
        color: "black",
        fontSize: 15
        


    },
    text_name: {
        fontSize: 30,
        lineHeight: 30,
        fontWeight:"300",
        color: "black",
        textAlign: "left",
        width: 262,
        height: 60,
        marginLeft:30,
        top:25,
        
    },
    text_country: {
        fontWeight: "600"
    },
    country: {
        marginLeft: 30,
        top: 30,
        flexDirection: 'row', 
        alignItems: 'center'

    },

    wines: {
        fontSize: 30,
        lineHeight: 35,
        fontWeight:"300",
        color: "white",
        textAlign: "left",
        marginLeft: 10,
        fontStyle:"italic",
        
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
        height: 63,
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
        fontSize: 10,
        fontWeight: "500",

    },
    icons: {
        marginTop: 5,
        width: 32,
        height: 32,
        alignSelf: "center",
        backgroundColor: "black",




    }

})

export default Home