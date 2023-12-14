import React from "react";
import { Linking, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./styles";
import { safeAreaStyleProvider } from "../../../utils/safeareahelper";
import Header from "../../../components/Header";
import ListItem from "../../../components/ListItem";

const Settings = () => {
    const onListItemPress = () => {
        Linking.openURL("https://www.google.com");
    }

    return (
        <ScrollView style={[styles.container, safeAreaStyleProvider(useSafeAreaInsets())]}>
            <Header title={'Settings'} />
            <Text style={styles.sectionTitle}>Help Center</Text>
            <ListItem onPress={onListItemPress} style={styles.listItem} title={'FAQ'}/>
            <ListItem onPress={onListItemPress} style={styles.listItem} title={'Contact Us'} />
            <ListItem onPress={onListItemPress} style={styles.listItem} title={'Privacy & Terms'} />
        </ScrollView>
    );
}

export default React.memo(Settings);