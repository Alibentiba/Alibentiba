import React from 'react'
import './Login.css'
import LinkedinLogin from './LinkedinLogin.png'
import { useState } from 'react'
import auth from '../firebaseConfig'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useSelector, useDispatch } from 'react-redux'
import {LoginA} from '../Re/Slice'
const Login = () => {
    const dispatch = useDispatch()
    const [Name,setName]=useState('')
    const [Email,setEmail]=useState('')
    const [Password,setPassword]=useState('')
    const [PhotoUrl,setphotoUrl]=useState('')
    const auth = getAuth();



    const Register=()=>{
        if(!Name){alert('pls input username')}

        

     
createUserWithEmailAndPassword(auth).then((userCredential) => {
const user1 = userCredential.user
user1.displayName=Name
user1.photoURL=PhotoUrl
dispatch(LoginA({
    email:Email,
    name:user1.displayName,
    photo:user1.photoURL, 
  }))
})}
  
const LoginApp=(e)=>{
        e.preventDefault()}

  return (
    <div className='Login'>
     <img src={LinkedinLogin} alt="fdfd" />
     <form action="">
     <input type="text" value={Name} onChange={e=>{setName(e.target.value)}} placeholder='Full name' />
      <input type="text" value={PhotoUrl} onChange={e=>{setphotoUrl(e.target.value)}} placeholder='profil pic'/>
      <input type="text" value={Email}  onChange={e=>{setEmail(e.target.value)}}  placeholder='Email' />
      <input type="text" value={Password}  onChange={e=>{setPassword(e.target.value)}} placeholder='password' />
      <button type='Submit' onClick={LoginApp}>Submit</button>



     </form>
     <p>Not a membre? <span className='Login-register' onClick={Register}>register Now</span></p>
    </div>
  )
}

export default Login