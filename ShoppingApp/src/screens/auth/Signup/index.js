import React from "react";
import { View } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import styles from "./styles";

const Singup = () => {
    return (
        <View style={styles.container}>
            <AuthHeader title={"Sign Up"}/>
        </View>
    )
}

export default Singup;