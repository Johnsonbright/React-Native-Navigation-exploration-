import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'


// navigation

import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import { useNavigation } from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'


type DetailsProps = NativeStackScreenProps<RootStackParamList, "Details">



const Details = ({route}: DetailsProps) => {

  const {productId} = route.params

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return (
    <View style={styles.conatiner}>
      <Text style={styles.smallText}>Details: {productId} </Text>
      <Button
       title = 'Go to Home'
        onPress={() => navigation.navigate("Home") }
      />
       <Button
       title = 'Go to First screen'
        onPress={() => navigation.popToTop() }
      />
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  smallText : {
    color: '#0000'

  }
})