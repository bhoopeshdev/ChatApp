import React from 'react';
import {
  View,
  Text
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen1 from './HomeScreen1/Screen';
import ChatScreen from './HomeScreen1/ChatScreen/Screen';

import CustomDrawer from './CustomDrawer/CustomDrawer';

const Drawer = createDrawerNavigator();

const App = ({navigation}) => {
    return(
        <NavigationContainer
            independent={true}
        >
            <Drawer.Navigator initialRouteName="HomeScreen1"
                drawerContent={props => <CustomDrawer {...props}/>}
            >
                <Drawer.Screen name="HomeScreen1" component={HomeScreen1} navigation={navigation}/>
                <Drawer.Screen name="ChatScreen" component={ChatScreen} navigation={navigation}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

module.exports = App;