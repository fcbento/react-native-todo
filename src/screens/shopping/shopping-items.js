import React from 'react'
import { View, Text, Image } from 'react-native'
import { formatMoney } from '../../utils/common';
import { Container, Title, Description, Card, Price, DescriptionTotal, TitleTotal } from './styles'
import { AntDesign } from '@expo/vector-icons';

export default function ShoppingItems(props) {
    console.log(props)
    return (
        <>
            {props.products.map((product, index) => (

                <Card key={index}>

                    <Description> {product.category.name} </Description>
                    <Title >{product.name}</Title>

                    <Image
                        style={{ width: '100%', height: 240 }}
                        source={{
                            uri: `${product.image}`,
                        }}
                    />

                    <Text>
                        <AntDesign name="minuscircle" size={24} color="black" onPress={() => props.addOrRemove(product, 'remove')} />
                        <AntDesign name="pluscircle" size={24} color="black" onPress={() => props.addOrRemove(product, 'add')} />
                    </Text>

                    <Description> On cart: {product.cartQuantity} </Description>
                    <Price>$ {formatMoney(product.price * product.cartQuantity)}</Price>
                </Card>
            ))}
        </>
    )
}
