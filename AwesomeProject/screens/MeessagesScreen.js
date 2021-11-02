import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Alert} from 'react-native';
import TitleBar from '../components/TitleBar';
import FloatingButton from '../components/FloatingButton';

const MessagesScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#FFC14F'}}>
      <TitleBar
        pageName="Outfits"
        heading="Outfit Of The Day"
        subHeading="Based on today’s weather, we would recommend some shorts!"
        backgroundColour="#FFC14F"
      />
      <View>
        <View
          style={{
            backgroundColor: '#fff',
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: '40%',
              alignItems: 'flex-end',
              marginStart: 25,
              marginTop: 20,
              marginBottom: 10,
            }}
            onPress={() => navigation.navigate('AddPost')}>
            <View
              style={{
                justifyContent: 'flex-end',
                alignItems: 'center',
                width: '100%',
                height: 200,
                borderRadius: 30,
                backgroundColor: '#F5F6F9',
                paddingBottom: 30,
              }}>
              <Text
                style={{
                  paddingTop: 25,
                  fontSize: 14,
                  textAlign: 'center',
                  color: '#161D70',
                  fontFamily: 'Poppins-SemiBold',
                }}>
                Summer 1
              </Text>
            </View>
          </View>

          <View
            style={{
              width: '40%',
              alignItems: 'flex-start',
              marginStart: 30,
              marginEnd: 25,
              marginTop: 20,
              marginBottom: 10,
            }}
            onPress={() => navigation.navigate('Messages')}>
            <View
              style={{
                justifyContent: 'flex-end',
                alignItems: 'center',
                width: '100%',
                height: 200,
                borderRadius: 30,
                backgroundColor: '#F5F6F9',
                paddingBottom: 30,
              }}>
              <Text
                style={{
                  paddingTop: 20,
                  fontSize: 14,
                  textAlign: 'center',
                  color: '#161D70',
                  fontFamily: 'Poppins-SemiBold',
                }}>
                Party 1
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            flexDirection: 'row',
            paddingBottom: 82,
          }}>
          <View
            style={{
              width: '40%',
              alignItems: 'flex-end',
              marginStart: 25,
              marginTop: 20,
              marginBottom: 10,
            }}
            onPress={() => navigation.navigate('AddPost')}>
            <View
              style={{
                justifyContent: 'flex-end',
                alignItems: 'center',
                width: '100%',
                height: 200,
                borderRadius: 30,
                backgroundColor: '#F5F6F9',
                paddingBottom: 30,
              }}>
              <Text
                style={{
                  paddingTop: 25,
                  fontSize: 14,
                  textAlign: 'center',
                  color: '#161D70',
                  fontFamily: 'Poppins-SemiBold',
                }}>
                Work 1
              </Text>
            </View>
          </View>

          <View
            style={{
              width: '40%',
              alignItems: 'flex-start',
              marginStart: 30,
              marginEnd: 25,
              marginTop: 20,
              marginBottom: 10,
            }}
            onPress={() => navigation.navigate('Messages')}>
            <View
              style={{
                justifyContent: 'flex-end',
                alignItems: 'center',
                width: '100%',
                height: 200,
                borderRadius: 30,
                backgroundColor: '#F5F6F9',
                paddingBottom: 30,
              }}>
              <Text
                style={{
                  paddingTop: 20,
                  fontSize: 14,
                  textAlign: 'center',
                  color: '#161D70',
                  fontFamily: 'Poppins-SemiBold',
                }}>
                Party 2
              </Text>
            </View>
          </View>
        </View>
        <FloatingButton
          buttonColour="#FFC14F"
          pressButton={() =>
            Alert.alert(
              'Coming Soon!',
              'Outfit creation is still under development, but will be available soon.')}
        />
      </View>
    </SafeAreaView>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
