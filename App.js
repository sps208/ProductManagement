import React, { Component } from 'react';
import { View } from 'react-native';

import Header from './src/components/common/Header'

class App extends Component {

  render() {
    return(
      <View>
        <Header title="Product Management"/>
      </View>
    );
  }

}

export default App;