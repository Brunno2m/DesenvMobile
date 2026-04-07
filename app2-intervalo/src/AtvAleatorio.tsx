import { Text, View } from 'react-native';



const min = 0;
const max = 100;
const intervalo = Math.floor(Math.random() * (max - min + 1)) + min;



const Aleatorio = (params: any): any => {
    return (
        <View>
            <Text>Intervalo: {intervalo}
            </Text>
        </View>
    )
}

export default Aleatorio