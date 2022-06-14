import 'react-native-gesture-handler';
import Router from './src/navigation/Router';
//------------reactnavigation-----
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack'

//-----------------
import { StatusBar } from 'expo-status-bar';
import { ScrollView, SafeAreaView, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import feed from './assets/data/feed';
import Home from './src/screens/Home'
const posts = feed;


//const Stack = createNativeStackNavigator();



export default function App() {
  return (

    <Router></Router>
  );
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: '#fff',

  },

});
