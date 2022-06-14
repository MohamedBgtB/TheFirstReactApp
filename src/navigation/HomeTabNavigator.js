import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import ExploreNavigator from './ExploreNavigator'


const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ tabBarActiveTintColor: "#f15454", tabBarStyle: { height: 60, paddingBottom: 10, }, headerShown: false }}>
            <Tab.Screen name={"Explore"}
                component={ExploreNavigator}
                options={{
                    tabBarIcon: ({ color }) => (<Fontisto name='search' size={22} color={color} />)

                }} />
            <Tab.Screen name={"Loved"} component={Home}
                options={{
                    tabBarIcon: ({ color }) => (<Feather name='heart' size={22} color={color} />)

                }} />
            <Tab.Screen name={"Aribnb"} component={Home}
                options={{
                    tabBarIcon: ({ color }) => (<FontAwesome5 name='airbnb' size={22} color={color} />)

                }} />
            <Tab.Screen name={"Messages"} component={Home}
                options={{
                    tabBarIcon: ({ color }) => (<Feather name='message-square' size={22} color={color} />)

                }} />
            <Tab.Screen name={"profil"} component={Home}
                options={{
                    tabBarIcon: ({ color }) => (<EvilIcons name='user' size={25} color={color} />)

                }} />

        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({})

export default HomeTabNavigator;
