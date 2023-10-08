import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native"
import { useState } from "react";

const SignUp = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const handleLogin = (email, password) => {

        if (email == 'arthur@gmail.com' && password == '1234') {
            setShowErrorMessage(false);
            navigation.navigate('Home')
        } else {
            setShowErrorMessage(true);
        }
        
    }

    return (

        <ScrollView>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Criar sua conta</Text>
            </View>


            <View style={styles.containerLogin}>

                <Text style={styles.text}>Nome completo</Text>
                <TextInput
                    style={[styles.input, styles.elevation]}
                    onChangeText={setEmail}
                    value={email}
                />

                <Text style={styles.text}>Email</Text>
                <TextInput
                    style={[styles.input, styles.elevation]}
                    onChangeText={setEmail}
                    value={email}
                />

                <Text style={styles.text}>Senha</Text>
                <TextInput
                    secureTextEntry={true}
                    style={[styles.input, styles.elevation]}
                    onChangeText={setPassword}
                    value={password}
                />

                <Text style={styles.text}>Confirmar senha</Text>
                <TextInput
                    secureTextEntry={true}
                    style={[styles.input, styles.elevation]}
                    onChangeText={setPassword}
                    value={password}
                />

                {showErrorMessage && (
                    <Text style={{ width: "100%", textAlign: "center", color: 'red', marginTop: 10 }}>
                        Usuário ou senha inválidos
                    </Text>
                )}


                <TouchableOpacity onPress={() => { handleLogin(email, password) }} style={[styles.customButton, styles.elevation]}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>

            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerTitle: {
        backgroundColor: '#123abc',
        height: 100,
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },

    containerLogin: {
        padding: 30
    },

    containerIcon: {
        marginTop: 25,
        height: 80,
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center'

    },
    containerSingUp: {
        height: 80,
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        color: 'white',
    },
    text: {
        fontSize: 18,
        color: 'black',
        textAlign: 'left'
    }
    ,
    input: {
        backgroundColor: 'white',
        width: "100%",
        height: 45,
        borderRadius: 8,
        marginTop: 5,
        marginBottom: 5,
        padding: 10
    },
    customButton: {
        width: '100%',
        height: 50,
        marginTop: 20,
        backgroundColor: '#123abc',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 16

    },
    elevation: {
        elevation: 15,
        shadowColor: 'black',
    },
    icon: {
        backgroundColor: 'white',
        width: 50,
        height: 50,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 15,
        shadowColor: 'black',
    }
})

export default SignUp