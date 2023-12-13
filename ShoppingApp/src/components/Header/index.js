import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import Input from "../Input";

const Header = ({ title, showSearch, showBack, showLogout, onBackPress, onLogoutPress }) => {
    const [showSearchInput, setShowSearchInput] = useState(false);
    const onSearchPress = () => {
        setShowSearchInput(!showSearchInput);
    }

    return (
        <View>
            <View style={styles.container}>
                { showBack ? (
                    <Pressable hitSlop={20} onPress={onBackPress}>
                        <Image style={styles.icon} source={require('../../assets/back.png')} />
                    </Pressable>
                ) : showSearch ? (
                    <Pressable hitSlop={20} onPress={onSearchPress}>
                        <Image style={styles.icon} source={require('../../assets/search.png')} />
                    </Pressable>
                ) : <View style={styles.space} />}

                <Text style={styles.title}>{title}</Text>

                { showLogout ? (
                    <Pressable hitSlop={20} onPress={onLogoutPress}>
                        <Image style={styles.icon} source={require('../../assets/logout.png')} />
                    </Pressable>
                ) : <View style={styles.space}/>}
            </View>

            { showSearchInput ? (
                    <Input placeholder='Type your keyword...' />
                ) : null}
        </View>
    );
}

export default React.memo(Header);