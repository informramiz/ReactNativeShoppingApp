import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
    },
    innerContainer: {
        flexDirection: 'row'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 20
    },
    content: {
        flexDirection: 'column',
    },
    title: {
        color: colors.grey,
        fontSize: 14,
        marginTop: 10
    },
    price: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.black,
        marginTop: 5
    },
    spacer: {
        flex: 1
    },
    removeIconContainer: {

    },
    removeIcon: {
        width: 24,
        height: 24,
        marginTop: 4
    }
});