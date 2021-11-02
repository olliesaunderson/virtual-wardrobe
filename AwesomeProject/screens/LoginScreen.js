import React, {useContext, useState} from 'react';
import {Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import {AuthContext} from '../navigation/AuthProvider';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const {login} = useContext(AuthContext);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>Sign In</Text>

      <FormInput
        labelValue={email}
        onChangeText={userEmail => setEmail(userEmail)}
        placeholderText="Enter Email"
        placeholderTextColor="#CBC9D9"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        onChangeText={userPassword => setPassword(userPassword)}
        placeholderText="Enter Password"
        placeholderTextColor="#CBC9D9"
        iconType="lock"
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Forgot Your Password?</Text>
      </TouchableOpacity>

      <FormButton
        buttonTitle="Sign In"
        onPress={() => login(email, password)}
      />

      <TouchableOpacity
        style={styles.forgotButton2}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.navButtonText}>
          Don't have an account? Create here
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 230,
    paddingBottom: 230,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 32,
    marginBottom: 30,
    color: '#051d5f',
    fontWeight: '700',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 5,
  },
  forgotButton2: {
    marginVertical: 15,
  },
  navButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#7B7890',
  },
});
