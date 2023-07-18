import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';

const Course = () => {
  return (
    <View style={styles.mainContainer}>
      <Lottie
        style={styles.gifContainer}
        source={require('../../assets/working.json')}
        autoPlay
      />

      <Text style={styles.textContainer}>Testing Gifs</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gifContainer: {
    width: 100,
    height: 250,
  },
  textContainer: {
    marginTop: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
export default Course;
