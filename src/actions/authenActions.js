import {LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT} from "./types";
import axios from "axios";

export const loginSuccess = (userData) => (dispatch) =>{
    sessionStorage.setItem("userData" , JSON.stringify(userData))
    dispatch({
        type: LOGIN_SUCCESS,
        payload: userData,
    })
};

export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error,
});

export const logout = () => ({
    type: LOGOUT,
});


export const login = (usr, pw) => async (dispatch) => {
    try {
        const resp = await axios.post(
            "https://dummyjson.com/auth/login",
            JSON.stringify({
                username: usr, //kminchelle
                password: pw, //0lelplR
                expiresInMins: 60
            }),
            {
                headers: {
                    /*"Content-Type": "application/x-www-form-urlencoded"*/
                    'Content-Type': 'application/json'
                }
            })
        console.log(resp.data)
        if (resp.status === 200) {
            dispatch(loginSuccess(resp.data));
        } else {
            dispatch(loginFailure("Tên đăng nhập hoặc mật khẩu không đúng"));
        }
    } catch (err) {
        dispatch(loginFailure("Có lỗi từ máy chủ"));
    }
}
