import React from "react";
import { ScrollView, Text } from "react-native";
import { styles } from "./styles";
import { safeAreaStyleProvider } from "../../../utils/safeareahelper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ProductDetails = ({ route }) => {
    const { product } = route?.params || {};
    
    return (
        <ScrollView style={[styles.container, safeAreaStyleProvider(useSafeAreaInsets())]}>
            <Text>{product?.title}</Text>
        </ScrollView>
    );
}

export default React.memo(ProductDetails);