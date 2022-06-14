import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Styles from './styles';
import feed from '../../../assets/data/feed'
import Post from '../../components/Post';

const SearchResults = () => {
    return (
        <View style={Styles.container}>
            <FlatList
                data={feed}
                renderItem={({ item }) => <Post post={item} />}
            />
        </View>
    );
}



export default SearchResults;
