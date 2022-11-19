import React from 'react'
import Header from './header/Header'
import Sidebar from './Sidebar/Sidebar'
import './App.css'
import Feed from './Feed/Feed'
import Login from './Login/Login'
import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'


function App() {
// const [user1,setuser]=useState(null)

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
