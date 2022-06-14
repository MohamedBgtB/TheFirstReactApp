import { StyleSheet, Dimensions } from "react-native";

const Styles = StyleSheet.create({
    container: {
        marginTop: 50,
        margin: 12,

    },
    image: {
        width: '100%',
        aspectRatio: 3 / 2,
        resizeMode: "cover",
        borderRadius: 10,
    },
    badRooms: {
        marginVertical: 10,
        fontSize: 14,
        color: '#c3c3c3c3',
    },
    description: {
        fontSize: 18,
        lineHeight: 26,
    },
    prices: {
        fontSize: 18,
        marginVertical: 10,


    },
    oldPrice: {
        color: '#c3c3c3c3',
        textDecorationLine: 'line-through',

    },
    newPrice: {
        fontWeight: 'bold',
        marginLeft: 10,
    },
    totalPrice: {
        color: '#3c3c3c',
        textDecorationLine: 'underline',
    },
});

export default Styles;