import React from "react"
import { Text, TouchableOpacity } from "react-native"
import styles from "./styles";

const Button = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.5}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button;