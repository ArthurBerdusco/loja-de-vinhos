import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, KeyboardAvoidingView } from "react-native"
import { useState } from "react";

const Login = ({ navigation }) => {

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

        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"} // Comportamento do ajuste
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -100}
        >
            <View style={[styles.container, { flexDirection: 'column' }]}>

                <View style={styles.containerTitle}>

                    <Text style={styles.title}>Bem vindo</Text>
                </View>


                <View style={styles.containerLogin}>


                    <Text style={styles.text}>Email</Text>
                    <TextInput
                        style={[styles.input, styles.elevation]}
                        onChangeText={setEmail}
                        value={email}
                    />

                    <Text style={styles.text}>Senha</Text>
                    <TextInput
                        style={[styles.input, styles.elevation]}
                        onChangeText={setPassword}
                        value={password}
                    />

                    {showErrorMessage && (
                        <Text style={{ width: "100%", textAlign: "center", color: 'red', marginTop: 10 }}>
                            Usuário ou senha inválidos
                        </Text>
                    )}
                    <TouchableOpacity>
                        <Text style={{ width: "100%", textAlign: "right", marginTop: 10 }}>Esqueceu sua senha?</Text>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => { handleLogin(email, password) }} style={[styles.customButton, styles.elevation]}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>

                </View>


                <View style={styles.containerIcon}>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity style={[styles.icon, { marginRight: 25 }]}>
                            <Image source={require('../assets/img/google-login.png')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.icon}>

                            <Image source={require('../assets/img/facebook.png')}></Image>
                        </TouchableOpacity>
                    </View>

                </View>


                <View style={styles.containerSingUp}>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text>Não tem uma conta? </Text>
                        <TouchableOpacity><Text style={{ fontSize: 16, color: 'blue' }}>Cadastrar</Text></TouchableOpacity>
                    </View>

                </View>

            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        resizeMode: 'cover', // Ou 'contain' dependendo da aparência desejada
    },
    container: {
        flex: 1,
    },

    containerTitle: {
        backgroundColor: '#aC2ab1',
        flex: 9,
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },

    containerLogin: {
        flex: 13,
        padding: 30
    },

    containerIcon: {
        flex: 1,
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center'

    },
    containerSingUp: {
        flex: 1,
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
        borderRadius: 10,
        marginTop: 5,
        marginBottom: 5,
        padding: 10
    },
    customButton: {
        width: '100%',
        height: 50,
        marginTop: 20,
        backgroundColor: 'blue',
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

export default Login