import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    line: {
        height: 1,
        flex: 1,
        backgroundColor: colors.lightGrey
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingHorizontal: 5,
        color: colors.blue
    }
});

export default styles;