import * as React from 'react';
import {FAB} from 'react-native-paper';

const FloatingButton = props => (
  <FAB
    style={{
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
      backgroundColor: props.buttonColour,
    }}
    medium
    icon="plus"
    onPress={props.pressButton}
    color="white"
  />
);

export default FloatingButton;
