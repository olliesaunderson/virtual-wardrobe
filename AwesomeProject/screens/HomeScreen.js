import React, {useState, useCallback, useRef} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import TitleBar from '../components/TitleBar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const exampleItems = [
  {
    title: 'London',
    text: '24°',
    icon: 'white-balance-sunny',
    text2: 'Expect mainly sunshine.',
    color: '#FFC14F',
  },
  {
    title: 'Wednesday',
    text: '18ᵗʰ',
    icon: 'briefcase',
    text2: 'You have a 1pm meeting today.',
    color: '#FF6868',
  },
  {
    title: 'Wednesday',
    text: '7',
    icon: 'home',
    text2: 'You have a 1pm meeting today.',
    color: '#fff',
  },
];

const HomeScreen = ({navigation}) => {
  const [carouselItems] = useState(exampleItems);
  const ref = useRef(null);

  const renderItem = useCallback(
    ({item}) => (
      <View
        style={{
          backgroundColor: item.color,
          borderRadius: 25,
          height: 205,
          width: 200,
          padding: 30,
          marginLeft: 20,
        }}>
        <Text style={styles.custom}>{item.title}</Text>
        <Text style={styles.carouselSubtitle}>{item.text}</Text>
        <MaterialCommunityIcons
          name={item.icon}
          color="#fff"
          size={26}
          style={{paddingTop: 8, paddingBottom: 2}}
        />
        <Text style={styles.carouselSubtitle2}>{item.text2}</Text>
      </View>
    ),
    [],
  );
  return (
    <SafeAreaView style={{backgroundColor: '#161D70'}}>
      <StatusBar barStyle={'light-content'} />
      <TitleBar
        pageName="Home"
        heading="Good Afternoon, Ollie."
        subHeading="Catch up on what to expect for today and inspire your outfit choice."
        backgroundColour="#161D70"
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundColor: 'white',
          paddingTop: 25,
        }}>
        <Carousel
          layout="default"
          layoutCardOffset={18}
          ref={ref}
          data={carouselItems}
          sliderWidth={200}
          itemWidth={230}
          renderItem={renderItem}
        />
      </View>

      <View
        style={{
          paddingTop: 30,
          alignItems: 'flex-start',
          backgroundColor: 'white',
        }}>
        <Text
          style={{
            paddingStart: 20,
            fontSize: 24,
            color: '#161D70',
            fontFamily: 'Philosopher-Bold',
          }}>
          {' '}
          What Next…{' '}
        </Text>

        <View
          style={{
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              width: '40%',
              alignItems: 'flex-end',
              marginStart: 25,
              marginTop: 20,
              marginBottom: 30,
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
              <Image source={require('../assets/uploadClothesButton.png')} />
              <Text
                style={{
                  paddingTop: 25,
                  fontSize: 14,
                  textAlign: 'center',
                  color: '#161D70',
                  fontFamily: 'Poppins-SemiBold',
                }}>
                Upload Your{'\n'}
                Clothes
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: '40%',
              alignItems: 'flex-start',
              marginStart: 30,
              marginEnd: 25,
              marginTop: 20,
              marginBottom: 30,
            }}
            onPress={() => navigation.navigate('MessagesHome')}>
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
              <Image source={require('../assets/createOutfitButton.png')} />
              <Text
                style={{
                  paddingTop: 20,
                  fontSize: 14,
                  textAlign: 'center',
                  color: '#161D70',
                  fontFamily: 'Poppins-SemiBold',
                }}>
                Create an{'\n'}
                Outfit
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  custom: {
    fontFamily: 'Philosopher-Bold',
    fontSize: 24,
    color: '#fff',
  },
  carouselSubtitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 34,
    color: '#fff',
  },
  carouselSubtitle2: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#fff',
  },
});
