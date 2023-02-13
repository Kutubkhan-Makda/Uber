import { StyleSheet } from 'react-native'
import React from 'react'
import MapView,{Marker} from 'react-native-maps'
import { useSelector } from 'react-redux'
import { selectOrigin } from '../slices/navSlice'

const Map = () => {
  const origin = useSelector(selectOrigin)

  return (
    <MapView 
    className='flex-1' 
    mapType='satellite' 
    initialRegion={{latitude:37.78825,longitude:-122.4324,latitudeDelta:0.0722,longitudeDelta:0.0321,}}>
      {origin?.location && (
        <Marker coordinate={{
          latitude:37.78825,
          longitude:-122.4324,
        }}
        title='origin'
        description={origin.description}
        identifier='origin'
        />
      )}
    </MapView>
  )
}

export default Map

const styles = StyleSheet.create({})


// add origin.location.lat and origin.location.lng