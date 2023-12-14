import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 4,
        margin: 4
    },
    content: {
        padding: 16,
        justifyContent: 'center',
    },
    title: {
        color: colors.blue,
        fontSize: 18,
        fontWeight: '700'
    },
    subtitle: {
        color: colors.grey,
        fontSize: 12
    },
    icon: {
        position: 'absolute',
        end: 0,
        alignSelf: 'center',
        alignItems: 'center',
        width: 20,
        height: 20,
        marginEnd: 5
    }
});