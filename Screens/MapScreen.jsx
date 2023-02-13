import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Map from '../components/Map'

const MapScreen = () => {
  return (
    <View>
      <Text>MapScreen</Text>
      <View className='h-1/2'>
        <Map/>
      </View>
      <View className='h-1/2'></View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})