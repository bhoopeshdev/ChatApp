import React, { Component } from 'react';

import {
    Text,
    View
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';

import TabScreen1 from './TabScreen/TabScreen1';
import TabScreen2 from './TabScreen/TabScreen2';
import themeStyle from '../../themes/theme.style';

const Tab = createBottomTabNavigator();

const HomeScreen1 = () => {
    return(
        <NavigationContainer
            independent={true}
        >
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, size }) => {
                        let iconName;
                        let color;
            
                        if (route.name === 'TabScreen1') {
                            iconName = 'user';
                            color = focused
                                ? themeStyle.PRIMARY_COLOR_MED
                                : themeStyle.PRIMARY_COLOR_DARK;
                        } else if (route.name === 'TabScreen2') {
                            iconName = 'users';
                            color = focused
                                ? themeStyle.PRIMARY_COLOR_MED
                                : themeStyle.PRIMARY_COLOR_DARK;
                        }
            
                        // You can return any component that you like here!
                        return <Feather name={iconName} size={30} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen options={{title:'Chat'}} name="TabScreen1" component={TabScreen1} />
                <Tab.Screen options={{title:'Groups'}} name="TabScreen2" component={TabScreen2} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

module.exports = HomeScreen1;