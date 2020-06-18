import React, { Component } from 'react';

import {
    Text,
    View
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';

import MessageScreen from './MessageScreen';
import TabScreen2 from './TabScreen2';
import themeStyle from '../../../themes/theme.style';

const Tab = createBottomTabNavigator();

const BaseTabScreen = ({navigation}) => {
    return(
        <NavigationContainer
            independent={true}
        >
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, size }) => {
                        let iconName;
                        let color;
                        let iconSize;
            
                        if (route.name === 'MessageScreen') {
                            iconName = 'user';
                            color = focused
                                ? themeStyle.PRIMARY_COLOR_MED
                                : themeStyle.PRIMARY_COLOR_DARK;
                            iconSize = focused
                                ? 30 : 25
                        } else if (route.name === 'TabScreen2') {
                            iconName = 'users';
                            color = focused
                                ? themeStyle.PRIMARY_COLOR_MED
                                : themeStyle.PRIMARY_COLOR_DARK;
                                iconSize = focused
                                ? 30 : 25
                        }
            
                        // You can return any component that you like here!
                        return <Feather name={iconName} size={iconSize} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: themeStyle.PRIMARY_COLOR_MED,
                    inactiveTintColor: themeStyle.PRIMARY_COLOR_DARK,
                }}
            >
                <Tab.Screen options={{title:'Chats'}} name="MessageScreen" component={MessageScreen} navigation={navigation}/>
                <Tab.Screen options={{title:'Groups'}} name="TabScreen2" component={TabScreen2} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

module.exports = BaseTabScreen;