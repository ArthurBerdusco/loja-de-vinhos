import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView, Image } from "react-native";

const Search = ({ route, navigation }) => {
    const [text, onChangeText] = useState('');
    const vinhos = route.params.vinhos;
    const [filteredVinhos, setFilteredVinhos] = useState(vinhos);

    const handleSearch = () => {
        const filtered = vinhos.filter((vinho) =>
            vinho.nome.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredVinhos(filtered);
    };

    return (
        <ScrollView style={styles.container}>
            <View>
                <View style={styles.container_input}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="Procure seu vinho"
                    />
                    <TouchableOpacity style={styles.button} onPress={handleSearch}>
                        <Text style={styles.text_button}>Pesquisar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                <View >
                    <Text style={styles.wines}>Wines</Text>
                    <View style={styles.row}>
                        {filteredVinhos.map((vinho, index) => (
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
        </ScrollView>
    );
};


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

                    <Text style={styles.rating}>{props.rating}</Text>
                </View>
            </View>

        </TouchableOpacity>



    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eaeaea'
    },
    container_input: {
        height: "auto",
        width: "auto"


    },
    input: {
        flex: 1,
        height: 50,
        borderWidth: 2,
        padding: 10,
        borderRadius: 50,


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
        backgroundColor: "white",
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
        color: "white",
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
        height: 50,
        width: 100,
        backgroundColor: "black",
        borderRadius: 50,
        left: 290


    },
    text_button: {
        color: "white",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        top: 15,
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

});

export default Search;
