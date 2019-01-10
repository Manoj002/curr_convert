import React, { Component } from 'react';
import { View, TouchableHighlight, Text, TextInput } from 'react-native';
import propTypes from 'prop-types';
import styles from './styles';
import color from 'color';

const InputWithButton = (props) => {

    const { onPress, buttonText, editable = true } = props;

    const containerStyles = [styles.container];

    if(editable === false ) {
        containerStyles.push(styles.containerDisabled)
    }

    const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
        styles.buttonBackgroundColorModifier
    )

    return(

        <View
            style={styles.containerStyles}
        >

            <TouchableHighlight
                style={styles.buttonContainer}
                onPress={onPress}
                //underlayColor={underlayColor}
                underlayColor="#F0F0F0"
            >

                <Text
                    style={styles.buttonText}
                >
                    {buttonText}
                </Text>

            </TouchableHighlight>

            <View
                style={styles.border}
            />

            <TextInput 
                underlineColorAndroid="transparent"
                style={styles.input}
                {...props}
            />

        </View>

    )
};

InputWithButton.propTypes = {
    onPress: propTypes.func,
    buttonText: propTypes.string,
    editable: propTypes.bool
}

export default InputWithButton;