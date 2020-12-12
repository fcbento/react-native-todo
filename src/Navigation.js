import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AsyncStorage} from 'react-native';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';

import HomeScreen from './screens/home/home'
import ProfileScreen from './screens/profile/profile'
import SettingsScreen from './screens/settings/settings'
import SignInScreen from './screens/signin/signin'
import SignUpScreen from './screens/signup/signup'

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

    Settings: {
        lib: AntDesign,
        name: 'setting'
    }
}

export function Navigation() {

    const [isLogged, setLogged] = React.useState(false);

    const retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('token');
            await AsyncStorage.removeItem('token')
            if (value !== null) {
                setLogged(true)
            }
        } catch (error) {
            setLogged(false)
        }
    };

    retrieveData()

    const checkUser = (token) => {

        if (token)
            setLogged(true)
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
                            component={HomeScreen}
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
