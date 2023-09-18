import {ADD_TODO, DEL_TODO, TOG_TODO} from "./types";

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: text
})

export const delTodo = (id) => ({
    type: DEL_TODO,
    payload: id
})

export const toggleTodo = (id) => ({
    type: TOG_TODO,
    payload: id
})