import { FlatList, Image, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
    <SafeAreaView style={styles.AndroidSafeArea} className='bg-white flex-grow'>
      <View>
        <TouchableOpacity onPress={()=>navigation.navigate('NavigateCard')} className='absolute top-3 left-5 z-50 p-3 rounded-full'>
          <Icon name='chevron-left' type='fontawsome'/>
        </TouchableOpacity>
        <Text className='text-center text-xl py-5'>Select A Ride</Text>
      </View>
      <FlatList 
      data={data} 
      keyExtractor={item => item.id} 
      renderItem={({item:{title,image,multiplier,id},item})=>(
        <TouchableOpacity>
          <Image style={{width:100,height:100,resizeMode:'contain'}} source={{uri:image}}/>
          <View>
            <Text>{title}</Text>
            <Text>Travel Time...</Text>
          </View>
        </TouchableOpacity>
      )}/>
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
