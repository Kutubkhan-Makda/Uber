import { Image, Text, View } from 'react-native'
import React from 'react'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

const HomeScreen = () => {
  return (
    <View className='bg-white h-full'>
      <View className='p-5'>
        <Image source={{uri:'https://links.papareact.com/gzs'}} style={{width:100,height:100,resizeMode:'contain'}}/>
        <NavOptions/>
      </View>
    </View>
  )
}

export default HomeScreen