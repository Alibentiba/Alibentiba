import React from 'react'
import Header from './header/Header'
import Sidebar from './Sidebar/Sidebar'
import './App.css'
import Feed from './Feed/Feed'
import Login from './Login/Login'
import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'


function App() {
const [user1,setuser]=useState(null)

useEffect(() => {
    const user2 =JSON.parse(localStorage.getItem('user2'));
   if (user2) {
   setuser(user2);}
 
},[]);

console.log("user1of local",user1);
    return (
      <div className='App'>
         <Header/>

{/* {user1?.email? ( */}
  <div className="App-body">
   <Sidebar/>
   <Feed/>
  </div>
 {/* ):(<Login/>) } */}
</div>
     
 )}

export default App
