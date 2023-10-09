import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native"
import { useState } from "react";

import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import  AsyncStorage from "@react-native-async-storage/async-storage";

// web: 302802416970-0ud1e9puct296j3d01lm2nmuulipmrin.apps.googleusercontent.com
// android: 302802416970-ba3h146l7pcghcqqlsppgcrsis51h5ei.apps.googleusercontent.com

const Login = ({ navigation }) => {

    const [userInfo, setUserInfo] = useState(null);
    const [request, response, promptAsync] = Google.useAuthRequest({
        webClientId: "302802416970-0ud1e9puct296j3d01lm2nmuulipmrin.apps.googleusercontent.com",
        androidClientId: "302802416970-ba3h146l7pcghcqqlsppgcrsis51h5ei.apps.googleusercontent.com"
    }) 

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const handleLogin = (email, password) => {

        if (email.toLowerCase().trim() == 'arthur@gmail.com' && password == '1234') {
            setShowErrorMessage(false);
            navigation.navigate('Home')
        } else {
            setShowErrorMessage(true);
        }

    }

    return (

        <ScrollView style={{backgroundColor: '#fafafa'}}>
            <View style={styles.containerTitle}>

                <Image source={require('../assets/img/wineBanner.jpg')}/>
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

                <TouchableOpacity>
                    <Text style={{ width: "100%", textAlign: "right", marginTop: 10 }}>Esqueceu sua senha?</Text>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => { handleLogin(email, password) }} style={[styles.customButton, styles.elevation]}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

            </View>


            <View style={styles.containerIcon}>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => promptAsync()} style={[styles.icon, { marginRight: 25 }]}>
                        <Image source={require('../assets/img/google.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon}>

                        <Image source={require('../assets/img/facebook.png')}></Image>
                    </TouchableOpacity>
                </View>

            </View>


            <View style={styles.containerSingUp}>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text>Não tem uma conta? </Text>
                    <TouchableOpacity
                        onPress={()=>{navigation.navigate('SignUp')}}
                    ><Text style={[{ fontSize: 16, color: '#c3b286', fontWeight: 'bold'}]}>Cadastrar</Text></TouchableOpacity>
                </View>

            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    containerTitle: {
        height: 300,
    },

    containerLogin: {   
        padding: 30
    },

    containerIcon: {
        height: 70,
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center'

    },
    containerSingUp: {
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
        backgroundColor: '#c3b286',
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