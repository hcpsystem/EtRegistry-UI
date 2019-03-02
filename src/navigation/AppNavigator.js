import React from 'react';
import {View} from 'react-native';
import {
    createStackNavigator,
    createBottomTabNavigator,
    createDrawerNavigator,
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation';
// Screen 
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home';
import ListUser from '../screens/ListUser';
import Photo from '../screens/Photo';
import Welcome from '../screens/Welcome';
import Loading from '../screens/Loading';

const AuthStack = createStackNavigator(
    {
    Login,
    SignUp
    },
    {
    contentOptions: {
        inactiveTintColor: 'white'
    },
    headerLayoutPreset: 'center'
    }
);

const MainStack = createBottomTabNavigator(
    {
    Home,
    ListUser,
    Photo
    }
);

const AppNavigator = createAppContainer(createSwitchNavigator(
    {
        AuthStack: AuthStack
    },
    {
        initialRouteName:'AuthStack'
    }
));

export default AppNavigator;


