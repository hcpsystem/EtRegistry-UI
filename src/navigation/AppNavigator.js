import {
    createStackNavigator,
    createBottomTabNavigator,
    createSwitchNavigator,
    createAppContainer
}
from 'react-navigation';
// Screen 
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home';
import ListUser from '../screens/ListUser';
import Photo from '../screens/Photo';
import Welcome from '../screens/Welcome';
import Loading from '../screens/Loading';

const AuthStack = createStackNavigator({
    Login,
    SignUp
});

const MainStack = createBottomTabNavigator(
    {
    Home,
    ListUser,
    Photo
    }
);

const AppStack = createStackNavigator({

});

const AppNavigator = createAppContainer(createSwitchNavigator(
    {
      Auth: AuthStack,
      Main: MainStack
    },
    {
        initialRouteName:'Auth'
    }
));

export default AppNavigator;


