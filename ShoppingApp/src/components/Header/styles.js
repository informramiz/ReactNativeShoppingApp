import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icon: {
        width: 24,
        height: 24
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.black
    },
    space: {
        width: 24
    }
})