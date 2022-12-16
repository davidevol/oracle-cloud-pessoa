import { StyleSheet } from 'react-native'
import React from 'react'
import React, { useState, useEffect } from 'react'
import { View } from 'react-native-web'
import { LinearProgress } from '@rneui/themed'

import * as PessoaService from '../service/PessoaService'
const PessoaListComponent = ({navigation}) => {
  const [state, setState] = useState({
         pessoas: []
  })

  const updateList = async () => {
         setState({pessoas: (await PessoaService.obterLista()).data.items})
  }

  useEffect(() => {
         const go = async () =>{
                  await updateList()
         }
         go()
  }, [])
   return (
         <View>
                  {
                           state.pessoas.length > 0 ?
                           <Text>Tem algo </Text>
                           :
                           <LinearProgress
                           value={123} variant="indeterminate"style={{ width: "90%" }}color="secondary"trackColor="2"/>
                  }
         </View>
   )
}


export default PessoaListComponent

const styles = StyleSheet.create({})