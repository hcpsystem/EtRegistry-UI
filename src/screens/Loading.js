import React,{Component} from 'react';
import { View,Text,SafeAreaView } from 'react-native';
import { Container } from 'native-base';
import {
    ActivityIndicator,
    StatusBar,
  } from 'react-native';

class Loading extends Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
      }
    
    _bootstrapAsync = async () => {
        //const stack = (this.props.user.accessToken !== '') ? 'App' : 'Auth'
        const stack = 'Auth'
        this.props.navigation.navigate(stack);
    };  
    render() {
        return (
          <Container>
            <SafeAreaView>
              <ActivityIndicator />
              <StatusBar barStyle="default" />
            </SafeAreaView>
          </Container>
        );
    }
}
export default Loading;