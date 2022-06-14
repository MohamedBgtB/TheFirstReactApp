import React from 'react';
import { View, Text, ImageBackground, Pressable } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { useNavigation } from '@react-navigation/native';


//import {  } from 'react-native-web';
import Styles from './Styles';

const Index = () => {
    const navigation = useNavigation();
    return (
        <View>
            {/* search bar */}
            <Pressable
                style={Styles.buttonSearch}
                onPress={() => {
                    navigation.navigate('LocationSearch')
                }}
            >
                <Fontisto name="search" size={25} color={'#f15454'} />
                <Text style={Styles.sreachBtnText}>wher are you gowing</Text>
            </Pressable>
            {/* background img */}
            <ImageBackground source={require('../../../assets/images/homePage.jpg')} style={Styles.image}>
                <Text style={Styles.titel}> Go Near</Text>
                <Pressable
                    style={Styles.button}
                    onPress={() => {
                        navigation.navigate('Search Results')
                    }}
                >
                    <Text style={Styles.buttonText}>Explor nearby stays</Text>
                </Pressable>

            </ImageBackground>
            {/* post */}


        </View>
    );
}

export default Index;
