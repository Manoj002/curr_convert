import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import HomeScreen from './Screens/HomeScreen';

EStyleSheet.build({
    $primaryBlue: "#4F6D7A",
    $white: "#FFFFFF",
    $border: "#E2E2E2",
    $inputText: "#797979",
    $lightGray: "#000"
})

export default () => <HomeScreen />;