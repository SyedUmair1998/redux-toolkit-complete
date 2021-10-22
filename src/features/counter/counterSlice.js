import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
        count : 0
}   

export const counterSlice = createSlice({
    name : 'counter',
    initialState :  initialValue,
    reducers : {
        increment : (state) => {
            state.count += 1
        },
        incrementByAnyNumber : (state,action) => {
            state.count += action.payload
        }
    }

})

export const {increment , incrementByAnyNumber} = counterSlice.actions;
export default counterSlice.reducer;