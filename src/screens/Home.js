import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Menu from '../component/Menu';

const Home = props => {
  const description = 'Dummy App For Learning JEST.';
  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Image
          style={styles.headerImage}
          resizeMode="center" //when using this property then in iOS there is no borderRadius.
          source={require('../../assets/DetoxImage.jpg')}
        />
        <Text style={styles.mainHeader}>{props.mainScreenWelcome}</Text>
        <Text
          style={[
            styles.mainHeader,
            {fontSize: 33, color: '#4c5dab', marginTop: 0},
          ]}
        >
          {props.mainScreenTitle}
        </Text>
        <Text style={styles.paraStyle}>{description}</Text>
      </View>
      <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
        <Menu />
        <View
          style={[
            styles.lineStyle,
            {
              marginVertical: 20,
            },
          ]}
        ></View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  homeTop: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  headerImage: {
    height: undefined,
    width: '100%',
    aspectRatio: 1,
    display: 'flex',
    alignItems: 'stretch',
    marginTop: 50,
    borderRadius: 20,
    overflow: 'hidden',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  mainHeader: {
    fontSize: 30,
    color: '#344055',
    textTransform: 'uppercase',
  },
  paraStyle: {
    textAlign: 'left',
    fontSize: 19,
    color: '#7d7d7d',
    marginTop: 30,
    paddingBottom: 50,
    lineHeight: 26,
  },
  lineStyle: {
    marginBottom: -60,
    borderWidth: 0.5,
    borderColor: 'grey',
  },
  menuStyle: {
    //alignItems: 'center',
  },
});

export default Home;
