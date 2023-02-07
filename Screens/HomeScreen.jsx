import { Image, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View className='bg-white h-full'>
      <View className='p-5'>
        <Image source={{uri:'https://links.papareact.com/gzs'}} style={{width:100,height:100,resizeMode:'contain'}}/>
      </View>
    </View>
  )
}

export default HomeScreen