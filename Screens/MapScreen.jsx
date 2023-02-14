import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Map from '../components/Map'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NavigateCard from '../components/NavigateCard'
import RideOptionCard from '../components/RideOptionCard'
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native'

const MapScreen = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity onPress={()=>navigation.navigate('Home')} className='absolute top-5 left-4 bg-gray-100 z-50 p-3 rounded-full shadow-lg'>
        <Icon name='menu'/>
      </TouchableOpacity>
      <View className='h-1/2'>
        <Map/>
      </View>
      <View className='h-1/2'>
        <Stack.Navigator>
          <Stack.Screen name='NavigateCard' component={NavigateCard} options={{headerShown:false}}/>
          <Stack.Screen name='RideOptionCard' component={RideOptionCard} options={{headerShown:false}}/>
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})