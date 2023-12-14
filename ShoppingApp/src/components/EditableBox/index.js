import React from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";

const EditableBox = ({ label, value, onChangeText, editable, style}) => {
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input} editable={editable} value={value} onChangeText={onChangeText} />
        </View>
    );
}

export default React.memo(EditableBox);