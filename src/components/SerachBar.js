import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importe o pacote FontAwesome

const SearchBar = () => {
    return (
        <View style={styles.inputContainer}>

            <TextInput
                style={styles.input}
                placeholder='Procurar vinho'
            />
            <TouchableOpacity>
                <Icon name="search" style={styles.icon} />
            </TouchableOpacity>
        </View>


    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', // Centralizar o conteúdo horizontalmente
        borderColor: '#E5E5E5',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 20,
        width: '80%',
        backgroundColor: 'white',
    },

    icon: {
        fontSize: 20,
        marginRight: 5,
        color: 'gray',
    },

    input: {
        flex: 1,
        paddingVertical: 10,
        fontSize: 16,
        backgroundColor: 'transparent',
    },
});

export default SearchBar;