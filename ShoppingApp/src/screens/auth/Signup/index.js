import React, { useState } from "react";
import { Text, View } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import styles from "./styles";
import Input from "../../../components/Input";
import CheckBox from "../../../components/Checkbox";

const Singup = () => {
    const [checked, setChecked] = useState(false);
    return (
        <View style={styles.container}>
            <AuthHeader title={"Sign Up"}/>
            <View style={styles.inputFieldsContainer}>
                <Input label={'Name'} placeholder={"Jhon Doe"}/>
                <Input label={'Email'} placeholder={"example@gmail.com"}/>
                <Input label={'Password'} placeholder={"******"} isPassword={true}/>
            </View>

            <View style={styles.agreeRow}>
                <CheckBox checked={checked} onCheck={setChecked}/>
                <Text style={styles.agreeText}>
                    I agree with <Text style={styles.agreeTextBold}>Terms</Text> & <Text style={styles.agreeTextBold}>Privacy</Text>
                </Text>
            </View>
        </View>
    )
}

export default Singup;