import React, { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { safeAreaStyleProvider } from "../../../utils/safeareahelper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Button from "../../../components/Button";

const ProductDetails = ({ route }) => {
    const { product } = route?.params || {};
    const [isFavorite, setFavorite] = useState(false);

    const onFavoritePress = () => {
        setFavorite(!isFavorite);
    }

    const onContactSellerPress = () => {

    }
    
    return (
        <View style={[styles.container]}>
            <ScrollView style={styles.innerContainer}>
                <Image style={styles.image} source={{ uri: product?.image }} />
                <View style={styles.content}>
                    <Text style={styles.title}>{product?.title}</Text>
                    <Text style={styles.price}>{product?.price}</Text>
                    <Text style={styles.description}>{product.description} & {product.description} & {product.description}</Text>
                </View>
            </ScrollView>

            <View style={styles.buttonsContainer}>
                    <Pressable style={styles.favoriteButton} onPress={onFavoritePress}>
                        <Image 
                            style={styles.favoriteIcon} 
                            source={isFavorite ? require('../../../assets/bookmark_active.png') : require('../../../assets/bookmark.png')} />
                    </Pressable>
                    <Button title={'Contact Seller'} style={styles.contactButton} onPress={onContactSellerPress}/>
                </View>
        </View>
    );
}

export default React.memo(ProductDetails);