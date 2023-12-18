import React, { useContext, useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import styles from "./styles";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";
import { screens } from "../../screens";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { safeAreaStyleProvider } from "../../../utils/safeareahelper";
import { login } from "../../../utils/API";
import { UserContext } from "../../../../App";

const SignIn = ({ navigation }) => {
    const {setUser} = useContext(UserContext);
    const [inputValues, setInputValues] = useState({});

    const onSignInPress = async () => {
        try {
            const entries = Object.entries(inputValues)
            if (!entries.length || entries.some((item) => (!item[1] || !item[1].trim().length))) {
                Alert.alert("All fields are required");
                return;
            }

            const token = await login(inputValues);
            setUser({ token });
        } catch (error) {
            console.log('Sign in failed with error: ', error);
        }
    }

    const onSignUpPress = () => {
        navigation.navigate(screens.SignUp);
    }

    const onBackPress = () => {
        navigation.goBack();
    }

    const onValueChange = (key, value) => {
        setInputValues({ ...inputValues, [key]: value});
    }

    return (
        <ScrollView style={[styles.container, safeAreaStyleProvider(useSafeAreaInsets())]}>
            <AuthHeader title={"Sign In"} onBackPress={onBackPress}/>
            <View style={styles.inputFieldsContainer}>
                <Input value={inputValues.email} label={'Email'} placeholder={"example@gmail.com"} onChangeText={(v) => onValueChange('email', v)}/>
                <Input value={inputValues.password} label={'Password'} placeholder={"******"} isPassword={true} onChangeText={(v) => onValueChange('password', v)}/>
            </View>


            <Button title={'Sign In'} onPress={onSignInPress} style={styles.signInButton} />
            <Separator text={'Or sign in with'} style={styles.separator} />
            <GoogleLogin style={styles.googleLogin}/>

            <Text style={styles.footerText}>
                Don't have an account?
                <Text style={styles.footerLink} onPress={onSignUpPress}> Sign Up</Text>
            </Text>
        </ScrollView>
    )
}

export default React.memo(SignIn);