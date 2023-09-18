import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {login, logout} from "../actions/authenActions";
import {loginSuccess} from "../actions/authenActions";

const Auth = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const error = useSelector(state => state.auth.error)
    const dispatch = useDispatch()

    const [usrInfo,setUsrInfo] = useState({
        username : "",
        password : ""
    })
    const handleLogin = () => {
        dispatch(login(usrInfo.username,usrInfo.password));
    };

    const handleLogout = () => {
        dispatch(logout());
    };
    useEffect(()=>{
        const userData = JSON.parse(sessionStorage.getItem('userData')) || null;
        if(userData) {
            setUsrInfo({...usrInfo, username: userData.username})
            dispatch(loginSuccess(userData))
        }
    },[dispatch])

    return (
        <>
            <h2>Bài tập 3</h2>
            <h3>Login</h3>
            {isAuthenticated ? (
                <>
                    <p>Xin chào, {usrInfo.username}!</p>
                    <button onClick={handleLogout}>Đăng xuất</button>
                </>
            ) : (
                <>
                    <p>Vui lòng đăng nhập:</p>
                    <input
                        type="text"
                        placeholder="Tên đăng nhập"
                        value={usrInfo.username}
                        onChange={(e) => setUsrInfo({...usrInfo,username: e.target.value})}
                    />
                    <input type="password"
                    placeholder={"Mật khẩu"}
                    value={usrInfo.password}
                    onChange={(e)=>setUsrInfo({...usrInfo, password : e.target.value})}/>
                    <button onClick={handleLogin}>Đăng nhập</button>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                </>
            )}
        </>
    )
}

export default Auth;