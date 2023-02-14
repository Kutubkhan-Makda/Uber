import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

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
    </View>
  )
}

export default RideOptionCard

const styles = StyleSheet.create({})