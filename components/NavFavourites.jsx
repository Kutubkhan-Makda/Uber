import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';

const data = [
    {
        id:'123',
        icon:'home',
        location:'Home',
        destination:'Code Street, London, UK',
    },
    {
        id:'456',
        icon:'briefcase',
        location:'Work',
        destination:'London Eye, London, UK',
    },
];

const NavFavourites = () => {
  return (
    <FlatList 
    data={data} 
    keyExtractor={item => item.id} 
    ItemSeparatorComponent={()=>(<View className='bg-gray-200 h-0.5'/>)}
    renderItem={({item:{location,destination,icon}})=>(
        <TouchableOpacity className='flex-row items-center p-5'>
            <Icon 
            style={{backgroundColor:'#D1D5DB',borderRadius:9999,padding:10,marginRight:18}}
            name={icon} 
            type='ionicon' 
            color='white' 
            size={18}/>
            <View>
                <Text className='font-semibold text-lg'>{location}</Text>
                <Text className='text-gray-500'>{destination}</Text>
            </View>
        </TouchableOpacity>
    )}/>
  )
}

export default NavFavourites

const styles = StyleSheet.create({})