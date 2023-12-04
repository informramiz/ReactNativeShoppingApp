import React, { useState } from "react";
import { 
    Text 
} from "react-native";

export function Chair(): JSX.Element {
    const [isBig, setIsBig] = useState(false)
    const changeSizeState = () => {
        setIsBig(currentSizeState => !currentSizeState)
    }
    return <Text style={{fontSize: isBig ? 24 : 14}} onPress={changeSizeState}>Chair Component</Text>
}