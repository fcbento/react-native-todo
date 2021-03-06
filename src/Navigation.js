import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AsyncStorage } from 'react-native';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';

import HomeScreen from './screens/home/home'
import ProfileScreen from './screens/profile/profile'
import SettingsScreen from './screens/settings/settings'
import SignInScreen from './screens/signin/signin'
import SignUpScreen from './screens/signup/signup'
import ProductScreen from './screens/products/products'
import ShoppingCartScreen from './screens/shopping/shopping'

const Tab = createBottomTabNavigator();

const icons = {

    SignIn: {
        lib: AntDesign,
        name: 'home'
    },

    SignUp: {
        lib: FontAwesome5,
        name: 'user-astronaut'
    },

    Home: {
        lib: AntDesign,
        name: 'home'
    },

    Profile: {
        lib: FontAwesome5,
        name: 'user-astronaut'
    },

    Product: {
        lib: AntDesign,
        name: 'menuunfold'
    },

    ShoppingCart: {
        lib: AntDesign,
        name: 'shoppingcart'
    },

    Settings: {
        lib: AntDesign,
        name: 'setting'
    }
}

export function Navigation() {

    const [isLogged, setLogged] = React.useState(false);
    const [token, setToken] = React.useState();
    const [cart, setCart] = React.useState([]);

    const retrieveData = async () => {

        const value = await AsyncStorage.getItem('token');
        //AsyncStorage.removeItem('token')

        if (value !== null) {
            setToken(value);
            setLogged(true);
        }
    };

    retrieveData();

    const checkUser = token => {
        if (token.includes('Bearer')) {
            setToken(token);
            setLogged(true);
        }
    }

    const dataFromCart = (cart) => {
        setCart(cart);
    }

    return (
        <>

            <Tab.Navigator

                screenOptions={({ route, navigation }) => ({
                    tabBarIcon: ({ color, size, focused }) => {
                        const { lib: Icon, name } = icons[route.name];
                        return <Icon name={name} size={size} color={color} />
                    },
                })}

                tabBarOptions={{

                    style: {
                        backgroundColor: '#fff',
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                        paddingBottom: 5,
                    },

                    activeTintColor: '#000',
                    inactiveTintColor: '#92929c'
                }}>

                {isLogged ? (

                    <>
                        <Tab.Screen
                            name="Home"
                            children={() => <HomeScreen />}
                        />

                        <Tab.Screen
                            name="Product"
                            children={() => <ProductScreen token={token} dataFromCart={dataFromCart} />}
                        />

                        <Tab.Screen
                            name="ShoppingCart"
                            children={() => <ShoppingCartScreen cart={cart} />}
                        />

                        <Tab.Screen
                            name="Profile"
                            component={ProfileScreen}
                        />

                        <Tab.Screen
                            name="Settings"
                            component={SettingsScreen}
                        />
                    </>
                ) :

                    (
                        <>

                            <Tab.Screen
                                name="SignIn"
                                children={() => <SignInScreen checkUser={checkUser} />}
                                options={{
                                    title: 'Sign In',
                                }}
                            />

                            <Tab.Screen
                                name="SignUp"
                                component={SignUpScreen}
                                options={{
                                    title: 'Sign Up',
                                }}
                            />
                        </>
                    )
                }

            </Tab.Navigator>

        </>
    )
}

export default Navigation
