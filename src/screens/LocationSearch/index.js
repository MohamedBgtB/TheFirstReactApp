import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Pressable } from 'react-native';
import styles from './syles'
import search from '../../../assets/data/search'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';




const LocationSearch = () => {
    const [inputText, setInputText] = useState('')
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {/* inpute compenent */}
            <View style={styles.inputWapper}>


                <TextInput
                    style={styles.textinput}
                    value={inputText}
                    placeholder='where are you going'
                    onChangeText={setInputText}
                />

            </View>

            <FlatList
                data={search}
                renderItem={({ item }) => (
                    <Pressable onPress={() => navigation.navigate('How many people ')}>
                        <View style={styles.searchList}>
                            <View style={styles.locatinIcon}>
                                <Entypo name={"location-pin"} size={25} />
                            </View>
                            <Text style={styles.searchText}>{item.description}</Text>
                        </View>
                    </Pressable>
                )} />

        </View>
    );
}



export default LocationSearch;
