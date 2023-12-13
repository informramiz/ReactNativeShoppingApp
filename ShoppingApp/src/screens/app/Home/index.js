import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./styles";
import { safeAreaStyleProvider } from "../../../utils/safeareahelper";
import Header from "../../../components/Header";

const Home = () => {
    return (
        <ScrollView style={[styles.container, safeAreaStyleProvider(useSafeAreaInsets())]}>
            <Header title={'Find All You Need'} showSearch={true}/>
            <Text>Home Screen</Text>
        </ScrollView>
    );
}

export default React.memo(Home);