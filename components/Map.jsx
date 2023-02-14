import { StyleSheet } from 'react-native'
import React from 'react'
import MapView,{Marker} from 'react-native-maps'
import { useDispatch, useSelector } from 'react-redux'
import { selectDestination, selectOrigin, setTravelTimeInformation } from '../slices/navSlice'
import MapViewDirections from 'react-native-maps-directions'
import { GOOGLE_MAPS_KEY } from '@env'
import { useRef } from 'react'
import { useEffect } from 'react'

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if(!origin || !destination) return;
    mapRef.current.fitToSuppliedMarkers(['origin','destination'],{edgePadding:{top:50,bottom:50,left:50,right:50}})
  }, [origin,destination]);

  useEffect(()=>{
    if(!origin || !destination) return;
    const getTravelTime = async ()=>{
      fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_KEY}`)
      .then(res => res.json())
      .then(data => {dispatch(setTravelTimeInformation(data.rows[0].elements[0]))})
    }
    getTravelTime();
  },[origin,destination,GOOGLE_MAPS_KEY])
  
  return (
    <MapView 
    ref={mapRef}
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
      {destination?.location && (
        <Marker coordinate={{
          latitude:37.78825,
          longitude:-122.4324,
        }}
        title='destination'
        description={destination.description}
        identifier='destination'
        />
      )}
    </MapView>
  )
}

export default Map

const styles = StyleSheet.create({})


// add origin.location.lat and origin.location.lng
// add destination.location.lat and destination.location.lng