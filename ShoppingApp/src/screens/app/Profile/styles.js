import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        margin: 20,
        flex: 1
    },
    header: {

    },
    name: {
        color: colors.black,
        fontSize: 20,
        fontWeight: '700',
        marginTop: 20
    },
    email: {
        fontSize: 14,
        color: colors.grey,
        marginTop: 12
    },
    listItem: {
        marginTop: 20,
    },
    addNewListingButton: {
        marginHorizontal: 15,
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
        width: '100%'
    }
});