

import React, { useState } from 'react'
import {FaRegEdit} from 'react-icons/fa'
import InputOption from '../InputOption/InputOption'
import {BsFillImageFill,BsFillCalendarEventFill} from 'react-icons/bs'
import {RiVideoLine,RiArticleFill} from 'react-icons/ri'
import avatar from '../header/avatar.jpg'
import './Feed.css'
import Post from '../Post/Post'
import { useEffect } from 'react'
import db from "../firebaseConfig";
import { collection, getDocs ,addDoc} from "firebase/firestore"; 
import {serverTimestamp } from "firebase/firestore";
const Feed = () => {
  const colRef= collection(db,'posts')
  const [input,setinput]=useState('')
const [posts,setpost]=useState([])
useEffect(()=>{
getDocs(colRef).then((snap)=>{setpost(snap.docs.map((doc)=>(
{
      id:doc.id,
      data:doc.data(),})))}) 
},[])
   
const sendpost=(e)=>{
  e.preventDefault();
 addDoc(collection(db,"posts"),{
    name:"Ali bentiba",
    descreption:'Hi im new her',
    photoUrl:'',
    message:input,
    time:serverTimestamp()})
    setinput('')
}


  return (
    <div className='Feed'>
        <div className="FeedInputContainer">
        <div className="FeedInputContainer-top">
        <img src={avatar} alt='avatar' className=''/>
           <div className="FeedInput">
            <FaRegEdit className='FaRegEdit'/>
            <form action="" className='FeedForm'>
            <input onChange={e=>setinput(e.target.value)} value={input} type="text" placeholder='Start a Post' />
            <button type='submit' onClick={sendpost}>Send</button>
             </form>
           </div>
           </div>

           <div className="FeedInputOption">
            <InputOption Icon={BsFillImageFill} title='image' color='rgb(21, 103, 255)' />
            <InputOption Icon={RiVideoLine} title='Vidio' color='rgb(110, 206, 0)' />
            <InputOption Icon={BsFillCalendarEventFill} title='Event' color='rgb(250, 168, 45)' />
            <InputOption Icon={RiArticleFill} title='Write article' color='rgb(255, 145, 0)'/>
           </div>


        </div>
         
         
          <div className="Posts">
           {posts.map(({id,data:{name,descreption,photoUrl,message}})=>(
           <Post 
           key={id}
           name={name} descreption={descreption}
           photoUrl={avatar} 
           message={message}
          />))
            }   
            
        </div>
        
        
        
    </div>
  )}

  export default  Feed
