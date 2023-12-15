import React from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./styles";
import { safeAreaStyleProvider } from "../../../utils/safeareahelper";
import Header from "../../../components/Header";
import { products } from "../../../data/products";
import { screens } from "../../screens";
import MyListingItem from "../../../components/MyListingItem";

const MyListings = ({ navigation }) => {
    const onItemPress = (product) => {
        navigation.navigate(screens.ProductDetails, { product });
    }

    const onRemovePress = (products) => {
        // TODO
    }

    const renderItem = ({item}) => {
        return (
            <MyListingItem {...item} onFavoritePress={() => onItemPress(item)} onRemovePress={onRemovePress}/>
        );
    }

    const itemSeparatorComponent = () => {
        return (
            <View style={styles.listSeparator}>
                <View style={styles.listSeparatorLine} />
            </View>
        );
    }

    const onBackPress = () =>{
        navigation.goBack();
    }

    return (
        <View style={[styles.container, safeAreaStyleProvider(useSafeAreaInsets())]}>
            <Header title={'My Listings'} showBack onBackPress={onBackPress}/>
            <FlatList 
                data={products} 
                renderItem={renderItem} 
                keyExtractor={(item, index) => String(index)} 
                style={styles.list}
                contentContainerStyle={styles.listContentContainer}
                ItemSeparatorComponent={itemSeparatorComponent} />
        </View>
    );
}

export default React.memo(MyListings);