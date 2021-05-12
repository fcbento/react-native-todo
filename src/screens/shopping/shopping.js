import React, { useState, useEffect } from 'react'
import { Button, Image, Text } from 'react-native'
import { Container, Title, Description, Card, Price } from './styles'
import { AntDesign } from '@expo/vector-icons';
import { set } from 'react-native-reanimated';

export default function Shopping(props) {

    const [products, setProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState([]);

    useEffect(() => {

        props.cart.forEach(element => {
            element.cartQuantity = 1;
        });
        
        setStates(props.cart);

    }, []);

    const addOrRemove = (product, type) => {

        products.forEach((item) => {
            if (product.productId == item.productId) {
                if (type === 'add')
                    product.cartQuantity < product.quantity ? item.cartQuantity++ : 0;
                else
                    product.cartQuantity > 1 ? item.cartQuantity-- : 0;
            }
        });

        setStates(products);
    }

    const setStates = (arr) => {
        setTotalPrice(formatMoney(sumItems(arr)));
        setProducts([...arr]);
    }

    const sumItems = (arr) => {
        return arr.reduce((acc, product) => {
            return acc + (product.cartQuantity * product.price)
        }, 0);
    }

    const formatMoney = (value) => {
        return value ? value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') : 0;
    }

    return (
        <>
            <Card>
                <Title >TOTAL : $ {totalPrice}</Title>
            </Card>

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
                        <Price>$ {formatMoney(product.price * product.cartQuantity)}</Price>
                    </Card>
                ))}

            </Container>
        </>
    )
}
