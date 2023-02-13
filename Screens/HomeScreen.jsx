import { Image, Text, View } from 'react-native'
import React from 'react'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_KEY } from '@env'

const HomeScreen = () => {
  return (
    <View className='bg-white h-full'>
      <View className='p-5'>
        <Image source={{uri:'https://links.papareact.com/gzs'}} style={{width:100,height:100,resizeMode:'contain'}}/>
        <GooglePlacesAutocomplete nearbyPlacesAPI='GooglePlacesSearch' debounce={400} placeholder='Where from ?' styles={{
          container:{flex:0},textInput:{fontSize:18}}} query={{key:GOOGLE_MAPS_KEY,language:'en'}}/>
        <NavOptions/>
      </View>
    </View>
  )
}

export default HomeScreen