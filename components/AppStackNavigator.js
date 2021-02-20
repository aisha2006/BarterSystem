import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {View} from 'react-native'
import UserDetailsScreen from '../screens/UserDetailsScreen'; 
import AppDrawerNavigator from "./AppDrawerNavigator";

export default class AppStackNavigator extends React.Component {
  stackNavigation = () => {
   const AppStackNavigator = createStackNavigator(
{
    AppDrawerNavigator: {
        screen:AppDrawerNavigator,
    },
   UserDetails: {
        screen:UserDetailsScreen,
    }
},
);
  };

  render() {
    return <View>{this.stackNavigation()}</View>;
  }
}
