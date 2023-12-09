import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

const styles = StyleSheet.create({
    container: {
        width: 22,
        height: 22,
        borderWidth: 1,
        borderColor: colors.blue,
        borderRadius: 4,
    },
    innerContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.blue,
        alignItems: 'center',
        justifyContent: 'center'
    },
    checkIcon: {
        width: 12,
        height: 9
    }
});

export default styles;