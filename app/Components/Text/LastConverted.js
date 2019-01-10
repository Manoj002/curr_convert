import React from 'react';
import propTypes from 'prop-types';
import { Text } from 'react-native';
import styles from './styles';
import moment from 'moment';

const LastConverted = ({ date, base, quote, conversionRate }) => (

    <Text
        style={styles.smallText}
    >
        1 { base } = { conversionRate } { quote } as of { moment(date).format("MMMM D, YYYY")}
    </Text>

);

LastConverted.propTypes = {
    date: propTypes.object,
    base: propTypes.string,
    quote: propTypes.string,
    conversionRate: propTypes.number
};

export default LastConverted;