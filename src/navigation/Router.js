import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import searchResults from '../screens/searchResults'
import LocationSearch from '../screens/LocationSearch'
import Guests from '../screens/Guests'
import HomeTabNavigator from './HomeTabNavigator';

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>

            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeTabNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="Search Results" component={searchResults} />
                <Stack.Screen name="How many people " component={Guests} />
                <Stack.Screen name="LocationSearch" component={LocationSearch} />
            </Stack.Navigator>


        </NavigationContainer>
    );
}



export default Router;
