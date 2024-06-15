import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        margin: 5,
        // backgroundColor: 'brown'
    },
    taskDetail: {
        display: 'flex',
        alignItems: 'center',
        margin: 10


    },
    input: {
        height: 30,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    addButton: {
        backgroundColor: 'purple',
        paddingVertical: 10,
        alignItems: 'center',
        marginBottom: 10,
    },
    addButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    taskContainer: {
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
    },
    taskElement: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    secTaskElement: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 6
    },
    icon: {
        color: 'black',
        fontSize: 25
    }
});