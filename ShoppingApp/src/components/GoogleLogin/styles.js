import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

const styles = StyleSheet.create({
    container: {
        width: '45%',
        borderColor: colors.darkGrey,
        backgroundColor: colors.darkGrey,
        borderRadius: 14,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16
    },
    image: {
        width: 28,
        height: 28,
    }
});

export default styles;