import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDgVSdldxbAA_FnehrFrlqxn_SX1T5WeN4',
      authDomain: 'auth-e5fb0.firebaseapp.com',
      databaseURL: 'https://auth-e5fb0.firebaseio.com',
      storageBucket: 'auth-e5fb0.appspot.com',
      messagingSenderId: '654279415431'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An App!</Text>
      </View>
    );
  }
}

export default App;
