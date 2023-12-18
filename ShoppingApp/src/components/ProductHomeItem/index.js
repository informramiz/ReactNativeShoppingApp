import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import Config from "react-native-config";
import { imageUrlProvider } from "../../utils/imageUrlProvider";

const ProductHomeItem = ({ title, price, image, currency, onPress }) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Image style={styles.image} source={{uri: imageUrlProvider(image)}}/>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{currency ? currency : `$`} {price}</Text>
        </Pressable>
    );
}

export default React.memo(ProductHomeItem);