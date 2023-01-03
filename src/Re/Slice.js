import { createSlice } from "@reduxjs/toolkit";
export const Slice = createSlice({

    name: "userStore",
    initialState: {feeds:[],user:null},ModelState:false,
   
    reducers: {
          LoginA: (state,action) => {
         state.user=action.payload
        
          },
          Logout:(state,action) => {
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
           modelOPen:(state, action) => {
            state.ModelState=action.payload
             
            },
           
          

    }
})
export const {LoginA,Logout,fetchTostat,sendpostostate,modelOPen} = Slice.actions
export default Slice.reducer