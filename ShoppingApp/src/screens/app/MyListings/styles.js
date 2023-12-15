import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    list: {
        marginTop: 10,
        paddingTop: 20
    },
    listContentContainer: {
        paddingBottom: 100
    },
    listSeparator: {
        height: 24,
        justifyContent: 'center'
    },
    listSeparatorLine: {
        height: 1,
        backgroundColor: colors.blurGrey
    }
});