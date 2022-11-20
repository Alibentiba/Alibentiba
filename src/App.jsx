import React from 'react'
import Header from './header/Header'
import Sidebar from './Sidebar/Sidebar'
import './App.css'
import Feed from './Feed/Feed'
import Login from './Login/Login'
import { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {LoginA} from './Re/Slice'


function App() {
  const dispatch=useDispatch()
useEffect(()=>{
  const v = JSON.parse(localStorage.getItem('x'));
if(v){
  dispatch(LoginA(v))
  console.log('dsfsdfsfsd',v)
}},[])
var user1=useSelector(state=>state.userstore.user)
console.log("user1of local",user1);
    return (
      <div className='App'>   
 {user1?.email? ( 


<div className='body-App'>
<Header/>
  <div className="App-body">
    
   <Sidebar/>
   <Feed/>
  </div></div>
 ):(<Login/>) } 
</div>
     
 )}

export default App
