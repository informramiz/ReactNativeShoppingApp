import React, { useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import styles from "./styles";

const Input = ({ label, placeholder, isPassword, style, textInputStyle, onChangeText, ...props }) => {
    const [isPasswordHidden, setIsPasswordHidden] = useState(true)

    const toggleEye = () => {
        setIsPasswordHidden(!isPasswordHidden);
    };

    const eyeIcon = isPasswordHidden ? require('../../assets/eye_closed.png') : require('../../assets/eye_open.png');

    return (
        <View style={[styles.container, style]}>
            { label !== undefined ? (<Text style={styles.label}>{label}</Text>) : null }
            <View style={styles.inputContainer}>
                <TextInput 
                    style={[styles.input, props.multiline ? {paddingTop: 16} : {}, textInputStyle]} 
                    placeholder={placeholder} 
                    secureTextEntry={isPassword && isPasswordHidden}
                    onChangeText={onChangeText}
                    {...props} />

                {isPassword ? (
                    <Pressable onPress={toggleEye}>
                        <Image style={styles.eye} source={eyeIcon}/>
                    </Pressable> 
                ) : null}
            </View>
        </View>
    );
}

export default React.memo(Input);