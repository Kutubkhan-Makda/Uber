import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-vector-icons/Icon';

const data = [
  {
    id:'123',
    title:'Get a Ride',
    image:'https://links.papareact.com/3pn',
    screen:'MapScreen',
  },
  {
    id:'456',
    title:'Order Food',
    image:'https://links.papareact.com/28w',
    screen:'EatsScreen',
  },
];

const NavOptions = () => {
  return (
    <FlatList 
    data={data} 
    horizontal
    keyExtractor={(item)=>item.id}
    renderItem={({item})=>(
      <TouchableOpacity className='p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40'>
        <View>
          <Image source={{uri:item.image}} style={{width:120,height:120,resizeMode:'contain'}}/>
          <Text className='mt-2 text-lg font-semibold'>{item.title}</Text>
          <Icon type='antdesign' name='arrowright' color='white'/>
        </View>
      </TouchableOpacity>
    )}/>
  )
}

export default NavOptions