import React, { useState } from "react";
import { Text, View } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import styles from "./styles";
import Input from "../../../components/Input";
import CheckBox from "../../../components/Checkbox";
import Button from "../../../components/Button";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";

const Singup = () => {
    const [checked, setChecked] = useState(false);
    const onSignupPress = () => {

    }

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

            <Button title={'Sign Up'} onPress={onSignupPress} style={styles.signupButton} />
            <Separator text={'Or sign up with'} style={styles.separator} />
            <GoogleLogin style={styles.googleLogin}/>
        </View>
    )
}

export default React.memo(Singup);