import React, { useState, useEffect } from 'react'
import { Button, Image, Text } from 'react-native'
import { Container, Title, Description, Card, Price } from './styles'
import { AntDesign } from '@expo/vector-icons';
import { set } from 'react-native-reanimated';

export default function Shopping(props) {

    const [products, setProducts] = useState([]);

    const addOrRemove = (product, type) => {

        products.forEach((item) => {
            if (product.productId == item.productId) {

                if (type === 'add') {
                    product.cartQuantity < product.quantity ? item.cartQuantity++ : 0;
                }

                if (type === 'remove') {
                    product.cartQuantity > 1 ? item.cartQuantity-- : 0;
                }
            }
        });

        setProducts([...products]);
    }

    useEffect(() => {

        props.cart.forEach(element => {
            element.cartQuantity = 1;
        });

        setProducts([...props.cart]);

    }, [])

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
                        <AntDesign name="minuscircle" size={24} color="black" onPress={() => addOrRemove(product, 'remove')} />
                        <AntDesign name="pluscircle" size={24} color="black" onPress={() => addOrRemove(product, 'add')} />
                    </Text>

                    <Description> On cart: {product.cartQuantity} </Description>
                    <Price>$ {product.price * product.cartQuantity}</Price>
                </Card>
            ))}
        </Container>
    )
}
