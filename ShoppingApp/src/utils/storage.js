import AsyncStorage from "@react-native-async-storage/async-storage"

export const storageKeys = {
    userToken: 'userToken'
}

export const setUserToken = async (token) => {
    await setData(storageKeys.userToken, token);
}

export const getUserToken = async () => {
    return await getData(storageKeys.userToken);
}

export const deleteUserToken = async () => {
    await deleteData(storageKeys.userToken);
}

export const setData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.log("AsyncStorage setData error: ", error);
    }
}

export const getData = async (key) => {
    try {
        return await AsyncStorage.getItem(key);
    } catch (error) {
        console.log("AsyncStorage getData error: ", error);
    }
}

export const setObject = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.log("AsyncStorage setObject error: ", error);
    }
}

export const getObject = async (key) => {
    try {
        const jsonValue = AsyncStorage.getItem(key);
        return jsonValue ? JSON.parse(jsonValue) : null;
    } catch (error) {
        console.log("AsyncStorage getObject error: ", error);
    }
}

export const clearAllData = async () => {
    try {
        await AsyncStorage.clear();
    } catch (error) {
        console.log("AsyncStorage clearAllData error: ", error);
    }
}

export const deleteData = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.log("AsyncStorage deleteData error: ", error);
    }
}