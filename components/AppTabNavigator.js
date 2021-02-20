import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  ToastAndroid,
  Alert,
  Modal,
} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import ExchangeScreen from '../screens/ExchangeScreen';
import HomeScreen from '../screens/HomeScreen';

export default class AppTabNavigator extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  ExchangeScreen: ExchangeScreen,
  HomeScreen: HomeScreen,
});

const AppContainer = createAppContainer(TabNavigator);
