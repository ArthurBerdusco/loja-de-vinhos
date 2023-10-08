import { View, Text, Image } from "react-native"

const Review = ({props}) => {
    const vinho = props.params.vinho;
        


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