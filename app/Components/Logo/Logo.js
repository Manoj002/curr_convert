import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import styles from './styles';

const Logo = () => (
    <View
        style={styles.container}
    >
        <ImageBackground
            resizeMode="contain"
            style={styles.containerImage}
            source={require('../Logo/images/background.png')}
        >
            <Image
                resizeMode="contain"
                style={styles.image}
                source={require('../Logo/images/logo.png')}
            />
        </ImageBackground>
        <Text
            style={styles.text}
        >
            Currency Converter
        </Text>
    </View>
);

export default Logo;