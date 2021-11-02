import React from 'react';
import Providers from './navigation';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';

const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const App = () => {
  return (
    <DismissKeyboard>
      <Providers />
    </DismissKeyboard>
  );
};

export default App;
