import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./styles";
import { safeAreaStyleProvider } from "../../../utils/safeareahelper";
import Header from "../../../components/Header";
import CategoryBox from "../../../components/CategoryBox";
import { categories } from "../../../data/categories";
import ProductHomeItem from "../../../components/ProductHomeItem";
import { screens } from "../../screens";
import { getAllServices } from "../../../utils/API";

const Home = ({ navigation }) => {
    const [selectedCategoryId, setSelectedCategoryId] = useState();
    const [services, setServices] = useState();
    const [filteredProducts, setFilteredProducts] = useState(services);
    const [searchKeyword, setSearchKeyword] = useState();

    useEffect(() => {
        (async () => {
            const data = await getAllServices();
            setServices(data);
        })();
    }, []);

    const onProductPress = (product) => {
        navigation.navigate(screens.ProductDetails, { product });
    }

    useEffect(() => {
        if (selectedCategoryId && !searchKeyword) {
            setFilteredProducts(services?.filter((product) => product?.category == selectedCategoryId));
        }  else if (searchKeyword && !selectedCategoryId) {
            setFilteredProducts(services?.filter((product) => product?.title?.toLowerCase().includes(searchKeyword?.toLowerCase())));
        } else if (selectedCategoryId && searchKeyword) {
            setFilteredProducts(services
                ?.filter((product) => product?.category == selectedCategoryId && product?.title?.toLowerCase()?.includes(searchKeyword?.toLowerCase()))
            );
        } else {
            setFilteredProducts(services);
        }
    }, [selectedCategoryId, searchKeyword, services]);

    const renderCategoryItem = ({item, index}) => {
        return <CategoryBox 
                label={item?.title} 
                image={item?.image} 
                onPress={() => setSelectedCategoryId(item?.id)} 
                isSelected={item?.id === selectedCategoryId} />
    }

    const categorySeparator = ({highlighted}) => {
        return <View style={styles.categoryListSeparator} />
    }

    const renderProductItem = ({item, index}) => {
        return <ProductHomeItem title={item?.title} price={item?.price} image={item?.image} onPress={() => onProductPress(item)}/>
    }

    const productSeparator = ({highlighted}) => {
        return <View style={styles.productItemSeparator} />
    }

    return (
        <View style={[styles.container, safeAreaStyleProvider(useSafeAreaInsets())]}>
            <Header title={'Find All You Need'} showSearch={true} style={styles.header} onChangeText={(text) => setSearchKeyword(text)}/>
            <FlatList 
                contentContainerStyle={styles.categoryListContentContainer} 
                style={styles.categoryList} 
                ItemSeparatorComponent={categorySeparator} 
                horizontal={true} 
                showsHorizontalScrollIndicator={false} 
                data={categories} 
                renderItem={renderCategoryItem} 
                keyExtractor={(item, index) => String(index)} />
            <FlatList 
                contentContainerStyle={styles.productListContentContainer} 
                style={styles.productList} 
                columnWrapperStyle={{justifyContent: 'space-between'}} 
                ItemSeparatorComponent={productSeparator} 
                numColumns={2} 
                data={filteredProducts} 
                renderItem={renderProductItem} 
                keyExtractor={(item, index) => String(index)} />
        </View>
    );
}

export default React.memo(Home);