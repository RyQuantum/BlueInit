'use strict';

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  NativeModules
} from 'react-native';

class HelloWorld extends Component {

  constructor(props) {
    super(props);
    this.state = {
      string: 'null'
    };
  }
  
  scan = () => {
    NativeModules.TTLockModule.getString(string => this.setState({string}));
  };
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>Press the button to scan: </Text>
        <Text style={styles.hello}>{this.state.string}</Text>
        <Button title="React" onPress={this.scan}/>
      </View>
    )
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('MyReactNativeApp', () => HelloWorld);