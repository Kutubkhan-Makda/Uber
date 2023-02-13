import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

const NavigateCard = () => {
  return (
    <View className='bg-white flex-1'>
      <Text className='text-center py-5 text-xl'>NavigateCard</Text>
      <View className='border-t border-gray-200 flex-shrink'>
        <View>
            <GooglePlacesAutocomplete placeholder=''/>
        </View>
      </View>
    </View>
  )
}

export default NavigateCard

const styles = StyleSheet.create({})