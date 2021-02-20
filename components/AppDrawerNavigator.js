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
import { createDrawerNavigator } from 'react-navigation-drawer';
import AppTabNavigator from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';
import SettingsScreen from '../screens/SettingsScreen';

export default class AppDrawerNavigator extends React.Component {
  drawerNavigation = () => {
    var drawer = createDrawerNavigator(
      {
        Home: AppTabNavigator,
      },
      {
        Settings: SettingsScreen,
      },
      {
        contentComponent: CustomSideBarMenu,
      },
      {
        initialRouteName: 'Home',
      }
    );
  };

  render() {
    return <View>{this.drawerNavigation()}</View>;
  }
}
