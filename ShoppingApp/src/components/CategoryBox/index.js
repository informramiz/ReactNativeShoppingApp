import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";

const CategoryBox = ({ label, image }) => {
    return (
        <Pressable style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: image}}/>
            </View>
            <Text style={styles.label}>{label}</Text>
        </Pressable>
    );
}

export default React.memo(CategoryBox);