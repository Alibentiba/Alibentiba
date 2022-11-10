import { createSlice } from "@reduxjs/toolkit";
export const Slice = createSlice({

    name: "counter",
    initialState: {feeds:[],user:{email:'',uid:'',displayName:'',PhotoUrl:''}},
   
    reducers: {
          LoginA: (state,action) => {
         state.user=action.payload
        
          },
          Logout:(state) => {
            state.user=null;
          
           
             },
             fetchTostat: (state, action) => {
            state.feeds= action.payload
           },
           sendpostostate:(state, action) => {
           let x=state.feeds
            // state.feeds= [...state,action.payload]
            state.feeds=x.push(action.payload)
            // return state.feeds
           },
          

    }
})
export const {LoginA,Logout,fetchTostat,sendpostostate} = Slice.actions
export default Slice.reducer