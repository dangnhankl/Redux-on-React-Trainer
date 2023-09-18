import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {addTodo, delTodo, toggleTodo} from "../actions/todoActions";

const TodoList = () => {
    const [text, setText] = useState("");

    const todos = useSelector((state) => {
        return state.todos.todos
    });
    const dispatch = useDispatch()
    const addTodoClick = () => {
        if (text.trim() !== "") {
            dispatch(addTodo(text))
            setText("")
        }
    }
    return (
        <>
            <h2>Bài tập 2</h2>
            <h3>Todo list</h3>
            <div>
                <input type="text" value={text} onChange={e => setText(e.target.value)}/>
                <button onClick={addTodoClick}>Add</button>
            </div>
            {todos && todos.length > 0 ? (
                    <ul>
                        {todos.map(todo => (
                            <li key={todo.id}>
                            <span
                                onClick={() => {
                                    dispatch(toggleTodo(todo.id))
                                }}
                                style={{textDecoration: todo.completed ? "line-through" : "none"}}>
                                {todo.text}</span>
                                <button onClick={() => dispatch(delTodo(todo.id))}>Xóa</button>
                            </li>
                        ))}
                    </ul>
                )
                : (<p>danh sách trống</p>)
            }
        </>
    )
}

export default TodoList