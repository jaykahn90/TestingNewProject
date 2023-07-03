import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const Contact = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainContainer}>Level up</Text>

      <Text style={styles.mainContainer}>React us any time</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your name</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={'jalal khan'}
          // value={}
          // onChange={}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your email</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={'abc@gmail.com'}
          // value={}
          // onChange={}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your number</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={'0406 xxx xxx'}
          // value={}
          // onChange={}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Fill in the details</Text>
        <TextInput
          style={[styles.inputStyle, styles.multilineStyle]}
          placeholder={'Whats the issue'}
          // value={}
          // onChange={}
          numberOfLines={5}
          multiline={true}
        />
      </View>

      {/* CheckBox */}
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 20,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 2,
  },
  multiline: {
    paddingVertical: 4,
  },
});
export default Contact;
