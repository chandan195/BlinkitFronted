import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Colors} from '../../utils/Constants';
import logo from '../../assets/images/splash_logo.jpeg';
import {screenHeight, screenWidth} from '../../utils/dist/Scaling';

const SplashScreen = () => {
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
    height: screenHeight * 0.7,
    width: screenWidth * 0.7,
    resizeMode: "contain"
  },
});
export default SplashScreen;
