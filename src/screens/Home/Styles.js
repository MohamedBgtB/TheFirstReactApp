import { StyleSheet, Dimensions } from "react-native";

const Styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 500,
        resizeMode: 'cover',
        justifyContent: 'center'

    },
    titel: {
        fontSize: 80,
        fontWeight: 'bold',
        color: '#ffffff',
        width: '70%',
        marginLeft: 25,
        marginTop: 40,

    },
    button: {
        backgroundColor: '#fff',
        width: 200,
        height: 40,
        borderRadius: 10,
        marginLeft: 25,
        marginTop: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        fontWeight: "bold",
        fontSize: 16,
    },
    buttonSearch: {
        backgroundColor: '#fff',
        width: Dimensions.get('screen').width - 20,
        height: 60,
        borderRadius: 30,
        marginHorizontal: 10,
        justifyContent: "center",
        flexDirection: 'row',
        alignItems: "center",
        position: 'absolute',
        top: 20,
        zIndex: 100,
        marginVertical: 40,
        //marginBottom: 40,

    },
    sreachBtnText: {
        fontWeight: "bold",
        fontSize: 16,
        paddingHorizontal: 10,

    }


});

export default Styles;