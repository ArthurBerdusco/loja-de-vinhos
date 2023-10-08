import { View, Text, Image } from "react-native"

const Review = ({route}) => {
    const vinho = route.params.vinho;
        


    return (
        <View>
            <Text>{vinho.nome}</Text>
            <Text>Preço: {vinho.preco}</Text>
            <Text>Teor: {vinho.teorAlcolico}</Text>
            <Image source={vinho.imagem}/>

            
        </View>
    )
}

export default Review