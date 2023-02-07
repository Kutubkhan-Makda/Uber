import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

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
      <TouchableOpacity>
        <View>
          <Image source={{uri:item.image}} style={{width:120,height:120,resizeMode:'contain'}}/>
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
    )}/>
  )
}

export default NavOptions