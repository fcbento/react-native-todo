import React from 'react'
import { Container, Title, Description, Card, Price } from './styles'
import { AsyncStorage, Button, Image } from 'react-native';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Products(props) {

    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {

        let headers = {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            Authorization: JSON.parse(props.token)
        }

        console.log(props)

        const { data } = await axios.get(
            'http://192.168.1.4:8080/api/products?size=10&page=0', { headers: headers }
        );
        setProducts(data.content);
    };

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
                        style={{width: 140, height: 140}}
                        source={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }}
                    />
                    <Price>$ {product.price}</Price>
                    <Button title={'Buy'}></Button>
                </Card>
            ))}

        </Container>
    )
}
