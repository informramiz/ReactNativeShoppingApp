import React, { useContext, useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
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
import { request } from "../../../utils/request";
import { signUp } from "../../../utils/API";
import { UserContext } from "../../../../App";

const SignUp = ({ navigation }) => {
    const [checked, setChecked] = useState(false);
    const [inputValues, setInputValues] = useState({});
    const {user, setUser} = useContext(UserContext);

    const onSignupPress = async () => {
        try {
            const entries = Object.entries(inputValues);
            if (!entries.length || Object.entries(inputValues).some((item) => (!item[1] || !item[1].trim().length))) {
                Alert.alert("All fields are require");
                return;
            }

            if (inputValues?.password !== inputValues?.confirmPassword) {
                Alert.alert('Passwords do not match');
                return;
            }
            
            if (!checked) {
                Alert.alert('Please agree to the terms')
                return;
            }

            const userToken = signUp(inputValues);
            setUser({token: userToken});
        } catch (error) {
            console.log('Error: ', error.response);
        }
    }

    const onSignInPress = () => {
        navigation.navigate(screens.SignIn);
    }

    const onBackPress = () => {
        navigation.goBack();
    }

    const onChange = (key, value) => {
        setInputValues({...inputValues, [key]: value});
    }

    return (
        <ScrollView style={[styles.container, safeAreaStyleProvider(useSafeAreaInsets())]}>
            <AuthHeader title={"Sign Up"} onBackPress={onBackPress}/>
            <View style={styles.inputFieldsContainer}>
                <Input value={inputValues.fullName} onChangeText={(name) => onChange('fullName', name)} label={'Name'} placeholder={"Jhon Doe"}/>
                <Input value={inputValues.email} onChangeText={(email) => onChange('email', email)} label={'Email'} placeholder={"example@gmail.com"}/>
                <Input value={inputValues.password} onChangeText={(password) => onChange('password', password)} label={'Password'} placeholder={"******"} isPassword={true}/>
                <Input value={inputValues.confirmPassword} onChangeText={(password) => onChange('confirmPassword', password)} label={'Confirm Password'} placeholder={"******"} isPassword={true}/>
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