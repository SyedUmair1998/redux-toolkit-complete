import { useSelector,useDispatch } from "react-redux";
import React from 'react'
import { increment  } from "../counter/counterSlice";


const Coin = () => {
    const my_count = useSelector((state)=>state.counter.count);
    const dispatch = useDispatch()
    const HandleChange = () =>{
        
        dispatch(increment());
    }
    return (
        <div>
            <h1>{my_count}</h1>
            <button onClick = {HandleChange}>Increment</button>

        </div>
    )
}

export default Coin;
