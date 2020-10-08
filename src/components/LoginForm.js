import React, { Component } from 'react';
import { Text } from 'react-native';

import {Card, CardSection, Button, Input, Spinner} from './common'

import firebase from 'firebase'

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    }

onLoginSuccess() {
    this.setState({
        email: '',
        assword: '',
        error: '',
        loading: false
    })
}    

onButtonPress() {
    const { email, password } = this.state
    console.log('processing login')

    this.setState({ error:'', loading: true})

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(this.onLoginSuccess)
    .catch( error => {
        console.log(error.message);
        
    })
}

    renderButton() {
        if (this.state.loading) {
            return <Spinner />
        }
        return (
            <Button
                onPress={ () => this.onButtonPress() }>
                    Login
            </Button>
        )
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                    label="Email" 
                    placeholder="email1@gmail.com" 
                    value={this.state.email}
                    onChangeText = { (email) => this.setState({email})}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                    label="Password" 
                    placeholder="password" 
                    secureTextEntry= { true }
                    value={this.state.password}
                   onChangeText = { (password) => this.setState({password})}
                    />
                </CardSection>
                <Text style={ { fontSize: 20, alignSelf: 'center', color: 'red'} } >
                    { this.state.error }
                </Text>
                <CardSection>
                    { this.renderButton() }
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;
