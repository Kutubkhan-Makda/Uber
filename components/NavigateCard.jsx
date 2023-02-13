import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_KEY } from '@env'

const NavigateCard = () => {
  return (
    <View className='bg-white flex-1'>
      <Text className='text-center py-5 text-xl'>NavigateCard</Text>
      <View className='border-t border-gray-200 flex-shrink'>
        <View>
            <GooglePlacesAutocomplete 
            placeholder='Where to?' 
            styles={toInputBoxStyle} 
            query={{key:GOOGLE_MAPS_KEY,language:'en'}} 
            fetchDetails={true}
            enablePoweredByContainer={false}
            nearbyPlacesAPI='GooglePlacesSearch' 
            debounce={400}/>
        </View>
      </View>
    </View>
  )
}

export default NavigateCard

const toInputBoxStyle = StyleSheet.create({
    container:{
        backgroundColor:'white',
        paddingTop:20,
        flex:0,
    },
    textInput:{
        backgroundColor:'#DDDDDF',
        borderRadius:0,
        fontSize:18,
    },
    textInputContainer:{
        paddingHorizontal:20,
        paddingBottom:0,
    }
})