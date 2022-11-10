import React from 'react'
import './Login.css'
import LinkedinLogin from './LinkedinLogin.png'
import { useState,useEffect } from 'react'
import {createUserWithEmailAndPassword,updateEmail,signInWithEmailAndPassword,updateProfile,onAuthStateChanged, updatePassword  } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import {LoginA} from '../Re/Slice'
import { getAuth} from "firebase/auth";
import db from "../firebaseConfig";
import { collection, getDocs ,addDoc} from "firebase/firestore"; 
import {serverTimestamp } from "firebase/firestore";

const Login = () => {

    const dispatch = useDispatch()
    const [Name,setName]=useState('')
    const [Email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [PhotoUrl,setphotoUrl]=useState('')
    const auth = getAuth()
     const col= collection(db,'users')
     const [users,setusers]=useState([])
    const [user1,setuser1]=useState({})

    

 useEffect(()=>{
       getDocs(col).then((snap)=>{setusers(snap.docs.map((doc)=>(
      {id:doc.id,
      data:doc.data(),})))})
                        
                       },[])
                       
console.log('users',users);
    const LogintoApp=(e)=>{
   
    e.preventDefault()

     signInWithEmailAndPassword(auth,Email,password).then((auther)=>{
     const user2=users.find(({email}) => Email===email);
      setuser1(user2)
      console.log('user1user1',user2)
      localStorage.setItem('user2',JSON.stringify(user2.data));
  
      dispatch(LoginA({
      email:user2.data.email,
      displayName:user2.data.displayName,
      PhotoUrl:user2.data.photoURL},))
      })
    
}
  

const Register=()=>{
createUserWithEmailAndPassword(auth, Email, password).then(
  updateEmail(auth.currentUser,Email),
  updatePassword(auth.currentUser,password),
  updateProfile(auth.currentUser,{
 displayName:Name,photoURL:PhotoUrl}))
 console.log("user orrororoorooor",auth.currentUser);
  dispatch(LoginA({displayName:Name,photoURL:PhotoUrl,email:Email},
  addDoc(collection(db,"users"),{displayName:Name,photoURL:PhotoUrl,email:Email,time:serverTimestamp()})
))}

  

       

  return (
    <div className='Login'>
     <img src={LinkedinLogin} alt="fdfd" />
     <form action="">
     <input type="text" value={Name} onChange={e=>{setName(e.target.value)}} placeholder='Full name' />
      <input type="text" value={PhotoUrl} onChange={e=>{setphotoUrl(e.target.value)}} placeholder='profil pic'/>
      <input type="text" value={Email}  onChange={e=>{setEmail(e.target.value)}}  placeholder='Email' />
      <input type="text" value={password}  onChange={e=>{setPassword(e.target.value)}} placeholder='password' />
      <button type='Submit' onClick={LogintoApp}>Submit</button>



     </form>
     <p>Not a membre? <span className='Login-register' onClick={Register}>register Now</span></p>
    </div>
  )
}

export default Login