import React from 'react';
import {
  View,
  Text
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen1 from './HomeScreen1/Screen';
import HomeScreen2 from './HomeScreen2/Screen';


const Drawer = createDrawerNavigator();

const App = ({navigation}) => {
    return(
        <NavigationContainer
            independent={true}
        >
            <Drawer.Navigator initialRouteName="HomeScreen1">
                <Drawer.Screen name="HomeScreen1" component={HomeScreen1} />
                <Drawer.Screen name="HomeScreen2" component={HomeScreen2} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

module.exports = App;