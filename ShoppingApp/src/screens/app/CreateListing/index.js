import React, { useState } from "react";
import { Image, KeyboardAvoidingView, Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Header from "../../../components/Header";
import { safeAreaStyleProvider } from "../../../utils/safeareahelper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {aunchImageLibrary, launchImageLibrary} from 'react-native-image-picker';
import Input from "../../../components/Input";
import OptionsPicker from "../../../components/OptionsPicker";
import { categories } from "../../../data/categories";
import Button from "../../../components/Button";


const CreateListing = ({ navigation }) => {
    const [images, setImages] = useState([]);
    const [inputValues, setInputValues] = useState({});

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

    const onChangeText = (key, value) => {
        setInputValues({...inputValues, [key]: value})
    }

    const onSubmitPress = () => {
        // TODO
    }

    return (
        <View style={[styles.container, safeAreaStyleProvider(useSafeAreaInsets())]}>
            <Header title={'Create a new listing'} showBack onBackPress={onBackPress}/>
        
            <KeyboardAvoidingView behavior='position'>
                <ScrollView contentContainerStyle={styles.scrollViewContentContainerStyle}>
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

                        <Input 
                            placeholder="Listing Title" 
                            label="Title" 
                            value={inputValues.title}
                            onChangeText={(newText) => onChangeText('title', newText)}
                            style={styles.input}/>
                        <OptionsPicker 
                            value={inputValues.category}
                            placeholder={'Select the category'}
                            label={'Category'}
                            onValueChange={(category) => onChangeText('category', category)}
                            keyExtractor={(item) => item?.id}
                            titleExtractor={(item) => item?.title}
                            style={styles.input}
                            options={categories.filter((category) => category?.id !== undefined)}/>
                        <Input 
                            placeholder="Enter price in USD" 
                            label="Price" 
                            value={inputValues.price}
                            onChangeText={(newText) => onChangeText('price', newText)}
                            style={styles.input}
                            keyboardType='numeric'/>
                        <Input 
                            placeholder="Tell us more..." 
                            label="Description" 
                            value={inputValues.description}
                            onChangeText={(newText) => onChangeText('description', newText)} 
                            multiline 
                            style={styles.multilineInput}
                            textInputStyle={{minHeight: 100}}/>

                        <Button style={styles.submitButton} title={'Submit'} onPress={onSubmitPress}/>
                </ScrollView>
            </KeyboardAvoidingView>

        </View>
    );
}

export default React.memo(CreateListing);