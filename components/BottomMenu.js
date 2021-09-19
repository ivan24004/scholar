import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react';
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

const Profile = () => {
    return (
        <View>
            <Text>This is your profile</Text>
        </View>
    );
}

const BottomMenu = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name = 'Profile' component = {Profile}/>
            <Tab.Screen name = 'College List' component = {View}/>
        </Tab.Navigator>
    )
}

export default BottomMenu;