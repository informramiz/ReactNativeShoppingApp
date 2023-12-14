import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./styles";
import { safeAreaStyleProvider } from "../../../utils/safeareahelper";
import Header from "../../../components/Header";
import Button from "../../../components/Button";
import ListItem from "../../../components/ListItem";

const Profile = () => {
    const currentListings = 10;

    const onLogoutPress = () => {
        // TODO
    }

    const onMyListingsPress = () => {
        // TODO
    }

    const onSettingsPress = () => {

    }

    return (
        <View style={[styles.container, safeAreaStyleProvider(useSafeAreaInsets())]}>
            <ScrollView>
                <Header title={'Profile'} showLogout onLogoutPress={onLogoutPress}/>
                <Text style={styles.name}>Ramiz Raja</Text>
                <Text style={styles.email}>hello@gmail.com</Text>
                <ListItem 
                    style={styles.listItem} 
                    title={'My Listings'} 
                    subtitle={`Already have ${currentListings} listings`} 
                    onPress={onMyListingsPress} />
                <ListItem 
                    style={styles.listItem} 
                    title={'Settings'} 
                    subtitle={'Account, FAQ, Contact'} 
                    onPress={onSettingsPress} />
            </ScrollView>
            <Button style={styles.addNewListingButton} title={'Add a new listing'}/>
        </View>
    );
}

export default React.memo(Profile);