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
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [PhotoUrl,setphotoUrl]=useState('')
    const auth = getAuth()
     const col= collection(db,'users')
     const [users,setusers]=useState([])
    const [user1,setuser1]=useState({})

    
console.log('users',users);
 useEffect(()=>{
       getDocs(col).then((snap)=>{setusers(snap.docs.map((doc)=>(
      {id:doc.id,
     data:doc.data(),})))})
                        
                        },[])

    const LogintoApp=(e)=>{
    e.preventDefault()

     signInWithEmailAndPassword(auth,email,password).then((auther)=>{
  setuser1(users.find(({email}) => email===email));
      dispatch(LoginA({
      email:user1.data.email,
      displayName:user1.data.displayName,
      PhotoUrl:user1.data.photoURL},))
      })
      localStorage.setItem('localuser',user1)
}
  

const Register=()=>{
createUserWithEmailAndPassword(auth, email, password).then(
  updateEmail(auth.currentUser,email),
  updatePassword(auth.currentUser,password),
  updateProfile(auth.currentUser,{
 displayName:Name,photoURL:PhotoUrl}))
 console.log("user orrororoorooor",auth.currentUser);
  dispatch(LoginA({displayName:Name,photoURL:PhotoUrl,email:email},
  addDoc(collection(db,"users"),{displayName:Name,photoURL:PhotoUrl,email:email,time:serverTimestamp()})
))}

  

       

  return (
    <div className='Login'>
     <img src={LinkedinLogin} alt="fdfd" />
     <form action="">
     <input type="text" value={Name} onChange={e=>{setName(e.target.value)}} placeholder='Full name' />
      <input type="text" value={PhotoUrl} onChange={e=>{setphotoUrl(e.target.value)}} placeholder='profil pic'/>
      <input type="text" value={email}  onChange={e=>{setEmail(e.target.value)}}  placeholder='Email' />
      <input type="text" value={password}  onChange={e=>{setPassword(e.target.value)}} placeholder='password' />
      <button type='Submit' onClick={LogintoApp}>Submit</button>



     </form>
     <p>Not a membre? <span className='Login-register' onClick={Register}>register Now</span></p>
    </div>
  )
}

export default Login