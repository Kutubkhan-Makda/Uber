import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id:'Uber-X-123',
    title:'Uber X',
    multiplier:1,
    image:'https://links.papareact.com/3pn',
  },
  {
    id:'Uber-XL-456',
    title:'Uber XL',
    multiplier:1.2,
    image:'https://links.papareact.com/5w8',
  },
  {
    id:'Uber-LUX-789',
    title:'Uber LUX',
    multiplier:1.75,
    image:'https://links.papareact.com/7pf',
  },
];

const RideOptionCard = () => {
  const navigation = useNavigation();

  return (
    <View className='bg-white flex-grow'>
      <View>
        <TouchableOpacity onPress={()=>navigation.navigate('NavigateCard')} className='absolute top-3 left-5 z-50 p-3 rounded-full'>
          <Icon name='chevron-left' type='fontawsome'/>
        </TouchableOpacity>
        <Text className='text-center text-xl py-5'>Select A Ride</Text>
      </View>
      <FlatList/>
    </View>
  )
}

export default RideOptionCard

const styles = StyleSheet.create({})