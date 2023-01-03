import React from 'react'
import './Login.css'
// import LinkedinLogin from './LinkedinLogin.png'
import { useState,useEffect } from 'react'
import {createUserWithEmailAndPassword,updateEmail,signInWithEmailAndPassword,updateProfile,onAuthStateChanged, updatePassword  } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import {LoginA} from '../Re/Slice'
import { getAuth} from "firebase/auth";
import{ db }from "../firebaseConfig";
import { collection, getDocs ,addDoc} from "firebase/firestore"; 
import {serverTimestamp } from "firebase/firestore";

const Login = () => {

    const dispatch = useDispatch()
    const [Name,setName]=useState('')
    const [Email,setEmail]=useState('')
    const [Password,setPassword]=useState('')
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
                      var x
    const LogintoApp=(e)=>{
   



    e.preventDefault()
    for (let i = 0; i < users.length; i++) {
      // var y=users[1].data.email
     if(users[i].data.email===Email){
        x=users[i].data
        console.log('Condition of  X',x)
        i=users.length

     }
    }
if(x){ 
  console.log('user of x is',x)
  signInWithEmailAndPassword(auth,Email,Password).then((auther)=>{
    
  localStorage.setItem('x',JSON.stringify(x));

  dispatch(LoginA(x))
  })}
    
    
}
  
const Register=()=>{
createUserWithEmailAndPassword(auth, Email, Password).then(
  updateEmail(auth.currentUser,Email),
  updatePassword(auth.currentUser,Password),
  updateProfile(auth.currentUser,{
 displayName:Name,photoURL:PhotoUrl}))
  dispatch(LoginA({displayName:Name,photoURL:PhotoUrl,email:Email},
  addDoc(collection(db,"users"),{displayName:Name,photoURL:PhotoUrl,email:Email,time:serverTimestamp()})
))}
      
  return (
    <div className='Login'>
     <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png' alt="fdfd" />
     <form action="">
     <input type="text" value={Name} onChange={e=>{setName(e.target.value)}} placeholder='Full name' />
      <input type="text" value={PhotoUrl} onChange={e=>{setphotoUrl(e.target.value)}} placeholder='profil pic'/>
      <input type="text" value={Email}  onChange={e=>{setEmail(e.target.value)}}  placeholder='Email' />
      <input type="text" value={Password}  onChange={e=>{setPassword(e.target.value)}} placeholder='password' />
      <button type='Submit' onClick={LogintoApp}>Submit</button>



     </form>
     <p>Not a membre? <span className='Login-register' onClick={Register}>register Now</span></p>
    </div>
  )
}

export default Login