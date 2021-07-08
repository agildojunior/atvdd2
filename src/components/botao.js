import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

export function Botaocinza(props){ 
    
    return(
            //onPress={() => setCount(count + 1)}
            //<View style={styles.botao}>
            //    <Text style={styles.letrabranca}>{props.texto}</Text>
            //</View>
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.letrabranca}>{props.texto}</Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

botao: {
    backgroundColor: '#666',
    width: 60,
    height: 60,
    margin: 3,
    marginTop: 4,
    justifyContent: 'center',
    borderRadius: 7,
},
letrabranca: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
},
});