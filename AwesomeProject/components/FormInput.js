import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimensions';

const FormInput = ({labelValue, placeholderText, iconType, ...rest}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={labelValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor="#666"
        {...rest}
      />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '90%',
    height: windowHeight / 15,
    borderColor: '#ccc',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F6F9',
    justifyContent: 'center',
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    padding: 10,
    marginTop: 25,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 15,
    borderWidth: 1,
  },
});
