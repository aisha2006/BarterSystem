import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import SignupLogin from './screens/SignupLogin';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AppTabNavigator from './components/AppTabNavigator';
import AppStackNavigator from './components/AppStackNavigator';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const SwitchNavigator = createSwitchNavigator({
  SignupLogin: { screen: SignupLogin },
  StackNavigator: AppStackNavigator,
  BottomNavigator: { screen: AppTabNavigator },
});

const AppContainer = createAppContainer(SwitchNavigator);
