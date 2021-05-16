import { View, Text, Button, StyleSheet } from 'react-native'
import { Title, Description, Card, Price } from './styles'
import React, { Component, useState } from 'react';
import { formatMoney } from '../../utils/common';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ShoppingAddress from './shopping-address';

export default class ShoppingDetail extends React.Component {

    constructor(props, context) {

        super(props, context);
        this.state = {
            user: ''
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('user', (errs, result) => {
            if (!errs) {
                if (result !== null) {
                    this.setState({ user: JSON.parse(result) });
                }
            }
        });
    }

    render() {
        return (
            <Card>
                {
                    this.props.products.map((product, index) => (
                        <View key={index}>
                            <Description> {product.category.name} </Description>
                            <Title>{product.name}</Title>
                            <Description> Price : $ {formatMoney(product.price)} </Description>
                            <Description> Qty : {product.cartQuantity} </Description>
                            <Description> Total : $ {formatMoney(product.cartQuantity * product.price)} </Description>
                        </View>
                    ))
                }

                < Title > TOTAL : $ {this.props.totalPrice}</Title >

                {this.state.user && this.state.user.addressList.length > 0 ?
                    (
                        <View>
                            <Text>Email : {this.state.user.username}</Text>
                            {this.state.user ? this.state.user.addressList.map((address) => (
                                <View key={address.id}>
                                    <Text>Country : {address.country}</Text>
                                    <Text>Postcode : {address.postcode}</Text>
                                    <Text>Street : {address.street}</Text>
                                    <Text>Town/City : {address.townCity}</Text>
                                </View>

                            )) : null}
                        <Button title={'Finish'}></Button>
                        </View>

                    ) :
                    (
                        <View>
                            <ShoppingAddress user={this.state.user}></ShoppingAddress>
                        </View>
                    )
                }


            </Card >
        )
    }
}