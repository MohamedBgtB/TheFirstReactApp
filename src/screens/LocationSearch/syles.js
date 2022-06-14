import reactDom from "react-dom";
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 12,
        marginVertical: 20,

    },
    inputWapper: {
        flexDirection: "row",
        alignItems: "center",

    },
    textinput: {
        flexGrow: 1,
        backgroundColor: '#cccccc',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 6,
        borderWidth: 1,
        fontSize: 20,

    },
    searchList: {
        flexDirection: "row",
        paddingVertical: 16,

    },
    locatinIcon: {

    },
    searchText: {
        fontSize: 16,
        marginLeft: 16,
    }

})

export default styles;