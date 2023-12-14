import React from "react";
import { ScrollView } from "react-native";
import { styles } from "./styles";
import Header from "../../../components/Header";
import { safeAreaStyleProvider } from "../../../utils/safeareahelper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CreateListing = ({ navigation }) => {
    const onBackPress = () => {
        navigation.goBack();
    }
    return (
        <ScrollView style={[styles.container, safeAreaStyleProvider(useSafeAreaInsets())]}>
            <Header title={'Create a new listing'} showBack onBackPress={onBackPress}/>
        </ScrollView>
    );
}

export default React.memo(CreateListing);