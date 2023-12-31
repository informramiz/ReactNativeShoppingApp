import React from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./styles";
import { safeAreaStyleProvider } from "../../../utils/safeareahelper";
import Header from "../../../components/Header";
import FavoriteItem from "../../../components/FavoriteItem";
import { products } from "../../../data/products";
import { screens } from "../../screens";

const Favorites = ({ navigation }) => {
    const onFavoritePress = (product) => {
        navigation.navigate(screens.ProductDetails, { product });
    }

    const onRemovePress = (products) => {
        // TODO
    }

    const renderItem = ({item}) => {
        return (
            <FavoriteItem {...item} onFavoritePress={() => onFavoritePress(item)} onRemovePress={onRemovePress}/>
        );
    }

    const itemSeparatorComponent = () => {
        return (
            <View style={styles.listSeparator}>
                <View style={styles.listSeparatorLine} />
            </View>
        );
    }

    return (
        <View style={[styles.container, safeAreaStyleProvider(useSafeAreaInsets())]}>
            <Header title={'Favorites'} />
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

export default React.memo(Favorites);