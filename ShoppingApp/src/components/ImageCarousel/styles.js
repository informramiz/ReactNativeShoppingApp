import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

const { height, width } = Dimensions.get('window');
export const styles = StyleSheet.create({
    container: {
       
    },
    list: {

    },
    listItem: {
        width: width,
        height: height * 0.45
    },
    paginationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        alignSelf: 'center',
        bottom: 60
    },
    paginationLine: {
        backgroundColor: colors.white,
        height: 4,
        width: 15,
        marginHorizontal: 5
    },
    activatePaginationLine: {
        backgroundColor: colors.darkGrey,
        width: 30
    }
});