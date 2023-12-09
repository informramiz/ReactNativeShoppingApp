import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 24
    },
    inputFieldsContainer: {
        rowGap: 20
    },
    agreeRow: {
        marginTop: 21,
        flexDirection: 'row',
        alignItems: 'center',

    },
    agreeText: {
        color: colors.blue,
        fontSize: 14,
        marginStart: 13
    },
    agreeTextBold: {
        fontWeight: 'bold'
    },
    signupButton: {
        marginTop: 25
    },
    separator: {
        marginTop: 38,
    },
    googleLogin: {
        marginTop: 20
    },
    footerText: {
        marginTop: 50,
        marginBottom: 50,
        textAlign: 'center',
        fontSize: 14,
        color: colors.blue
    },
    footerLink: {
        fontWeight: 'bold'
    }
});

export default styles;