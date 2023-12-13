import React from "react";
import { ScrollView, Text } from "react-native";
import { styles } from "./styles";
import { safeAreaStyleProvider } from "../../../utils/safeareahelper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ProductDetails = () => {
    return (
        <ScrollView style={[styles.container, safeAreaStyleProvider(useSafeAreaInsets())]}>
            <Text>Product Details</Text>
        </ScrollView>
    );
}

export default React.memo(ProductDetails);