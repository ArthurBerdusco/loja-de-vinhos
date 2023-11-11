import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, ImageBackground, FlatList } from "react-native"
import star from '../assets/img/star.png'




const tintos = [
    {
        nome: 'Tinto Moriet',
        preco: 299.99,
        teorAlcool: 13.5,
        imagem: require('../assets/img/vinho1.png'),
        bandeira: require('../assets/img/china.png'),
        origem: 'Baoshan, China',
        rating: 5
    },
    {
        nome: 'Sauvignon',
        preco: 25.99,
        teorAlcool: 13.8,
        imagem: require('../assets/img/vinho2.png'),
        bandeira: require('../assets/img/china.png'),
        origem: 'Bordeaux, França',
        rating: 4.7
    },
    {
        nome: 'Merlot Reserva',
        preco: 189.50,
        teorAlcool: 14.2,
        imagem: require('../assets/img/vinho3.png'),
        bandeira: require('../assets/img/china.png'),
        origem: 'Toscana, Itália',
        rating: 4.2
    },
    {
        nome: 'Pinot Elegance',
        preco: 129.99,
        teorAlcool: 12.5,
        imagem: require('../assets/img/vinho4.png'),
        bandeira: require('../assets/img/china.png'),
        origem: 'Marlborough, Nova Zelândia',
        rating: 4.8
    },
    {
        nome: 'Malbec Intenso',
        preco: 79.90,
        teorAlcool: 15.0,
        imagem: require('../assets/img/vinho5.png'),
        bandeira: require('../assets/img/china.png'),
        origem: 'Mendoza, Argentina',
        rating: 4.5
    }
];

const roses = [
    {
        nome: 'Rosé Seco',
        preco: 190.39,
        teorAlcool: 11.5,
        imagem: require('../assets/img/vinho1.png'),
        bandeira: require('../assets/img/china.png'),
        origem: 'Geoje, Coreia do Sul',
        rating: 4.3
    },
    {
        nome: 'Provence Rosé',
        preco: 35.50,
        teorAlcool: 12.0,
        imagem: require('../assets/img/vinho2.png'),
        bandeira: require('../assets/img/china.png'),
        origem: 'Provence, França',
        rating: 4.8
    },
    {
        nome: 'Rosé Elegance',
        preco: 89.99,
        teorAlcool: 11.8,
        imagem: require('../assets/img/vinho3.png'),
        bandeira: require('../assets/img/china.png'),
        origem: 'Rioja, Espanha',
        rating: 4.5
    },
    {
        nome: 'Rosé do Vale',
        preco: 120.75,
        teorAlcool: 12.5,
        imagem: require('../assets/img/vinho4.png'),
        bandeira: require('../assets/img/china.png'),
        origem: 'Douro, china',
        rating: 4.2
    },
    {
        nome: 'Rosé Refrescante',
        preco: 55.00,
        teorAlcool: 10.5,
        imagem: require('../assets/img/vinho5.png'),
        bandeira: require('../assets/img/china.png'),
        origem: 'Sicília, Itália',
        rating: 4.6
    }
];

const espumantes = [
    {
        nome: 'Espumante Brut',
        preco: 345.29,
        teorAlcool: 12.8,
        imagem: require('../assets/img/vinho1.png'),
        bandeira: require('../assets/img/china.png'),
        origem: 'Guilin, China',
        rating: 3.3
    },
    {
        nome: 'Prosecco Dry',
        preco: 28.99,
        teorAlcool: 11.0,
        imagem: require('../assets/img/vinho2.png'),
        bandeira: require('../assets/img/china.png'),
        origem: 'Veneto, Itália',
        rating: 4.7
    },
    {
        nome: 'Prestige',
        preco: 198.50,
        teorAlcool: 12.5,
        imagem: require('../assets/img/vinho3.png'),
        bandeira: require('../assets/img/china.png'),
        origem: 'Champagne, França',
        rating: 4.2
    },
    {
        nome: 'Cava Espanhola',
        preco: 65.75,
        teorAlcool: 11.5,
        imagem: require('../assets/img/vinho4.png'),
        bandeira: require('../assets/img/china.png'),
        origem: 'Penedès, Espanha',
        rating: 4.5
    },
    {
        nome: 'Asti Spumante',
        preco: 42.00,
        teorAlcool: 7.5,
        imagem: require('../assets/img/vinho5.png'),
        bandeira: require('../assets/img/china.png'),
        origem: 'Piemonte, Itália',
        rating: 4.8
    }
];

const brancos = [
    {
        nome: 'Chardonnay',
        preco: 150.29,
        teorAlcool: 12.0,
        imagem: require('../assets/img/vinho1.png'),
        bandeira: require('../assets/img/china.png'),
        origem: 'Heidelberg, Alemanha',
        rating: 4.2
    },
    {
        nome: 'Sauvignon Blanc',
        preco: 55.99,
        teorAlcool: 11.5,
        imagem: require('../assets/img/vinho2.png'),
        bandeira: require('../assets/img/china.png'),
        origem: 'Marlborough, Nova Zelândia',
        rating: 4.6
    },
    {
        nome: 'Pinot Grigio',
        preco: 89.50,
        teorAlcool: 13.2,
        imagem: require('../assets/img/vinho3.png'),
        bandeira: require('../assets/img/china.png'),
        origem: 'Alto Adige, Itália',
        rating: 4.3
    },
    {
        nome: 'Riesling Clássico',
        preco: 120.75,
        teorAlcool: 10.5,
        imagem: require('../assets/img/vinho4.png'),
        bandeira: require('../assets/img/china.png'),
        origem: 'Mosel, Alemanha',
        rating: 4.8
    },
    {
        nome: 'Albariño',
        preco: 65.00,
        teorAlcool: 12.0,
        imagem: require('../assets/img/vinho5.png'),
        bandeira: require('../assets/img/china.png'),
        origem: 'Rias Baixas, Espanha',
        rating: 4.5
    }
];

const today = [
    {
        nome: 'Coyat',
        preco: 500.00,
        teorAlcool: 30.5,
        imagem: require('../assets/img/coyat.png'),
        bandeira: require('../assets/img/china.png'),
        origem: 'Lucerna, Switzerland',
        rating: 4.5
    },
]

const Home = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Banner wine={today[0]} navigation={navigation} />
            <Section label="Tintos" data={tintos} navigation={navigation} />
            <Section label="Rosés" data={roses} navigation={navigation} />
            <Section label="Espumantes" data={espumantes} navigation={navigation} />
            <Section label="Brancos" data={brancos} navigation={navigation} />
        </ScrollView>
    );
};

const Banner = ({ wine, navigation }) => (
    <TouchableOpacity
        title="Comprar"
        color='black'
        onPress={() => navigation.navigate('Review', { vinho: { ...wine } })}
    >
        <View style={styles.bannerContainer}>
            <Image source={wine.imagem} style={styles.bannerImage} resizeMode="contain" />
            <Text style={styles.bannerName}>{wine.nome}</Text>
            <Text style={styles.bannerPromo}>Promoção!</Text>
            <View style={styles.priceContainer}>
                <Text style={styles.oldPrice}>R${wine.preco + 50}</Text>
                <Text style={styles.currentPrice}>R${wine.preco}</Text>
            </View>
        </View>
    </TouchableOpacity>
);


const Section = ({ label, data, navigation }) => (
    <>
        <Text style={styles.sectionLabel}>{label}</Text>
        <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={(item) => <Vinho {...item.item} navigation={navigation} />}
            horizontal
        />
    </>
);

const Vinho = (props) => {
    return (
        <TouchableOpacity
            title="Comprar"
            color='black'
            onPress={() => props.navigation.navigate('Review', { vinho: { ...props } })}
        >
            <View style={styles.card}>
                <View style={styles.imageContainer}>
                    <Image source={props.imagem} style={styles.image} resizeMode="contain" />
                </View>
                <Text style={styles.name}>{props.nome}</Text>
                <View style={styles.countryContainer}>
                    <Image source={props.bandeira} style={styles.bandeira} />
                    <Text style={styles.country}>{props.origem}</Text>
                </View>
                <Text style={styles.text}>Teor Alcolico: {props.teorAlcool}%</Text>
                <View style={styles.priceContainer}>

                    <Text style={styles.price}>R${props.preco}</Text>
                    <View style={styles.ratingContainer}>
                        <Image source={star} style={styles.star} />
                        <Text style={styles.rating}>{props.rating}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#eaeaea'
    },
    sectionLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        margin: 8,
        marginTop: 20,
    },
    bannerContainer: {
        backgroundColor: '#F8F8F8',
        borderRadius: 10,
        padding: 16,
        margin: 8,
        alignItems: 'center',
    },
    bannerImage: {
        width: 150,
        height: 150,
    },
    bannerName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 8,
    },
    bannerPromo: {
        fontSize: 16,
        color: 'red',
        fontWeight: 'bold',
        marginTop: 4,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    oldPrice: {
        fontSize: 14,
        color: '#888',
        textDecorationLine: 'line-through',
        marginRight: 8,
    },
    currentPrice: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    card: {
        backgroundColor: '#F8F8F8',
        borderRadius: 10,
        padding: 16,
        margin: 8,
        width: 170,
    },
    imageContainer: {
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8,
    },
    countryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    bandeira: {
        width: 20,
        height: 20,
        marginRight: 4,
    },
    country: {
        fontSize: 12,
    },
    text: {
        fontSize: 12,
        marginTop: 4,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 8,
    },
    price: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    star: {
        width: 16,
        height: 16,
        marginRight: 4,
    },
    rating: {
        fontSize: 14,
    },
});

export default Home