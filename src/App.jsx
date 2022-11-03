import React from 'react'
import Header from './header/Header'
import Sidebar from './Sidebar/Sidebar'
import './App.css'
import Feed from './Feed/Feed'
import {useDispatch, useSelector} from 'react-redux'
import Login from './Login/Login'
import { useState,useEffect } from 'react'
import { auth } from './firebaseConfig'
import { LoginA, Logout } from './Re/Slice'


function App() {
const user11=useSelector(state=>state.userstore.user)
// const Pro= useSelector(state=>state..catAll)
 const dispatch = useDispatch()
useEffect(()=>{
auth.onAuthStateChanged((userAuth)=>{
if(userAuth){
dispatch(LoginA({
email:userAuth.email,
uid:userAuth.uid,
displayName:userAuth.displayName,
photo:userAuth.photoURL}))
}else{
dispatch(Logout())}


})
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
