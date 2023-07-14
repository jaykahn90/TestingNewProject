import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const Contact = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [agree, setAgree] = useState(false);

  const submit = () => {
    if (!name && !email && !phone && !message) {
      Alert.alert('please fill all fields');
    } else {
      Alert.alert(`Thank You ${name}`);
      navigation.navigate('Home');
    }
  };
  console.log('name :', name);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your name</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={'jalal khan'}
          value={name}
          onChangeText={userName => setName(userName)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your email</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={'abc@gmail.com'}
          value={email}
          onChangeText={userEmail => setEmail(userEmail)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your number</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={'0406 xxx xxx'}
          value={phone}
          onChangeText={userPhone => setPhone(userPhone)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Fill in the details</Text>
        <TextInput
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
        <BouncyCheckbox
          value={agree}
          onPress={() => setAgree(!agree)}
          fillColor={agree ? '#4630EB' : 'grey'}
          // onPress={isChecked => {}}
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
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  buttonText: {
    color: '#eee',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 10,
  },
  wrapperText: {
    marginTop: 3,
    marginLeft: -10,
    color: '#7d7d7d',
  },
});
export default Contact;
