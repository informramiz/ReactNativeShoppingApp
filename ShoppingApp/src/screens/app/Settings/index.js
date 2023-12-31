import React, { useContext, useState } from "react";
import { Image, Linking, Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./styles";
import { safeAreaStyleProvider } from "../../../utils/safeareahelper";
import Header from "../../../components/Header";
import ListItem from "../../../components/ListItem";
import EditableBox from "../../../components/EditableBox";
import Button from "../../../components/Button";
import { ProfileContext } from "../../../../App";
import { editProfile } from "../../../utils/API";

const Settings = ({ navigation }) => {
    const [isPersonalInfoEditable, setPersonalInfoEditable] = useState(false);
    const { profile, setProfile } = useContext(ProfileContext);
    const [personInfoValues, setPersonalInfoValues] = useState({_id: profile?._id, fullName: profile?.fullName, email: profile?.email});

    const onEditPersonalInfoPress = () => {
        setPersonalInfoEditable(true);
    }

    const onSavePress = async () => {
        const entries = Object.entries(personInfoValues);
        if (!entries.length || entries.some((item) => (!item[1] || !item[1].trim().length))) {
            Alert.alert("All fields are required");
            return;
        }

        const updatedProfile = await editProfile(personInfoValues);
        setProfile(updatedProfile);
        setPersonalInfoEditable(false)
    }

    const onChange = (key, value) => {
        setPersonalInfoValues({ ...personInfoValues, [key]: value });
    }

    const onListItemPress = () => {
        Linking.openURL("https://www.google.com");
    }

    const onBackPress = () => {
        navigation.goBack();
    }

    return (
        <ScrollView style={[styles.container, safeAreaStyleProvider(useSafeAreaInsets())]}>
            <Header title={'Settings'} showBack onBackPress={onBackPress}/>
            <Text style={styles.sectionTitle}>Personal Information</Text>
            <Pressable hitSlop={20} onPress={onEditPersonalInfoPress}>
                <Image source={require('../../../assets/edit.png')} style={styles.editImage}/>
            </Pressable>
            <EditableBox 
                label={'Name'} 
                value={personInfoValues.fullName} 
                editable={isPersonalInfoEditable} 
                style={styles.editableBox}
                onChangeText={(newValue) => onChange('fullName', newValue)} />
            <EditableBox 
                label={'Email'} 
                value={personInfoValues.email} 
                editable={isPersonalInfoEditable} 
                style={styles.editableBox} 
                onChangeText={(newValue) => onChange('email', newValue)} />
            { isPersonalInfoEditable ? <Button title={'Save'} style={styles.saveButton} onPress={onSavePress}/> : null }

            <Text style={[styles.sectionTitle, { marginBottom: 5}]}>Help Center</Text>
            <ListItem onPress={onListItemPress} style={styles.listItem} title={'FAQ'}/>
            <ListItem onPress={onListItemPress} style={styles.listItem} title={'Contact Us'} />
            <ListItem onPress={onListItemPress} style={styles.listItem} title={'Privacy & Terms'} />
        </ScrollView>
    );
}

export default React.memo(Settings);