import React, { useContext, useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./styles";
import { safeAreaStyleProvider } from "../../../utils/safeareahelper";
import Header from "../../../components/Header";
import Button from "../../../components/Button";
import ListItem from "../../../components/ListItem";
import { screens } from "../../screens";
import { ProfileContext, UserContext } from "../../../../App";
import { getProfile } from "../../../utils/API";

const Profile = ({ navigation }) => {
    const currentListings = 10
    const { setUser } = useContext(UserContext);
    const { profile, setProfile }  = useContext(ProfileContext);

    useEffect(() => {
        (async () => {
            setProfile(await getProfile());
        })();
    }, [])

    const onLogoutPress = () => {
        setUser(null);
    }

    const onMyListingsPress = () => {
        navigation.navigate(screens.MyListings);
    }

    const onSettingsPress = () => {
        navigation.navigate(screens.Settings);
    }

    const onAddNewListingPress = () => {
        navigation.navigate(screens.CreateListing);
    }

    return (
        <View style={[styles.container, safeAreaStyleProvider(useSafeAreaInsets())]}>
            <ScrollView>
                <Header title={'Profile'} showLogout onLogoutPress={onLogoutPress}/>
                <Text style={styles.name}>{profile?.fullName}</Text>
                <Text style={styles.email}>{profile?.email}</Text>
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

            <Button style={styles.addNewListingButton} title={'Add a new listing'} onPress={onAddNewListingPress} />
        </View>
    );
}

export default React.memo(Profile);