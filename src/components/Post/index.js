import React from "react";
import { View, Text, Image } from 'react-native'
import Styles from "./styles";
const Post = (props) => {
    const post = props.post;
    return (
        <View style={Styles.container}>
            {/* Image */}
            <Image source={{ uri: post.image }} style={Styles.image}></Image>

            {/* bed and badroom */}
            <Text style={Styles.badRooms} > 1 bade 1 bedroom</Text>
            {/* type and description */}
            <Text style={Styles.description} numberOfLines={2}>
                {post.description}

            </Text>
            {/* old price and  new price */}
            <Text style={Styles.prices}>
                <Text style={Styles.oldPrice}>${post.oldPrice} </Text>
                <Text style={Styles.newPrice}> ${post.newPrice}</Text> /night
            </Text>
            {/* total price */}
            <Text style={Styles.totalPrice}>${post.totalPrice} Total</Text>
        </View>
    )
}

export default Post;