import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home'
import LocationSearch from '../screens/LocationSearch';
import searchResults from '../screens/searchResults';
import SearchResultsTabNavigator from './SearchResultsTabNavigator';

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='welcome'
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='serchResults'
                component={SearchResultsTabNavigator}
                options={{ title: 'Search your destination' }}
            />


        </Stack.Navigator>

    )
}


export default Router;
