import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Container } from '../Components/Container/';
import { Logo } from '../Components/Logo';
import { InputWithButton } from '../Components/TextInput';
import { ClearButton } from '../Components/Buttons'
import { LastConverted } from '../Components/Text';
import { Header } from '../Components/Header';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const TEMP_CONVERSION_RATE = 0.7974;
const TEMP_CONVERSION_DATE = new Date();

class HomeScreen extends React.Component {

    handleBaseCurrency = () => {
        console.warn('press base');
    }

    handleQuoteCurrency = () => {
        console.warn('press quote');
    }

    handleTextChange = (text) => {
        console.warn("Change text", text);
    }

    handleSwapCurrency = () => {
        console.warn('press swap currency');
    }

    render() {

        return(

            <Container>

                <StatusBar 
                    translucent={ false } 
                    barStyle="light-content" 
                />

                <Header />
        
                <Logo />
                
                <InputWithButton 
                    buttonText={TEMP_BASE_CURRENCY}
                    onPress={this.handleBaseCurrency}
                    defaultValue={TEMP_BASE_PRICE}
                    keyboardType="numeric"
                    onChangeText={this.handleTextChange}
                />
                
                <InputWithButton 
                    buttonText={TEMP_QUOTE_CURRENCY}
                    onPress={this.handleQuoteCurrency}
                    editable={false}
                    value={TEMP_QUOTE_PRICE}
                />

                <LastConverted 
                    base={TEMP_BASE_CURRENCY}
                    quote={TEMP_QUOTE_CURRENCY}
                    date={TEMP_CONVERSION_DATE}
                    conversionRate={TEMP_CONVERSION_RATE}
                />

                <ClearButton 
                    text="Reverse Currencies"
                    onPress={this.handleSwapCurrency}
                />
        
            </Container>

        )

    }
    
}

export default HomeScreen;