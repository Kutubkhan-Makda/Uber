import { FlatList, Image, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../slices/navSlice';

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

const SURGE_CHARGE_RATE = 1.5;

const RideOptionCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  return (
    <SafeAreaView style={styles.AndroidSafeArea} className='bg-white flex-grow'>
      <View>
        <TouchableOpacity onPress={()=>navigation.navigate('NavigateCard')} className='absolute top-3 left-5 z-50 p-3 rounded-full'>
          <Icon name='chevron-left' type='fontawsome'/>
        </TouchableOpacity>
        <Text className='text-center text-xl py-5'>Select A Ride - {travelTimeInformation?.distance.text}</Text>
      </View>
      <FlatList 
      data={data} 
      keyExtractor={item => item.id} 
      renderItem={({item:{title,image,multiplier,id},item})=>(
        <TouchableOpacity onPress={()=>setSelected(item)} className={id===selected?.id ? 'bg-gray-200 flex-row items-center justify-between px-10' : 'flex-row items-center justify-between px-10'}>
          <Image style={{width:100,height:100,resizeMode:'contain'}} source={{uri:image}}/>
          <View className='-ml-6'>
            <Text className='text-xl font-semibold'>{title}</Text>
            <Text>{travelTimeInformation?.duration.text} Travel Time</Text>
          </View>
          <Text className='text-xl'>
            {new Intl.NumberFormat('en-gb',{style:'currency',currency:'GBP'}).format((travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier)/100)}
            $99
          </Text>
        </TouchableOpacity>
      )}/>
      <View className='mt-auto border-t border-gray-200'>
        <TouchableOpacity className={!selected?'bg-gray-300 py-3 m-3':'bg-black py-3 m-3'} disabled={!selected}>
          <Text className='text-center text-white text-xl'>Choose {selected?.title}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default RideOptionCard

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});
