import React from "react";
import {increment, decrement} from "../actions/counterActions";
import {useDispatch, useSelector} from "react-redux";

const Counter = () => {
    const count = useSelector(state => state.counter)
    const dispatch = useDispatch();
    return (
        <>
            <h2>Bài tập 1.</h2>
            <h3>Counter : {count}</h3>
            <button onClick={()=> dispatch(increment(1))}>Tăng 1</button>
            <button onClick={() => dispatch(decrement(1))}>Giảm 1</button>
            <button onClick={()=> dispatch(increment(10))}>Tăng 10</button>
            <button onClick={() => dispatch(decrement(10))}>Giảm 10</button>
        </>
    )
}

export default Counter;