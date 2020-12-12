import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import Navigation from './Navigation'

export class Index extends Component {
    render() {
        return (
            <>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#000"
                />
                <NavigationContainer>
                    <Navigation />
                </NavigationContainer>
            </>
        )
    }
}

export default Index
