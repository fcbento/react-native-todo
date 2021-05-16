import { Button, View, } from 'react-native'
import React from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { Title, Description, Card, Price, Input } from './styles'

export default class ShoppingAddress extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            user: props.user,
            country: '',
            postCode: '',
            street: '',
            townCity: ''
        }
    }

    render() {
        return (
            <View>
                <Input placeholder="Country"></Input>
                <Button title={'Add'}></Button>
            </View>
        )
    }
}