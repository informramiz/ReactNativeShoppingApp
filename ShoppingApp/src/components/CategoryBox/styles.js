import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        backgroundColor: colors.lightGrey,
        borderRadius: 12,
        padding: 16
    },
    image: {
        width: 28,
        height: 28,
    },
    label: {
        marginTop: 5,
        fontSize: 14,
        color: colors.grey
    }
});