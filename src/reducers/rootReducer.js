import {combineReducers} from "redux";
import counterReducer from "./counterReducer";
import todoReducer from "./todoReducer";
import authReducer from "./authenReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    todos: todoReducer,
    auth: authReducer
})

export default rootReducer;