import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";

const ListItem = ({ title, subtitle, style, onPress }) => {
    return (
        <Pressable style={[styles.container, style]} onPress={onPress}>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                {subtitle ? (<Text style={styles.subtitle}>{subtitle}</Text>) : null}
                <Image source={require('../../assets/forward.png')} style={styles.icon}/>
            </View>
        </Pressable>
    );
}

export default React.memo(ListItem);