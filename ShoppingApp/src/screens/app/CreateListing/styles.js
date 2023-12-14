import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    sectionTitle: {
        fontSize: 14,
        color: colors.blue,
        fontWeight: '500',
        marginTop: 20
    },
    imageRow: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 10,
        justifyContent: 'flex-start',
        flex: 1,
        marginTop: 10
    },
    uploadImageActionContainer: {
        width: 90,
        height: 90,
        borderWidth: 1,
        borderColor: colors.grey,
        borderStyle: 'dashed',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginTop: 8,
    },
    uploadIconBackground: {
        width: 30,
        height: 30,
        backgroundColor: colors.lightGrey,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    uploadIcon: {
        color: colors.white,
        fontSize: 30,
        marginTop: -4
    },
    imageContainer: {
        flexDirection: 'row'
    },
    deleteImageIcon: {
        width: 24,
        height: 24,
        position: 'absolute',
        end: -8,
        top: -8,
        tintColor: colors.blue
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 8,
    }
});