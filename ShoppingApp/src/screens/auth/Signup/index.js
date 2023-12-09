import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import CheckBox from "../../../components/Checkbox";
import Button from "../../../components/Button";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";
import styles from "./styles";
import { screens } from "../../screens";
import { safeAreaStyleProvider } from "../../../utils/safeareahelper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SignUp = ({ navigation }) => {
    const [checked, setChecked] = useState(false);
    const onSignupPress = () => {
        navigation.navigate(screens.SignUp);
    }

    const onSignInPress = () => {
        navigation.navigate(screens.SignIn);
    }

    const onBackPress = () => {
        navigation.goBack();
    }

    return (
        <ScrollView style={[styles.container, safeAreaStyleProvider(useSafeAreaInsets())]}>
            <AuthHeader title={"Sign Up"} onBackPress={onBackPress}/>
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

            <Text style={styles.footerText}>
                Already have an account?
                <Text style={styles.footerLink} onPress={onSignInPress}> Sign In</Text>
            </Text>
        </ScrollView>
    )
}

export default React.memo(SignUp);