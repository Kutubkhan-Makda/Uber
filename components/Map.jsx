import { StyleSheet } from 'react-native'
import React from 'react'
import MapView,{Marker} from 'react-native-maps'
import { useSelector } from 'react-redux'
import { selectDestination, selectOrigin } from '../slices/navSlice'
import MapViewDirections from 'react-native-maps-directions'
import { GOOGLE_MAPS_KEY } from '@env'

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);

  return (
    <MapView 
    className='flex-1' 
    mapType='satellite' 
    initialRegion={{latitude:37.78825,longitude:-122.4324,latitudeDelta:0.0722,longitudeDelta:0.0321,}}>
      {origin && destination && (
        <MapViewDirections
        origin={origin.description}
        destination={destination.description}
        apikey={GOOGLE_MAPS_KEY}
        strokeColor='black'
        strokeWidth={3}
        />
      )}
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