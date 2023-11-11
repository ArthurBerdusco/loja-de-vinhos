import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, FlatList } from "react-native"
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';



const tintos = [
    {
        nome: 'Tinto Moriet',
        preco: 299.99,
        teorAlcool: 13.5,
        imagem: require('../assets/img/vinhos/tinto/1.png'),
        bandeira: require('../assets/img/paises/china.png'),
        pais: 'China',
        cidade: 'Baoshan',
        rating: 5
    },
    {
        nome: 'Sauvignon',
        preco: 25.99,
        teorAlcool: 13.8,
        imagem: require('../assets/img/vinhos/tinto/2.png'),
        bandeira: require('../assets/img/paises/france.png'),
        pais: 'França',
        cidade: 'Bordeaux',
        rating: 4.7
    },
    {
        nome: 'Merlot Reserva',
        preco: 189.50,
        teorAlcool: 14.2,
        imagem: require('../assets/img/vinhos/tinto/3.png'),
        bandeira: require('../assets/img/paises/italy.png'),
        pais: 'Itália',
        cidade: 'Toscana',
        rating: 4.2
    },
    {
        nome: 'Pinot Elegance',
        preco: 129.99,
        teorAlcool: 12.5,
        imagem: require('../assets/img/vinhos/tinto/4.png'),
        bandeira: require('../assets/img/paises/new.png'),
        pais: 'Nova Zelândia',
        cidade: 'Marlborough',
        rating: 4.8
    },
    {
        nome: 'Malbec Intenso',
        preco: 79.90,
        teorAlcool: 15.0,
        imagem: require('../assets/img/vinhos/tinto/5.png'),
        bandeira: require('../assets/img/paises/argentina.png'),
        pais: 'Argentina',
        cidade: 'Mendoza',
        rating: 4.5
    }
];

const roses = [
    {
        nome: 'Rosé Seco',
        preco: 190.39,
        teorAlcool: 11.5,
        imagem: require('../assets/img/vinhos/rose/1.png'),
        bandeira: require('../assets/img/paises/south-korea.png'),
        pais: 'Coreia do Sul',
        cidade: 'Geoje',
        rating: 4.3
    },
    {
        nome: 'Provence Rosé',
        preco: 35.50,
        teorAlcool: 12.0,
        imagem: require('../assets/img/vinhos/rose/2.png'),
        bandeira: require('../assets/img/paises/france.png'),
        pais: 'França',
        cidade: 'Provence',
        rating: 4.8
    },
    {
        nome: 'Rosé Elegance',
        preco: 89.99,
        teorAlcool: 11.8,
        imagem: require('../assets/img/vinhos/rose/3.png'),
        bandeira: require('../assets/img/paises/spain.png'),
        pais: 'Espanha',
        cidade: 'Rioja',
        rating: 4.5
    },
    {
        nome: 'Rosé do Vale',
        preco: 120.75,
        teorAlcool: 12.5,
        imagem: require('../assets/img/vinhos/rose/4.png'),
        bandeira: require('../assets/img/paises/china.png'),
        pais: 'China',
        cidade: 'Douro',
        rating: 4.2
    },
    {
        nome: 'Rosé Refrescante',
        preco: 55.00,
        teorAlcool: 10.5,
        imagem: require('../assets/img/vinhos/rose/5.png'),
        bandeira: require('../assets/img/paises/italy.png'),
        pais: 'Itália',
        cidade: 'Sicília',
        rating: 4.6
    }
];

const espumantes = [
    {
        nome: 'Espumante Brut',
        preco: 345.29,
        teorAlcool: 12.8,
        imagem: require('../assets/img/vinhos/espumante/1.png'),
        bandeira: require('../assets/img/paises/china.png'),
        pais: 'China',
        cidade: 'Guilin',
        rating: 3.3
    },
    {
        nome: 'Prosecco Dry',
        preco: 28.99,
        teorAlcool: 11.0,
        imagem: require('../assets/img/vinhos/espumante/2.png'),
        bandeira: require('../assets/img/paises/italy.png'),
        pais: 'Itália',
        cidade: 'Veneto',
        rating: 4.7
    },
    {
        nome: 'Prestige',
        preco: 198.50,
        teorAlcool: 12.5,
        imagem: require('../assets/img/vinhos/espumante/3.png'),
        bandeira: require('../assets/img/paises/france.png'),
        pais: 'França',
        cidade: 'Champagne',
        rating: 4.2
    },
    {
        nome: 'Cava Espanhola',
        preco: 65.75,
        teorAlcool: 11.5,
        imagem: require('../assets/img/vinhos/espumante/4.png'),
        bandeira: require('../assets/img/paises/spain.png'),
        pais: 'Espanha',
        cidade: 'Penedès',
        rating: 4.5
    },
    {
        nome: 'Asti Spumante',
        preco: 42.00,
        teorAlcool: 7.5,
        imagem: require('../assets/img/vinhos/espumante/5.png'),
        bandeira: require('../assets/img/paises/italy.png'),
        pais: 'Itália',
        cidade: 'Piemonte',
        rating: 4.8
    }
];

const brancos = [
    {
        nome: 'Chardonnay',
        preco: 150.29,
        teorAlcool: 12.0,
        imagem: require('../assets/img/vinhos/branco/1.png'),
        bandeira: require('../assets/img/paises/germany.png'),
        pais: 'Alemanha',
        cidade: 'Heidelberg',
        rating: 4.2
    },
    {
        nome: 'Sauvignon Blanc',
        preco: 55.99,
        teorAlcool: 11.5,
        imagem: require('../assets/img/vinhos/branco/2.png'),
        bandeira: require('../assets/img/paises/new.png'),
        pais: 'Nova Zelândia',
        cidade: 'Marlborough',
        rating: 4.6
    },
    {
        nome: 'Pinot Grigio',
        preco: 89.50,
        teorAlcool: 13.2,
        imagem: require('../assets/img/vinhos/branco/3.png'),
        bandeira: require('../assets/img/paises/italy.png'),
        pais: 'Itália',
        cidade: 'Alto Adige',
        rating: 4.3
    },
    {
        nome: 'Riesling Clássico',
        preco: 120.75,
        teorAlcool: 10.5,
        imagem: require('../assets/img/vinhos/branco/4.png'),
        bandeira: require('../assets/img/paises/germany.png'),
        pais: 'Alemanha',
        cidade: 'Mosel',
        rating: 4.8
    },
    {
        nome: 'Albariño',
        preco: 65.00,
        teorAlcool: 12.0,
        imagem: require('../assets/img/vinhos/branco/5.png'),
        bandeira: require('../assets/img/paises/spain.png'),
        pais: 'Espanha',
        cidade: 'Rias Baixas',
        rating: 4.5
    }
];

const today = [
    {
        nome: 'MOËT & CHANDON',
        preco: 500.00,
        teorAlcool: 30.5,
        imagem: require('../assets/img/vinhos/promocao/chandon.png'),
        bandeira: require('../assets/img/paises/china.png'),
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

const Banner = ({ wine, navigation }) => {
    const [timer, setTimer] = useState({
      hours: 6,
      minutes: 33,
      seconds: 40,
    });
  
    const formatTime = (time) => (time < 10 ? `0${time}` : `${time}`);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (timer.hours === 0 && timer.minutes === 0 && timer.seconds === 0) {
          clearInterval(interval);
          // Aqui você pode executar alguma ação quando o temporizador atingir zero, se necessário.
        } else {
          setTimer((prevTimer) => {
            let newSeconds = prevTimer.seconds - 1;
            let newMinutes = prevTimer.minutes;
            let newHours = prevTimer.hours;
  
            if (newSeconds < 0) {
              newSeconds = 59;
              newMinutes -= 1;
            }
  
            if (newMinutes < 0) {
              newMinutes = 59;
              newHours -= 1;
            }
  
            return {
              hours: newHours,
              minutes: newMinutes,
              seconds: newSeconds,
            };
          });
        }
      }, 1000);
  
      return () => clearInterval(interval);
    }, [timer]);
  
    return (
      <TouchableOpacity
        title="Comprar"
        color="black"
        onPress={() => navigation.navigate('Review', { vinho: { ...wine } })}
      >
        <View style={styles.bannerContainer}>
          <Image source={wine.imagem} style={styles.bannerImage} resizeMode="contain" />
          <Text style={styles.bannerName}>{wine.nome}</Text>
          <Text style={styles.bannerPromo}>Somente hoje!</Text>
          <Text style={styles.timer}>
            {`${formatTime(timer.hours)}:${formatTime(timer.minutes)}:${formatTime(timer.seconds)}`}
          </Text>
          <View style={styles.priceContainer}>
            <Text style={styles.oldPrice}>R${wine.preco + 350}</Text>
            <Text style={styles.currentPrice}>R${wine.preco}</Text>
          </View>

        </View>
      </TouchableOpacity>
    );
  };


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
                    <View style={styles.textContainer}>
                        <Text style={styles.country}>{props.cidade}</Text>
                    </View>
                </View>
                <View style={styles.teorContainer}>
                    <Text style={styles.text}>Teor Alcolico: </Text>
                    <Text style={styles.text}>{props.teorAlcool}%</Text>
                </View>

                <View style={styles.priceContainer}>

                    <Text style={styles.price}>R${props.preco}</Text>
                    <View style={styles.ratingContainer}>
                        <Icon name="star" size={22} color={'yellow'}/>
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
    teorContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
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
        marginVertical: 8,
        textAlign: 'center'
    },
    countryContainer: {
        justifyContent: 'space-between',
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
    textContainer: {

        marginLeft: 4,
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