import React, { useState } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import Styles from './Styles';
import { useNavigation } from '@react-navigation/native';
import searchResults from '../searchResults';


const Index = () => {
    const [adults, setAdults] = useState(0)
    const [children, setChildren] = useState(0)
    const [infants, setInfants] = useState(0)
    const navigation = useNavigation();
    return (
        <View style={Styles.container}>
            <View >
                <View style={Styles.page_wapper}>
                    <View style={Styles.text_wapper}>
                        <Text style={Styles.adults}>Adults</Text>
                        <Text style={Styles.adults_rul}>Ages 13 or above</Text>
                    </View>
                    <View style={Styles.actions_wapper}>
                        <Pressable style={Styles.btn} onPress={() => setAdults(Math.max(0, adults - 1))} >
                            <Text style={{ fontSize: 20, }}>-</Text>
                        </Pressable>
                        <Text style={Styles.gest_number}>{adults}</Text>
                        <Pressable style={Styles.btn} onPress={() => setAdults(adults + 1)}>
                            <Text style={{ fontSize: 20, }}>+</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={Styles.page_wapper}>
                    <View style={Styles.text_wapper}>
                        <Text style={Styles.adults}>children</Text>
                        <Text style={Styles.adults_rul}>Ages 2-12</Text>
                    </View>
                    <View style={Styles.actions_wapper}>
                        <Pressable style={Styles.btn} onPress={() => setChildren(Math.max(0, children - 1))} >
                            <Text style={{ fontSize: 20, }}>-</Text>
                        </Pressable>
                        <Text style={Styles.gest_number}>{children}</Text>
                        <Pressable style={Styles.btn} onPress={() => setChildren(children + 1)}>
                            <Text style={{ fontSize: 20, }}>+</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={Styles.page_wapper}>
                    <View style={Styles.text_wapper}>
                        <Text style={Styles.adults}>Infants</Text>
                        <Text style={Styles.adults_rul}>Under 2</Text>
                    </View>
                    <View style={Styles.actions_wapper}>
                        <Pressable style={Styles.btn} onPress={() => setInfants(Math.max(0, infants - 1))} >
                            <Text style={{ fontSize: 20, }}>-</Text>
                        </Pressable>
                        <Text style={Styles.gest_number}>{infants}</Text>
                        <Pressable style={Styles.btn} onPress={() => setInfants(infants + 1)}>
                            <Text style={{ fontSize: 20, }}>+</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            <Pressable onPress={() => {
                navigation.navigate('Home', {
                    screen: 'Explore',
                    params: {
                        screen: 'serchResults'
                    }
                })
            }} style={styles.searchBtn}>
                <Text style={styles.searchText}>Search</Text>
            </Pressable>

        </View>

    );
}

const styles = StyleSheet.create({
    searchBtn: {
        backgroundColor: "#f15454",
        alignItems: 'center',
        paddingVertical: 16,
        borderRadius: 12,
    },
    searchText: {
        fontSize: 18,
        fontWeight: '500',
        color: "#ffffff",
    }


})

export default Index;
