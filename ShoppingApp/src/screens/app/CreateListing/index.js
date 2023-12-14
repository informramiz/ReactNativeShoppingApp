import React from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Header from "../../../components/Header";
import { safeAreaStyleProvider } from "../../../utils/safeareahelper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {aunchImageLibrary, launchImageLibrary} from 'react-native-image-picker';


const CreateListing = ({ navigation }) => {
    const onBackPress = () => {
        navigation.goBack();
    }

    const uploadNewImage = async () => {
        const result = await launchImageLibrary();
    }


    return (
        <ScrollView style={[styles.container, safeAreaStyleProvider(useSafeAreaInsets())]}>
            <Header title={'Create a new listing'} showBack onBackPress={onBackPress}/>
            <TouchableOpacity onPress={uploadNewImage}>
                <Text>+</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

export default React.memo(CreateListing);