import React, { useEffect, useState } from "react";
import { 
    Text 
} from "react-native";

export function Chair(props: any): JSX.Element {
    // extract props/parameters passed to this compoent
    const { theme } = props;
    // useState is a Hook - A hook is something that lets you hook into React state and lifecycles
    const [isBig, setIsBig] = useState(false);

    // lifecycle hook
    useEffect(
        () => {
            // This code is run when component is launched
            console.log("Chair component launched");

            return () => {
                // this code is executed when component is hidden (no longer visible)
                console.log("Chair component is no longer visible");
            }
        },
        []
    );

    useEffect(
        () => {
            // This code is executed first when this component is launched and then when state
            // of isBig changes
            console.log("isBig state changed to", isBig)
        },
        [isBig]
    )

    const changeSizeState = () => {
        setIsBig(currentSizeState => !currentSizeState)
    }
    return <Text style={{fontSize: isBig ? 24 : 14, color: theme == 'dark' ? 'grey' : 'purple'}} onPress={changeSizeState}>Chair Component</Text>
}