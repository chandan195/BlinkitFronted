import {View, Text, StyleSheet, Image, Alert} from 'react-native';
import React, {useEffect} from 'react';
import {Colors} from '../../utils/Constants';
import logo from '../../assets/images/splash_logo.jpeg';
import {screenHeight, screenWidth} from '../../utils/dist/Scaling';
import GeoLocation from '@react-native-community/geolocation';
// set location permission
GeoLocation.setRNConfiguration({
  skipPermissionRequests: false,
  authorizationLevel: 'always',
  enableBackgroundLocationUpdates: true,
  locationProvider: 'auto',
});

const SplashScreen = () => {
  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        GeoLocation.requestAuthorization(); // request authorization
      } catch (error) {
        Alert.alert(
          'sorry we need location services to give you a better experience', // error message for not give permission
        );
      }
    };
    const timeoutId = setTimeout(fetchUserLocation, 1000); //set timeout
    return () => clearTimeout(timeoutId); // clear timeout
  }, []);
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logoImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  logoImage: {
    height: screenHeight * 0.3,
    width: screenWidth * 1,
    resizeMode: 'contain',
  },
});
export default SplashScreen;
