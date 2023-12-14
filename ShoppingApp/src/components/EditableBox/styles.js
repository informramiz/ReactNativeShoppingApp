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
        margin: 4,
        padding: 16
    },
    label: {
        color: colors.grey,
        fontSize: 12,
        fontWeight: '400'
    },
    input: {
        color: colors.blue,
        fontSize: 12,
        fontWeight: '600'
    }
});