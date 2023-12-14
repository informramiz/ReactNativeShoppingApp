import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import styles from "./styles";

const Button = ({ title, onPress, style }) => {
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress} activeOpacity={0.6}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>{title}</Text>
                </View>
        </TouchableOpacity>
    )
}

export default React.memo(Button);