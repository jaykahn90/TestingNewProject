import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity
        testID="Button1"
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Course')}
      >
        <View style={styles.buttonContent}>
          {/* <Text style={styles.textStyle}>Course</Text> */}
          <Image
            style={styles.iconStyle}
            source={{
              uri: 'https://img.icons8.com/?size=512&id=82827&format=png',
            }}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        testID="Button2"
        onPress={() => navigation.navigate('User Data')}
      >
        <Image
          style={styles.iconStyle}
          source={{
            uri: 'https://img.icons8.com/?size=512&id=83833&format=png',
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        testID="Button3"
        onPress={() => navigation.navigate('About')}
      >
        <Image
          style={styles.iconStyle}
          source={{
            uri: 'https://img.icons8.com/?size=512&id=86506&format=png',
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        testID="Button4"
        onPress={() => navigation.navigate('Contact')}
      >
        <Image
          style={styles.iconStyle}
          source={{
            uri: 'https://img.icons8.com/?size=512&id=87387&format=png',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: 30,
    //backgroundColor: 'blue', //just for running/debuggin detox first test
  },
  textStyle: {
    textTransform: 'uppercase',
    marginBottom: 40,
  },
  iconStyle: {
    width: '100%',
    height: 50,
    aspectRatio: 1,
  },
  buttonStyle: {
    //backgroundColor: 'red',
    paddingTop: 15,
    paddingBottom: 35,
    alignItems: 'center',
    justifyContent: 'center', // Temporarily for debugging
  },
  buttonContent: {
    flexDirection: 'column', // or 'row' for horizontal alignment
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Menu;
