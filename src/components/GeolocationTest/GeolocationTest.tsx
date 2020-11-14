import React, {useEffect, useState, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';
import MapboxGL from '@react-native-mapbox-gl/maps';

Geolocation.setRNConfiguration({
  skipPermissionRequests: false,
  authorizationLevel: 'whenInUse',
});

MapboxGL.setConnected(true);
MapboxGL.setAccessToken(
  'pk.eyJ1IjoibHVpc2Nhc2NhdGUiLCJhIjoiY2thZTV4enBnMDkzejJ6bXdteW9zdXVpYSJ9.H9s_qcrjappLp5MRtgHAxQ',
);

const markers = [{lng: -84.1084, lat: 9.938, name: 'Estadio Nacional'}];

const GeolocationTest = () => {
  const [currentPosition, setCurrentPosition] = useState<GeolocationResponse>();
  let map: MapboxGL.Camera | null;

  const getGeolocation = () => {
    Geolocation.getCurrentPosition((position) => {
      setCurrentPosition(position);
      console.warn(position);
    });
  };

  const watchPosition = () => {
    Geolocation.watchPosition(
      (position) => {
        setCurrentPosition(position);
      },
      (error) => {
        console.warn(error);
      },
      {timeout: 5000, maximumAge: 3000, enableHighAccuracy: true},
    );
  };

  const setMapInstance = (mapBox: MapboxGL.Camera) => {
    map = mapBox;
  };

  useEffect(() => {
    watchPosition();
  }, []); // Reemplaza el componentDidMount

  useEffect(() => {
    if (currentPosition && map) {
      map.setCamera({
        centerCoordinate: [
          currentPosition?.coords.longitude,
          currentPosition?.coords.latitude,
        ],
        animationDuration: 2000,
        zoomLevel: 16,
      });
    }
  }, [currentPosition]);

  return (
    <View>
      {currentPosition ? (
        <View style={styles.page}>
          <View style={styles.container}>
            <MapboxGL.MapView
              style={styles.map}
              styleURL="mapbox://styles/luiscascate/ckhhtclfn0lal1bp3182ema1z"
              zoomEnabled={true}>
              <MapboxGL.Camera ref={setMapInstance} />
              {markers.map((marker) => (
                <MapboxGL.MarkerView
                  key={`${marker.lng}`}
                  id={`${marker.lng}`}
                  coordinate={[marker.lng, marker.lat]}>
                  <Text>{marker.name}</Text>
                </MapboxGL.MarkerView>
              ))}
            </MapboxGL.MapView>
          </View>
        </View>
      ) : (
        <Text>No hay datos de geolocalización</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'tomato',
  },
  map: {
    flex: 1,
  },
});

export default GeolocationTest;
