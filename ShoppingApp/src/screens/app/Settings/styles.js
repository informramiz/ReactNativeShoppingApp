import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    sectionTitle: {
        color: colors.grey,
        fontSize: 16,
        fontWeight: '600',
        marginTop: 35,
        paddingStart: 4
    },
    editImage: {
        width: 24,
        height: 24,
        position: 'absolute',
        end: 0,
        bottom: 0
    },
    editableBox: {
        marginTop: 10
    },
    saveButton: {
        paddingVertical: 10,
        marginTop: 10
    },
    listItem: {
        marginTop: 4
    }
});