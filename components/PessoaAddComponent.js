import { StyleSheet } from 'react-native'
import React, { useState } from 'react'

import * as PessoaService from '../service/PessoaService'

import {
    Button,
    Card,
    ToastAndroid,
    Input
} from "@rneui/themed";
const PessoaAddComponent = ({ navigation }) => {
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [hobby, setHobby] = useState('')

    const addPessoa = async () => {
        try {
        const res = (await PessoaService.cadastrarPessoa({nome, idade, hobby})).data
        console.log(res)
        ToastAndroid.show('Pessoa cadastrada...', ToastAndroid.LONG)
        }
        catch (erro){
            console.log('erro: ', erro)
        }
    }

    return (
        <>
            <Card containerStyle={styles.card}>
                <Card.Title>Cadastro de Pessoa</Card.Title>
                <Card.Divider></Card.Divider>
                <Input
                    placeholder='Nome'
                    leftIcon={{ type: 'font-awesome', name: 'user' }}
                    style={styles.textInput}
                    onChangeText={nomeDigitado => setNome(nomeDigitado)}
                    value={nome}
                />
                <Input
                    placeholder='Idade'
                    leftIcon={{ type: 'font-awesome', name: 'info' }}
                    style={styles.textInput}
                    onChangeText={idadeDigitada => setIdade(idadeDigitada)}
                    value={idade}
                />
                <Input
                    placeholder='Hobby'
                    leftIcon={{ type: 'font-awesome', name: 'heart' }}
                    style={styles.textInput}
                    onChangeText={hobbyDigitado => setHobby(hobbyDigitado)}
                    value={hobby}
                />
                <Button
                    title="OK"
                    type='outline'
                    buttonStyle={styles.button}
                    onPress={() => addPessoa()}
                />
                
            </Card>
        </>
    )
}
export default PessoaAddComponent
const styles = StyleSheet.create({
    button: {
        width: '100%',
        borderRadius: 30
    },
    card: {
        padding: 8,
        borderRadius: 8
    },
    textInput: {
        textAlign: 'center',
        margin: 0,
        padding: 0
    }
})
