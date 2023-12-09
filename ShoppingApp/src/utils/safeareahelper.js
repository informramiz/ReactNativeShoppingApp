export const safeAreaStyleProvider = (insets) => {
    return {
        paddingTop: insets.top, 
        paddingBottom: insets.bottom, 
        paddingLeft: insets.left, 
        paddingRight: insets.right
    }
}