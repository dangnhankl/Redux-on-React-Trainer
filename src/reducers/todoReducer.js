import {ADD_TODO,DEL_TODO,TOG_TODO} from "../actions/types";

const initState = {
    todos : []
}

const todoReducer = (state = initState, action) => {
    switch (action.type){
        case ADD_TODO : return {
            ...state,
            todos : [
                ...state.todos,
                {
                    id : Math.random(),
                    text : action.payload,
                    completed : false
                }
            ]
        }
        case DEL_TODO : return {
            ...state,
            todos: state.todos.filter((todo) => todo.id !== action.payload)
        }
        case TOG_TODO : return {
            ...state,
            todos : state.todos.map(todo =>
                todo.id === action.payload
                ? {...todo, completed : !todo.completed}
                : todo
            )
        }
        default : return state
    }
}

export default todoReducer;