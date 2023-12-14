import React, { useState } from "react";
import { Image, Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Header from "../../../components/Header";
import { safeAreaStyleProvider } from "../../../utils/safeareahelper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {aunchImageLibrary, launchImageLibrary} from 'react-native-image-picker';


const CreateListing = ({ navigation }) => {
    const [images, setImages] = useState([]);

    const onBackPress = () => {
        navigation.goBack();
    }

    const uploadNewImage = async () => {
        const result = await launchImageLibrary();
        
        if (result?.assets?.length) {
            setImages([...images, ...result?.assets]);
        }
    }

    const onDeleteImage = (image) => {
        setImages(images.filter((img) => (img?.fileName !== image?.fileName)));
    }

    return (
        <ScrollView style={[styles.container, safeAreaStyleProvider(useSafeAreaInsets())]}>
            <Header title={'Create a new listing'} showBack onBackPress={onBackPress}/>
            <Text style={styles.sectionTitle}>Upload photos</Text>
                <View style={styles.imageRow}>
                    <TouchableOpacity onPress={uploadNewImage} style={styles.uploadImageActionContainer}>
                        <View style={styles.uploadIconBackground}>
                            <Text style={styles.uploadIcon}>+</Text>
                        </View>
                    </TouchableOpacity>
                    
                    { images.map(image => (
                        <View style={styles.imageContainer}>
                            <Image key={image?.fileName} source={{uri: image.uri}} style={styles.image}/>
                            <Pressable hitSlop={20} onPress={() => onDeleteImage(image)}>
                                <Image style={styles.deleteImageIcon} source={require('../../../assets/close.png')} />
                            </Pressable>
                        </View>
                    ))}
                    
                </View>
        </ScrollView>
    );
}

export default React.memo(CreateListing);