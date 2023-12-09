import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const CheckBox = ({ checked, onCheck }) => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.6} onPress={() => onCheck(!checked)}>
            {checked ? (
                <View style={styles.innerContainer}>
                    <Image source={require('../../assets/check.png')} style={styles.checkIcon} />
                </View>
            ): null}
        </TouchableOpacity>
    )
}

export default React.memo(CheckBox);