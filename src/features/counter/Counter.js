import { useSelector,useDispatch } from "react-redux";
import React from 'react'
import { incrementByAnyNumber } from "../counter/counterSlice.js";

const Counter = () => {
    const my_count = useSelector((state)=>state.counter.count);
    const dispatch = useDispatch()
    
    const HandleChange = () =>{
        
        dispatch(incrementByAnyNumber(10));
    }
    return (
        <div>
            <h1>{my_count}</h1>
            <button onClick = {HandleChange}>Increment</button>

        </div>
    )
}

export default Counter;
