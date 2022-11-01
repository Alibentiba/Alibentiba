import { createSlice } from "@reduxjs/toolkit";
export const Slice = createSlice({
    name: "counter",
    initialState: {feeds:[]},
    reducers: {
          LoginA: (state,action) => {
         state.user=action.payload
        
          },
          Logout: (state) => {
            state.user=null;
           
             },
             fetchTostat: (state, action) => {
            state.feeds= action.payload
           },
           sendpostostate:(state, action) => {
            // state.feeds= [...action.payload]
            state.feeds=state.feeds.push(action.payload)
           },
          

    }
})
export const {LoginA,Logout,fetchTostat,sendpostostate} = Slice.actions
export default Slice.reducer