import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';


import Header from './src/components/common/Header'
import config from './src/config'
import LoginForm from './src/components/LoginForm'
import Logout from './src/components/Logout'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    }
  }

  componentDidMount() {
    if(!firebase.apps.length) {
      console.log('Init firebase...');
      firebase.initializeApp(config.firebaseConfig);
    }

    firebase.auth().onAuthStateChanged((user) => {
        this.setState(({loggedIn: !!user}))
    })
  }

  render() {
    return(
      <View>
        <Header title="Product Management"/>
        { this.state.loggedIn ? <Logout /> : <LoginForm /> }
      </View>
    );
  }

}

export default App;