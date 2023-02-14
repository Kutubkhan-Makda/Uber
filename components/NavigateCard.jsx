import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_KEY } from '@env'
import { useDispatch } from 'react-redux'
import { setDestination } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'
import NavFavourites from './NavFavourites'
import { Icon } from '@rneui/themed';

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

  return (
    <View className='bg-white flex-1'>
      <Text className='text-center py-4 text-xl'>NavigateCard</Text>
      <View className='border-t border-gray-200 flex-shrink'>
        <View>
            <GooglePlacesAutocomplete 
            placeholder='Where to?' 
            styles={toInputBoxStyle} 
            query={{key:GOOGLE_MAPS_KEY,language:'en'}} 
            fetchDetails={true}
            enablePoweredByContainer={false}
            onPress={(data,details=null)=>{
                dispatch(setDestination({location:details.geometry.location,description:data.description}));
                navigation.navigate('RideOptionCard')
            }}
            nearbyPlacesAPI='GooglePlacesSearch' 
            debounce={400}/>
        </View>
        <NavFavourites/>
      </View>
      <View className='flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100'>
        <TouchableOpacity onPress={()=>navigation.navigate('RideOptionCard')} className='flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full'>
          <Icon name='car' type='font-awesome' color='white' size={16}/>
          <Text className='text-white text-center'>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity className='flex flex-row justify-between w-24 px-4 py-3 rounded-full'>
          <Icon name='fast-food-outline' type='ionicon' color='black' size={16}/>
          <Text className='text-center'>Eats</Text>
        </TouchableOpacity>
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