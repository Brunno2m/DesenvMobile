import { Text, View } from "react-native"
import { MinMax } from "./minimax"



const Intervalo = (params: MinMax) => {
    return (
        <View>
            <Text>
                Min = {params.min ?? 0} e Max = {params.max ?? 0}
            </Text>
        </View>
    )
}



export default Intervalo