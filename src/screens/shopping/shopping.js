import React, { useState, useEffect } from 'react'
import { Button, Image, Text } from 'react-native'
import { Container, Title, Description, Card, Price } from './styles'
import { AntDesign } from '@expo/vector-icons';
import { set } from 'react-native-reanimated';

export default function Shopping(props) {

    const [products, setProducts] = useState([]);

    const add = (product, index) => {
        products.forEach((item, i) => {
            if (index === i) {
                if (item.cartQuantity < product.quantity) {
                    item.cartQuantity = product.cartQuantity + 1;
                    setProducts(products);
                }
                console.log(item)

            }
        });

    }

    useEffect(() => {

        props.cart.forEach(element => {
            element.cartQuantity = 1;
        });

        setProducts(props.cart);
    })
    return (

        <Container>

            {products.map((product, index) => (
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
                        {product.cartQuantity}
                        <AntDesign name="pluscircle" size={24} color="black" onPress={() => add(product, index)} />
                    </Text>
                    <Description> On cart:  {product.quantityCart} </Description>
                    <Price>$ {product.price}</Price>
                </Card>
            ))}
        </Container>
    )
}
