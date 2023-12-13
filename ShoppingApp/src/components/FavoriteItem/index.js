import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";

const FavoriteItem = ({ title, price, image, onFavoritePress, onClosePress }) => {
    return (
        <View style={styles.mainContainer}>
            <Pressable onPress={onFavoritePress} style={styles.innerContainer}>
                <Image style={styles.image} source={{uri: image}}/>
                <View style={styles.content}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.price}>{price}</Text>
                </View>
            </Pressable>

            <View style={styles.spacer} />

            <Pressable style={styles.removeIconContainer} onPress={onClosePress}>
                <Image source={require('../../assets/close.png')} style={styles.removeIcon} />
            </Pressable>
        </View>
    );
}

export default React.memo(FavoriteItem);