import { TouchableOpacity, StyleSheet, Image } from 'react-native';

const SearchButton = (props) => {

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

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => {
                props.navigation.navigate("Search", { vinhos });
            }}
        >
            <Image source={require('../assets/img/t1.png')} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchIconWithBorder: {
        borderWidth: 1,  // Adiciona uma borda preta de 1 pixel
        borderColor: 'black', // Define a cor da borda como preto
        borderRadius: 50, // Define a forma do ícone como um círculo (opcional)
    },
});

export default SearchButton;
