import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './AuthScreens/LoginScreen';
import RegisterScreen from './AuthScreens/RegisterScreen';
import BaseScreeen from './HomeScreen/BaseScreen';


const Stack = createStackNavigator();

class App extends Component {

  render(navigation) {
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login"
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="Register" component={RegisterScreen}/>
          <Stack.Screen name="BaseScreen" component={BaseScreeen}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

module.exports = App;