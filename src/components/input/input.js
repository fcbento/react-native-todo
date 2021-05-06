import React from 'react'
import { InputContainer, Label, Container, Wrapper } from './styles'
import { AntDesign, FontAwesome5, Ionicons } from '@expo/vector-icons';

export default function Input(props) {

    return (
        <Wrapper>
            <Container>

                <Label>
                    {props.label ? props.placeholder : ''}
                </Label>

                <InputContainer
                    type={props.type}
                    onChangeText={props.onChangeText}
                    value={props.value}
                    secureTextEntry={props.secureTextEntry}
                />
            </Container>
        </Wrapper>
    )
}
