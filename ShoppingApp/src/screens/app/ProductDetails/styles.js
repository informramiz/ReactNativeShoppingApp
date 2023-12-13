import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flexDirection: 'column',
        flex: 1,
    },
    image: {
        width: '100%',
        height: height * 0.45
    },
    backIconContainer: {
        padding: 10,
        backgroundColor: colors.white,
        position: 'absolute',
        marginTop: 20,
        marginStart: 20,
        borderRadius: 6
    },
    backIcon: {
        width: 20,
        height: 20
    },
    innerContainer: {
        
    },
    content: {
        marginTop: -40,
        borderTopStartRadius: 16,
        borderTopEndRadius: 16,
        backgroundColor: colors.white,
        paddingTop: 30,
        paddingHorizontal: 20,
        paddingBottom: 100
    },
    title: {
        color: colors.black,
        fontWeight: '500',
        fontSize: 24
    },
    price: {
        color: colors.black,
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 10
    },
    description: {
        color: colors.lightBlack,
        fontSize: 14,
        fontWeight: '300',
        marginTop: 20
    },
    spacer: {
        flex: 1,
        width: '100%'
    },
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        marginTop: 10,
        marginHorizontal: 20,
        marginBottom: 20,
        position: 'absolute',
        bottom: 0,
        start: 0
    },
    favoriteButton: {
        backgroundColor: colors.blurGrey,
        borderRadius: 8,
        padding: 18
    },
    favoriteIcon: {
        width: 24,
        height: 24
    },
    contactButton: {
        flex: 1,
    }
});