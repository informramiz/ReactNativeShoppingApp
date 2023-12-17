import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import Button from "../../../components/Button";
import { screens } from "../../screens";

const Splash = ({ navigation }) => {
    const onSignUpPress = () => {
        navigation.navigate(screens.SignUp);
    }

    const onSignInPress = () => {
        navigation.navigate(screens.SignIn);
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image resizeMode="contain" style={styles.image} source={require('../../../assets/splash_image.png')}/>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>You'll Find</Text>
                    <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
                    <Text style={styles.title}>Here!</Text>
                </View>

                <Button title="Sign Up" onPress={onSignUpPress}/>
                <Pressable onPress={onSignInPress}>
                    <Text style={styles.footerText}>Sign In</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

export default React.memo(Splash);