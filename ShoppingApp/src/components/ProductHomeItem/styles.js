import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    image: {
        width: (width - 64) / 2,
        height: 200,
        borderRadius: 10
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
    }
});