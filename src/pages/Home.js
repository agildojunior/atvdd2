import React, { useState } from 'react';
import { Text, View,StyleSheet,TouchableOpacity,FlatList } from 'react-native';
import { Botaocinza } from '../components/botao';
import { Botaolaranja } from '../components/botaolaranja';
import { Botaomais } from '../components/botaomais';
export function Home(){

    const [count, setCount] = useState(0);

    return(
        <View style={ styles.container}>
            
            <View style={styles.containerresposta}><Text style={styles.letrapreta}>{count}</Text></View>

            <View style={styles.containerlaranja}>
                <Botaolaranja texto='CE/C'/>
            </View>
            <View style={styles.containerbotoeslinha}>

                <View style={styles.containerbotoescolunas}>
                <Botaocinza texto='7'/>
                <Botaocinza texto='4'/>
                <Botaocinza texto='1'/>
                <Botaocinza texto='0'/>
                </View>
                <View style={styles.containerbotoescolunas}>
                <Botaocinza texto='8'/>
                <Botaocinza texto='5'/>
                <Botaocinza texto='2'/>
                <Botaocinza texto='00'/>
                </View>
                <View style={styles.containerbotoescolunas}>
                <Botaocinza texto='9'/>
                <Botaocinza texto='6'/>
                <Botaocinza texto='3'/>
                <Botaocinza texto='.'/>
                </View>
                <View style={styles.containerbotoescolunas}>
                <Botaocinza texto='%'/>
                <Botaocinza texto='X'/>
                <Botaomais texto='+'/>    
                </View>
                <View style={styles.containerbotoescolunas}>
                <Botaocinza texto='>'/>
                <Botaocinza texto='÷'/>
                <Botaocinza texto='-'/>
                <Botaocinza texto='='/>
                </View>

            </View>
        </View>
        
    );
    
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#111',
        alignItems: 'center',
    },
    containerresposta: {
        backgroundColor: '#fff',
        width: 325,
        height: 90,
        marginTop: 50,
        justifyContent: 'center',
        borderRadius: 10,
      },
    letrapreta: {
        fontSize: 20,
        textAlign: 'center',
        color: '#111',
    },
    containerlaranja: {
        backgroundColor: '#111',
        marginTop: 4,
        marginLeft: 265,
        flexDirection: 'row',
    },
    containerbotoescolunas: {
        backgroundColor: '#111',
        flexDirection: 'column',
    },
    containerbotoeslinha: {
        backgroundColor: '#111',
        flexDirection: 'row',
    },
});
