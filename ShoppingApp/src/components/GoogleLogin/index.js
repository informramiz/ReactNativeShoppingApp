import React from "react";
import { Image, TouchableOpacity } from "react-native";
import styles from "./styles";

const GoogleLogin = ({ style }) => {
    return (
        <TouchableOpacity activeOpacity={0.6} style={[styles.container, style]}>
            <Image style={styles.image} source={require('../../assets/google.png')}/>
        </TouchableOpacity>
    )
}

export default React.memo(GoogleLogin);