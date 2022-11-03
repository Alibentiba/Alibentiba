import React from 'react'
import './Login.css'
import LinkedinLogin from './LinkedinLogin.png'
import { useState } from 'react'
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile  } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import {LoginA} from '../Re/Slice'
const Login = () => {
    const dispatch = useDispatch()
    const [Name,setName]=useState('')
    const [Email,setEmail]=useState('')
    const [Password,setPassword]=useState('')
    const [PhotoUrl,setphotoUrl]=useState('')
const auth = getAuth();

const LogintoApp=(e)=>{
 e.preventDefault()
signInWithEmailAndPassword(auth, Email, Password)
  .then((userCredential) =>{dispatch(LoginA({
   Email:userCredential.user.email,
   uid:userCredential.user.uid,
   displayName:userCredential.user.displayName,
   PhotoUrl:userCredential.user.photoURL
  }))} )}
  

const Register=()=>{
if(!Name){alert('pls input username')}
const user=auth.currentUser
 createUserWithEmailAndPassword(auth,Email,Password)
 updateProfile(auth.currentUser,{
  displayName:Name, 
  photoURL:PhotoUrl,
  email:Email,
  Password:Password
}
)
dispatch(LoginA({
email:user.email,
displayName:user.displayName,
uid:user.uid,
photo:user.photoURL
}))
console.log(auth.currentUser)
}

  

       

  return (
    <div className='Login'>
     <img src={LinkedinLogin} alt="fdfd" />
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