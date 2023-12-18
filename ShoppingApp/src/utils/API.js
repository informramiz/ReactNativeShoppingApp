import { request } from "./request"

export const signUp = async (values) => {
    try {
        const signUpResponse = await request({
            url: '/user/register',
            method: 'post',
            data: values
        });
    
        if (signUpResponse) {
            const {email, password} = values;
            return await login({ email, password});
        }
    } catch (error) {
        console.log("Sign up failed with error: ", error.response);
    }
}

export const login = async (values) => {
    try {
        const response = await request({
            url: '/user/login',
            method: 'post',
            data: values
        });

        if (response?.data?.token) {
            return response?.data?.token;
        }
    } catch (error) {
        console.log("Login failed with error: ", error.response);
    }
}

export const getProfile = async () => {
    try {
        const response = await request({
            url: '/user/profile',
            method: 'get'
        });

        if (response) {
            return response?.data;
        }
    } catch (error) {
        console.log("GetProfile failed with error: ", error.response);
    }
}