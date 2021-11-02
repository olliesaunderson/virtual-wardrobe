import React from 'react';
import { Image, TouchableOpacity, StyleSheet, Text, View, SafeAreaView } from "react-native";
import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
  let backgroundColor;

  backgroundColor = selected
    ? 'rgba(22, 29, 111, 0.8)'
    : 'rgba(22, 29, 111, 0.3)';

  return (
    <View
      style={{
        width: 8,
        height: 8,
        marginHorizontal: 3,
        borderRadius: 4,
        backgroundColor,
      }}
    />
  );
};

const Skip = ({...props}) => (
  <TouchableOpacity style={styles.touchableOpacity} {...props}>
    <Text style={styles.touchableText}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({...props}) => (
  <TouchableOpacity style={styles.touchableOpacity} {...props}>
    <Text style={styles.touchableText}>Next</Text>
  </TouchableOpacity>
);

const Done = ({...props}) => (
  <TouchableOpacity style={styles.touchableOpacity} {...props}>
    <Text style={styles.touchableText}>Done</Text>
  </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        bottomBarColor={'#fff'}
        imageContainerStyles={{paddingBottom: 30}}
        titleStyles={{fontSize: 35, color: '#161D6F', fontFamily: 'Philosopher-Bold'}}
        subTitleStyles={{fontSize: 16, color: '#161D6F', paddingBottom: 60, fontFamily: 'Poppins-Regular'}}
        onSkip={() => navigation.replace('Login')}
        onDone={() => navigation.navigate('Login')}
        pages={[
          {
            backgroundColor: '#fff',
            image: <Image source={require('../assets/onboarding-img-1.png')} />,
            title: 'WELCOME TO\n your new wardrobe',
            subtitle:
              'Swipe to see what we can offer,\n or skip to get started now.',
          },
          {
            backgroundColor: '#fff',
            image: <Image source={require('../assets/onboarding-img-2.png')} />,
            title: 'UPLOAD\n your clothing',
            subtitle: 'Take photos our use ours to\n build up your wardrobe.',
          },
          {
            backgroundColor: '#fff',
            image: <Image source={require('../assets/onboarding-img-3.png')} />,
            title: 'CREATE\n multiple outfits ',
            subtitle: 'Easily combine your clothes\n into new, exciting outfits.',
          },
          {
            backgroundColor: '#fff',
            image: <Image source={require('../assets/onboarding-img-4.png')} />,
            title: 'VIEW\n key information',
            subtitle:
              'Find out exactly what you need\n from your clothes and more.',
          },
        ]}
      />
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchableOpacity: {
    marginHorizontal: 20,
  },
  touchableText: {
    fontSize: 18,
    color: '#161D6F',
  },
});
