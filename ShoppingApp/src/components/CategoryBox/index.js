import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { colors } from "../../utils/colors";

const CategoryBox = ({ label, image, onPress, isSelected }) => {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <View style={[styles.imageContainer, isSelected ? {backgroundColor: colors.black}: {}]}>
                <Image style={styles.image} source={{uri: image}}/>
            </View>
            <Text style={[styles.label, isSelected ? {color: colors.blue, fontWeight: '600'} : {}]}>{label}</Text>
        </Pressable>
    );
}

export default React.memo(CategoryBox);