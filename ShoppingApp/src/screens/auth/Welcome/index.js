import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { safeAreaStyleProvider } from "../../../utils/safeareahelper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Welcome = () => {
    return (
        <View style={[styles.container, safeAreaStyleProvider(useSafeAreaInsets())]}>
            <Text style={styles.title}>Welcome</Text>
        </View>
    );
}

export default React.memo(Welcome);