import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';

const Contact = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [agree, setAgree] = useState(true);

  const submit = () => {
    console.log('submit button working');
    let missingFields = [];
    let invalidFields = [];

    if (!name) {
      missingFields.push('name');
    } else if (!/^[a-zA-Z\s]*$/.test(name)) {
      invalidFields.push('name');
    }
    if (!email) missingFields.push('email');
    if (!phone) {
      missingFields.push('phone');
    } else if (!/^\d+$/.test(phone)) {
      invalidFields.push('phone');
    }
    if (!message) missingFields.push('message');

    if (missingFields.length > 0) {
      Alert.alert(
        'Please fill the following fields: ' + missingFields.join(', '),
      );
      return;
    }
    if (invalidFields.length > 0) {
      Alert.alert(
        'Invalid input in the following fields: ' + invalidFields.join(', '),
      );
      return;
    }
    Alert.alert(`Thank You ${name}`);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your name</Text>
        <TextInput
          testID="name-input"
          style={styles.inputStyle}
          placeholder={'jalal khan'}
          value={name}
          onChangeText={userName => setName(userName)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your email</Text>
        <TextInput
          testID="email-input"
          style={styles.inputStyle}
          placeholder={'abc@gmail.com'}
          value={email}
          onChangeText={userEmail => setEmail(userEmail)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your number</Text>
        <TextInput
          testID="phone-input"
          style={styles.inputStyle}
          placeholder={'0406 xxx xxx'}
          value={phone}
          onChangeText={userPhone => setPhone(userPhone)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Fill in the details</Text>
        <TextInput
          testID="message-input"
          style={[styles.inputStyle, styles.multilineStyle]}
          placeholder={'Whats the issue'}
          value={message}
          onChangeText={userMessage => setMessage(userMessage)}
          numberOfLines={5}
          multiline={true}
        />
      </View>

      {/* CheckBox */}

      <View style={styles.wrapper}>
        <CheckBox
          testID="checkbox"
          boxType="square"
          disabled={false}
          value={agree}
          onValueChange={() => setAgree(!agree)}
        />
        <Text style={styles.wrapperText}>
          I have read all terms and conditions
        </Text>
      </View>

      {/* Submit Button */}
      <TouchableOpacity
        style={[
          styles.buttonStyle,
          {backgroundColor: agree ? '#4630EB' : 'grey'},
        ]}
        disabled={!agree}
        onPress={submit}
        testID="contact-button"
      >
        <Text style={styles.buttonText}>Contact Us</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 2,
  },
  multiline: {
    paddingVertical: 4,
  },
  buttonStyle: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 18,
    marginHorizontal: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  buttonText: {
    color: '#eee',
    marginVertical: 5,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 10,
    paddingTop: 1,
  },
  wrapperText: {
    marginTop: 6,
    marginLeft: 10,
    color: '#7d7d7d',
  },
});
export default Contact;
