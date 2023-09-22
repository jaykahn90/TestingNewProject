import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';

const About = () => {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}>Automate Technical Support</Text>
      <Text style={[styles.paraStyle]}>Mon-Fri 9am-5pm</Text>

      <View>
        <Image
          style={styles.imgStyle}
          source={{
            uri:
              'https://images.pexels.com/photos/3756879/pexels-photo-3756879.jpeg?auto=compress&cs=tinysrgb&w=1600',
          }}
        />
      </View>

      <View style={styles.aboutLayout}>
        <Text style={styles.aboutSubHeader}>About Us</Text>
        <Text style={[styles.paraStyle, styles.aboutPara]}>
          Keep up to date with our latest news, product development and
          promotions
        </Text>
      </View>

      <Text style={styles.mainHeader}>Folow us on Social platforms</Text>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          testID="youtube-button"
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL('https://www.youtube.com/@RolleaseAcmeda')
          }
        >
          <Image
            style={styles.iconStyle}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          testID="instagram-button"
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL('https://www.instagram.com/rolleaseacmeda/')
          }
        >
          <Image
            style={styles.iconStyle}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/4494/4494488.png',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          testID="facebook-button"
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL('https://www.facebook.com/rolleaseacmeda/')
          }
        >
          <Image
            style={styles.iconStyle}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/4494/4494475.png',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutContainer: {
    display: 'flex',

    alignItems: 'center',
  },
  imgStyle: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  mainHeader: {
    fontSize: 18,
    color: '#344055',
    textTransform: 'uppercase',
    fontWeight: '500',
    marginTop: 30,
    marginBottom: 10,
    lineHeight: 30,
  },
  paraStyle: {
    fontSize: 18,
    color: '#7d7d7d',
    paddingBottom: 30,
  },
  aboutLayout: {
    backgroundColor: '#4c5dab',
    paddingHorizontal: 30,
    marginVertical: 30,
  },
  aboutSubHeader: {
    fontSize: 18,
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: '500',
    marginVertical: 15,
    alignSelf: 'center',
  },
  aboutPara: {
    color: '#fff',
  },
  menuContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  iconStyle: {
    width: '100%',
    height: 50,
    aspectRatio: 1,
  },
});

export default About;
