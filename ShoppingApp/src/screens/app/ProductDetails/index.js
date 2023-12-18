import React, { useState } from "react";
import { Image, Linking, Pressable, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { safeAreaStyleProvider } from "../../../utils/safeareahelper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Button from "../../../components/Button";
import ImageCarousel from "../../../components/ImageCarousel";
import { imageUrlProvider } from "../../../utils/imageUrlProvider";

const ProductDetails = ({ route, navigation }) => {
    const { product } = route?.params || {};
    const [isFavorite, setFavorite] = useState(false);

    const onFavoritePress = () => {
        setFavorite(!isFavorite);
    }

    const onContactSellerPress = () => {
        // Make a phone call
        // const phone = '127282827';
        // Linking.openURL(`tel:${phone}`);

        // Send an email
        const email = 'abc@xyz.com';
        Linking.openURL(`mailto:${email}`);
    }

    const onBackPress = () => {
        navigation.goBack();
    }
    
    return (
        <View style={[styles.container]}>
            <ScrollView style={styles.innerContainer}>
                { product?.images?.length ? (
                    <ImageCarousel images={product?.images?.map((img) => imageUrlProvider(img))}/> 
                ) : ( 
                    <Image style={styles.image} source={{ uri: imageUrlProvider(product?.image)}} />
                )} 
                <View style={styles.content}>
                    <Text style={styles.title}>{product?.title}</Text>
                    <Text style={styles.price}>{product?.currency ? product?.currency : '$'} {product?.price}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                </View>
            </ScrollView>

            <Pressable style={styles.backIconContainer} onPress={onBackPress}>
                <Image source={require('../../../assets/back.png')} style={styles.backIcon} />
            </Pressable>

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