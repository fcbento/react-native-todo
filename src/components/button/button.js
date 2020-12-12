import React from 'react'
import { Container, ButtonName, ButtonWrapper } from './styles'

export default function Button(props) {
    return (
        <Container>
            <ButtonWrapper btnColor={props.btnColor} onPress={props.onPress}>
                <ButtonName fontColor={props.fontColor}> {props.name} </ButtonName>
            </ButtonWrapper>
        </Container>
    )
}
