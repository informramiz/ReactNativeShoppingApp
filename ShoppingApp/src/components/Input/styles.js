import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

const styles = StyleSheet.create({
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
        borderRadius: 14
    },
    input: {
        paddingHorizontal: 16,
        paddingVertical: 20
    }
});

export default styles;