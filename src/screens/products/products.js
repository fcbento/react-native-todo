import React from 'react'
import { Container, Title, Description, Card, Price } from './styles'
import { AsyncStorage, Button, Image } from 'react-native';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Products(props) {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const fetchProducts = async () => {

        let headers = {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
        }

        const { data } = await axios.get(
            'http://192.168.1.4:8080/api/products?size=10&page=0'
        );
        setProducts(data.content);
    };

    const addToCard = (product) => {

        if (cart.length <= 0) {
            cart.push(product);
            setCart([...cart]);
        } else {

            let onCart = cart.filter(item => item.productId === product.productId)

            if (onCart.length <= 0) {
                cart.push(product);
                setCart([...cart]);
            }
        }

        props.dataFromCart(cart)

    }

    useEffect(() => {
        fetchProducts();
    }, []);

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

                    <Price>$ {product.price}</Price>
                    <Description> Available:  {product.quantity} </Description>

                    <Button
                        title={'Add'}
                        onPress={() =>
                            addToCard(product)}
                        disable={product.quantity <= 0}>
                    </Button>

                </Card>
            ))}

        </Container>
    )
}
