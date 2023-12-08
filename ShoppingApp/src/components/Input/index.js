import React, { useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import styles from "./styles";

const Input = ({ label, placeholder, isPassword }) => {
    const [isPasswordHidden, setIsPasswordHidden] = useState(true)

    const toggleEye = () => {
        setIsPasswordHidden(!isPasswordHidden);
    };

    const eyeIcon = isPasswordHidden ? require('../../assets/eye_closed.png') : require('../../assets/eye_open.png');

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder={placeholder} secureTextEntry={isPassword && isPasswordHidden}/>

                {isPassword ? (
                    <Pressable onPress={toggleEye}>
                        <Image style={styles.eye} source={eyeIcon}/>
                    </Pressable> 
                ) : null}
            </View>
        </View>
    );
}

export default Input;