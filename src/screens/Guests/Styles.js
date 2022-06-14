import { StyleSheet, Dimensions } from "react-native";


const Styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
        paddingVertical: 40,
        height: '100%',
        justifyContent: 'space-between',
    },
    page_wapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        borderBottomWidth: 1,
        paddingBottom: 20,
        borderColor: '#c3c3c3',
        marginBottom: 16,
    },
    actions_wapper: {
        flexDirection: "row",
        alignItems: "center",
    },
    adults: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    adults_rul: {
        color: '#c3c3c3',
    },
    btn: {
        borderColor: '#c5c5c5',
        borderWidth: 1,
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",

    },
    gest_number: {
        paddingHorizontal: 20,
        fontSize: 16,

    },

});
export default Styles;