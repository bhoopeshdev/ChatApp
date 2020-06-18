import React, { Component } from 'react';

import {
    Text,
    View
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Feather from 'react-native-vector-icons/Feather';

import BaseTabScreen from './TabScreen/BaseTabScreen';
import ChatScreen from './ChatScreen/Screen';

import themeStyle from '../../themes/theme.style';

const Stack = createStackNavigator();

const HomeScreen1 = ({navigation}) => {
    return(
        <NavigationContainer
            independent={true}
        >
            <Stack.Navigator
                initialRouteName="BaseTabScreen"
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="BaseTabScreen" component={BaseTabScreen} navigation={navigation}/>
                <Stack.Screen name="ChatScreen" component={ChatScreen} navigation={navigation}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

module.exports = HomeScreen1;