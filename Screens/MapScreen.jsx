import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Map from '../components/Map'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const MapScreen = () => {
  const Stack = createNativeStackNavigator();

  return (
    <View>
      <View className='h-1/2'>
        <Map/>
      </View>
      <View className='h-1/2'>
        <Stack.Navigator>
          
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})