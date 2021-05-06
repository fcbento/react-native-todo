import React from 'react'
import { AsyncStorage, Alert } from 'react-native';
import axios from 'axios';
import { Container, ForgotPassword } from './styles'
import Input from '../../components/input/input'
import Button from '../../components/button/button'
import { Entypo } from '@expo/vector-icons'

export default function SignIn(props) {

    const [email, onChangeUser] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const history = useHistory();

    const onSignIn = () => {
        axios.post('http://192.168.1.4:8080/login', { email, password }).then((res) => {
            props.checkUser(res.headers.authorization)
            setStorage('token', res.headers.authorization);
        }).catch((e) => {
            errorMessage('Email or password invalid')
        });
    }

    const setStorage = async (name, data) => {
        if (data && name) {
            try {
                await AsyncStorage.setItem(name, JSON.stringify(data));
            } catch (error) {
                console.log(error)
            }
        }
    }

    const errorMessage = (error) => {
        Alert.alert(
            "Something wrong", error,
            [{ text: "OK", onPress: () => console.log("OK Pressed") }],
            { cancelable: false }
        );
    }

    return (

        <Container>
            <Entypo name="drop" size={44} color="white" />

            <Input
                label={true}
                placeholder="Email"
                type="text"
                secureTextEntry={false}
                onChangeText={onChangeUser}
                value={email}
            />

            <Input
                label={true}
                labelName="Password"
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={onChangePassword}
                value={password}
            />

            <ForgotPassword>
                Forgot password?
            </ForgotPassword>

            <Button
                onPress={onSignIn}
                btnColor="transparent"
                fontColor="white"
                name="LOGIN" />

        </Container>
    )

}
