import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen'
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen'
import InfoResults from './screens/InfoResults'
export default class App extends React.Component {
  render(){
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

const switchNavigator = createSwitchNavigator({
  LoginScreen:{screen:LoginScreen},
  WelcomeScreen:{screen:WelcomeScreen},
  InfoResults:{screen:InfoResults}
})

const AppContainer = createAppContainer(switchNavigator);
