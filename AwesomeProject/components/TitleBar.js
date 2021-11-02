import 'react-native-gesture-handler';
import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';

const TitleBar = props => {
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View
        style={{
          paddingStart: 20,
          backgroundColor: props.backgroundColour,
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
        }}>
        <Text
          style={{
            fontSize: 20,
            color: 'white',
            fontFamily: 'Poppins-SemiBold',
          }}>
          {props.pageName}
        </Text>

        <Text
          style={{
            fontSize: 32,
            color: 'white',
            paddingTop: 15,
            fontFamily: 'Philosopher-Bold',
          }}>
          {props.heading}
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: 'white',
            paddingTop: 15,
            paddingBottom: 30,
            fontFamily: 'Poppins-Regular',
          }}>
          {props.subHeading}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default TitleBar;
