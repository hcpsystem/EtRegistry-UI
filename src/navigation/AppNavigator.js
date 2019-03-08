import React from 'react';
import {View,Keyboard} from 'react-native';
import {Button} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

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
import Colors from '../theme/styles/colors';

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

MainStack.navigationOptions = ({ navigation }) => {
    const { routeName } = navigation.state.routes[navigation.state.index];
    const headerTitle = routeName;
  
    return {
      headerLayoutPreset: 'center',
      headerTintColor: 'white',
      headerBackTitle: null,
      headerStyle: {
        backgroundColor: Colors.blueBg,
      },
      //headerTitle,
      headerTitleStyle: {
        textAlign: 'center',
        flexGrow:1,
        alignSelf:'center',
      }
    };
};

const AppStack = createStackNavigator(
    {
      Home: {
        screen: MainStack,
      },
    }
  );
  
const AppNavigator = createAppContainer(createSwitchNavigator(
    {
        Loading: Loading,
        Auth: AuthStack,
        App: AppStack,
    },
    {
        initialRouteName:'Loading'
    }
));

export default AppNavigator;


