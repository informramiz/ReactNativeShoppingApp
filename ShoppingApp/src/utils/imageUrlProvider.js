const { default: Config } = require("react-native-config")

export const imageUrlProvider = (image) => {
    return `${Config.API_BASE_URL}/${image?.path}`;
}