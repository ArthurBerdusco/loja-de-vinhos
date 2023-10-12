import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Button } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";

const Search = () => {

    const [text, onChangeText] = React.useState('Procure seu vinho');

    return (
        <View>
            <SafeAreaView>
                <Text >Pesquisar</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
            </SafeAreaView>
        </View>

    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});


export default Search;