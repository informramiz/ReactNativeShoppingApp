import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import Config from "react-native-config";

const ProductHomeItem = ({ title, price, image, currency, onPress }) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Image style={styles.image} source={{uri: `${Config.API_BASE_URL}/${image?.path}`}}/>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{currency ? currency : `$`} {price}</Text>
        </Pressable>
    );
}

export default React.memo(ProductHomeItem);