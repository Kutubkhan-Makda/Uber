import { Image, Text, View } from 'react-native'
import React from 'react'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_KEY } from '@env'
import { useDispatch } from 'react-redux'
import { setDestination, setOrigin } from '../slices/navSlice'

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <View className='bg-white h-full'>
      <View className='p-5'>
        <Image source={{uri:'https://links.papareact.com/gzs'}} style={{width:100,height:100,resizeMode:'contain'}}/>
        <GooglePlacesAutocomplete 
        nearbyPlacesAPI='GooglePlacesSearch' 
        debounce={400} placeholder='Where from ?' 
        styles={{container:{flex:0},textInput:{fontSize:18}}} 
        query={{key:GOOGLE_MAPS_KEY,language:'en'}} 
        minLength={2} 
        enablePoweredByContainer={false}
        onPress={(data,details=null)=>{
          dispatch(setOrigin({location:details.geometry.location,description:data.description}));
          dispatch(setDestination(null));
        }} 
        fetchDetails={true} 
        returnKeyType={"search"}/>
        <NavOptions/>
      </View>
    </View>
  )
}

export default HomeScreen