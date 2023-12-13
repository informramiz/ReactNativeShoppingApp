import React from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./styles";
import { safeAreaStyleProvider } from "../../../utils/safeareahelper";
import Header from "../../../components/Header";
import CategoryBox from "../../../components/CategoryBox";
import { categories } from "../../../data/categories";

const Home = () => {
    const renderCategoryItem = ({item, index}) => {
        return <CategoryBox label={item?.title} image={item?.image}/>
    }

    const categorySeparator = ({highlighted}) => {
        return <View style={styles.categoryListSeparator} />
    }

    return (
        <ScrollView style={[styles.container, safeAreaStyleProvider(useSafeAreaInsets())]}>
            <Header title={'Find All You Need'} showSearch={true}/>
            <FlatList style={styles.categoryList} ItemSeparatorComponent={categorySeparator} horizontal={true} showsHorizontalScrollIndicator={false} data={categories} renderItem={renderCategoryItem} keyExtractor={(item, index) => String(index)} />
        </ScrollView>
    );
}

export default React.memo(Home);