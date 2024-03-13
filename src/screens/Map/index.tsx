import {View} from 'react-native';
import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import styles from './styles.tsx';
import {HeaderComponent} from '../../components/header/Header.tsx';
import {useNavigation} from '@react-navigation/native';

const MapScreen = ({}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <HeaderComponent
        text={'Ubicación del recolector'}
        goBack={() => navigation.goBack()}
      />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{latitude: 37.78825, longitude: -122.4324}}
          title="Marker title"
          description="Marker description"
        />
      </MapView>
    </View>
  );
};

export default MapScreen;
