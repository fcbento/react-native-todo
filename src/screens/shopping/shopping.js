import React, { useState, useEffect } from 'react'
import { Button, Image, Text, View } from 'react-native'
import { Container, Title, Description, Card, Price, DescriptionTotal, TitleTotal } from './styles'
import { AntDesign } from '@expo/vector-icons';
import ShoppingDetail from './shopping-detail';
import ShoppingItems from './shopping-items';
import { formatMoney } from '../../utils/common';

export default function Shopping(props) {

    const [products, setProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState([]);
    const [isBought, setIsBought] = useState(false);

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

    const buyItems = () => {
        setIsBought(!isBought)
    }

    return (
        <>
            {!isBought ? (
                <Button title={'Buy'} onPress={buyItems}></Button>
            ) : null}

            {!isBought ? (
                <Container >
                    <ShoppingItems products={products} addOrRemove={addOrRemove}></ShoppingItems>
                </Container>
            ) :
                (
                    <Container >
                        <ShoppingDetail products={products} totalPrice={totalPrice}></ShoppingDetail>
                    </Container>
                )
            }
        </>
    )
}
