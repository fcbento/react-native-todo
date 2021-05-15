import { View, Text, Button } from 'react-native'
import { Title, Description, Card, Price } from './styles'
import React, { Component } from 'react';
import { formatMoney } from '../../utils/common';

const ShoppingDetail = (props) => {

    return (
        <Card>
            {props.products.map((product, index) => (
                <View key={index}>
                    <Description> {product.category.name} </Description>
                    <Title>{product.name}</Title>
                    <Description> Price : $ {formatMoney(product.price)} </Description>
                    <Description> Qty : {product.cartQuantity} </Description>
                    <Description> Total : $ {formatMoney(product.cartQuantity * product.price)} </Description>
                </View>
            ))}
            <Title >TOTAL : $ {props.totalPrice}</Title>
            <Button title={'Finish'}></Button>
        </Card>
    )
}

export default ShoppingDetail;