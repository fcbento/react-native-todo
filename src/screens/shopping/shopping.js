import React from 'react'
import { Button, Image } from 'react-native'
import { Container, Title, Description, Card, Price } from './styles'

export default function Shopping(props) {
    console.log(props)
    return (

        <Container>

            {props.cart.map((product, index) => (
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

                    <Button
                        title={'Add'}>
                    </Button>

                </Card>
            ))}

        </Container>
    )
}
