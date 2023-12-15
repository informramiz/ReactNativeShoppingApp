import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {

    },
    label: {
        marginVertical: 8,
        color: colors.blue,
        fontSize: 14,
        fontWeight: '400'
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: colors.grey,
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex: 1
    },
    placeholder: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex: 1,
        color: colors.lightGrey
    },
    modal: {
     
    },
    modalFullScreenContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.transparentBlack50
    },
    modalContentContainer: {
        width: '80%',
        backgroundColor: colors.white,
        padding: 20,
        borderRadius: 10
    },
    modalHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.blue
    },
    modalOptionsContainer: {
        gap: 10,
        marginTop: 16
    },
    modalOption: {
        fontSize: 15,
        color: colors.darkGrey
    },
    modalSelectedOption: {
        fontSize: 15,
        color: colors.blue,
        fontWeight: '500'
    }
});