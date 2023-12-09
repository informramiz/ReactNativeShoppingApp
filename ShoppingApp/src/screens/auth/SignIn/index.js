import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import styles from "./styles";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";

const SignIn = () => {
    const onSignInPress = () => {

    }

    const onSignUpPress = () => {

    }

    return (
        <ScrollView style={styles.container}>
            <AuthHeader title={"Sign In"}/>
            <View style={styles.inputFieldsContainer}>
                <Input label={'Email'} placeholder={"example@gmail.com"}/>
                <Input label={'Password'} placeholder={"******"} isPassword={true}/>
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