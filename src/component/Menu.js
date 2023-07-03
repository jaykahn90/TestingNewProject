import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Course')}
      >
        {/* <Text style={styles.textStyle}>Course</Text> */}
        <Image
          style={styles.iconStyle}
          source={{
            uri: 'https://img.icons8.com/?size=512&id=82827&format=png',
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
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
  },
  textStyle: {
    textTransform: 'uppercase',
    //marginBottom: 50,
  },
  iconStyle: {
    width: '100%',
    height: 50,
    aspectRatio: 1,
  },
});

export default Menu;
