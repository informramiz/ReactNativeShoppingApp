import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./styles";
import { safeAreaStyleProvider } from "../../../utils/safeareahelper";

const Home = () => {
    return (
        <ScrollView style={[styles.container, safeAreaStyleProvider(useSafeAreaInsets())]}>
            <Text>Home Screen</Text>
        </ScrollView>
    );
}

export default React.memo(Home);