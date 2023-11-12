import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { tintos, roses, espumantes, brancos, promocao } from '../data/vinhos';

const Home = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Banner wine={promocao} navigation={navigation} />
      <Section label="Tintos" data={tintos} navigation={navigation} />
      <Section label="Rosés" data={roses} navigation={navigation} />
      <Section label="Espumantes" data={espumantes} navigation={navigation} />
      <Section label="Brancos" data={brancos} navigation={navigation} />
    </ScrollView>
  );
};

const Banner = ({ wine, navigation }) => {
  const [timer, setTimer] = useState({
    hours: 3,
    minutes: 25,
    seconds: 40,
  });

  const formatTime = (time) => (time < 10 ? `0${time}` : `${time}`);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer.hours === 0 && timer.minutes === 0 && timer.seconds === 0) {
        clearInterval(interval);
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
    <TouchableOpacity title="Comprar" color="black" onPress={() => navigation.navigate('Review', { vinho: { ...wine } })}>
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
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => <Vinho {...item} navigation={navigation} />}
      horizontal
    />
  </>
);

const Vinho = (props) => {
  return (
    <TouchableOpacity title="Comprar" color="black" onPress={() => props.navigation.navigate('Review', { vinho: { ...props } })}>
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
          <Text style={styles.text}>Teor Alcóolico:</Text>
          <Text style={styles.text}>{props.teorAlcool}%</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>R${props.preco}</Text>
          <View style={styles.ratingContainer}>
            <Icon name="star" size={22} color={'yellow'} />
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
    backgroundColor: '#eaeaea',
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
    justifyContent: 'space-between',
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
    justifyContent: 'space-between',
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
    textAlign: 'center',
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
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
  },
});

export default Home;
