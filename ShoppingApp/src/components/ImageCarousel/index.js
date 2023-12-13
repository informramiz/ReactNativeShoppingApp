import React, { useState } from "react";
import { Dimensions, FlatList, Image, View } from "react-native";
import { styles } from "./styles";

const { width } = Dimensions.get('window');

const ImageCarousel = ({ images }) => {
    const [activePageIndex, setActivePageIndex] = useState(0);

    const handleScrollEnd = (event) => {
        const horizontalOffset = event.nativeEvent.contentOffset.x;
        const itemIndex = Math.round(horizontalOffset / width);

        setActivePageIndex(itemIndex);
    }

    const renderItem = ({ item }) => {
        return (
            <Image source={{uri: item}} style={styles.listItem}/>
        );
    }
    return (
        <View style={styles.container}>
            <FlatList 
                style={styles.list}
                data={images}
                renderItem={renderItem}
                keyExtractor={(item) => item}
                horizontal={true}
                pagingEnabled 
                onMomentumScrollEnd={handleScrollEnd} />

            <View style={styles.paginationContainer} >
                {images?.map((_, index) => (
                    <View key={index} style={[styles.paginationLine, index == activePageIndex ? styles.activatePaginationLine : {}]} />
                ))}
            </View>
        </View>
    );
}

export default React.memo(ImageCarousel);