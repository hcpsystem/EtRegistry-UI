import React,{Component} from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';
import { Container, Header,Title, Content, Form, Item, Input, Left, Right, Body, Icon } from 'native-base';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {UserName: '',Password:''};
    }
    
    goToSignUp = () => {
        this.props.navigation.navigate('SignUp')
    }
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state);
        event.preventDefault();
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                        <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>LOGIN</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Form onSubmit={this.handleSubmit}>
                        <Item>
                            <Input placeholder="Username" onChangeText={ (text) => this.setState({ UserName: text }) } />
                        </Item>
                        <Item last>
                            <Input secureTextEntry={true} placeholder="Password" onChangeText={ (text) => this.setState({ Password: text }) } />
                        </Item>
                        <Button block success>
                            <Text>SignIn</Text>
                        </Button>
                    </Form>

                    <View>
                        <Button block info  onPress={this.goToSignUp}>
                            <Text>SignUp</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
            
        );
    }
}
export default Login;