import React from 'react'
import Header from './header/Header'
import Sidebar from './Sidebar/Sidebar'
import './App.css'
import Feed from './Feed/Feed'
import Login from './Login/Login'
import { useState,useEffect } from 'react'


function App() {
     const [user11,setuser11]=useState({})

useEffect(()=>{
 setuser11(localStorage.getItem('localuser'))
},[])
    return (
      <div className='App'>
         <Header/>

{!user11 ? (<Login/>) :(
  <div className="App-body">
   <Sidebar/>
   <Feed/>
  </div>
 ) }
</div>
     
 )}

export default App
