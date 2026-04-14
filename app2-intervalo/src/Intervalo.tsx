import React, { useState } from "react"
import { Text, View, Button } from "react-native"
import { MinMax } from "./minimax"
import { gerarAleatorio } from "./AtvAleatorio"

const Intervalo = (params: MinMax) => {
    const min = params.min ?? 0;
    const max = params.max ?? 0;
    const [numero, setNumero] = useState<number | null>(null);

    const gerarNumero = () => {
        const aleatorio = gerarAleatorio(min, max);
        setNumero(aleatorio);
    }

    return (
        <View style={{ alignItems: 'center', margin: 20 }}>
            <Text style={{ fontSize: 18 }}>
                Min = {min} e Max = {max}
            </Text>

            <Text style={{ fontSize: 26, fontWeight: 'bold', marginVertical: 20 }}>
                {numero !== null ? `Gerado: ${numero}` : "Nenhum número gerado"}
            </Text>

            <Button title="Gerar Número" onPress={gerarNumero} />
        </View>
    )
}

export default Intervalo