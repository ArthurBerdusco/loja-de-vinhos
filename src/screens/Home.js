import { View, Text, Button } from "react-native"

const Home = ({navigation}) => {
    return(
        <View>
            <Text>Home</Text>
            <Button title="Comprar" onPress={()=>navigation.navigate('Review')}/>
        </View>
    )
}

export default Home