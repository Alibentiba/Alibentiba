

import React, { useState } from 'react'
import {FaEthereum, FaRegEdit} from 'react-icons/fa'
import InputOption from '../InputOption/InputOption'
import {BsFillImageFill,BsFillCalendarEventFill, BsXCircle, BsForward} from 'react-icons/bs'
import {RiVideoLine,RiArticleFill} from 'react-icons/ri'
import avatar from '../header/avatar.jpg'
import './Feed.css'
import {fetchTostat, sendpostostate } from '../Re/Slice'
import Post from '../Post/Post'
import { useEffect } from 'react'
import db from "../firebaseConfig";
import { collection, getDocs ,addDoc} from "firebase/firestore"; 
import {serverTimestamp } from "firebase/firestore";
import { useDispatch, useSelector } from 'react-redux'
import FlipMove from 'react-flip-move'

const Feed = () => {
  const dispatch =useDispatch()
  const colRef= collection(db,'posts')
  const [input,setinput]=useState('')
  const [posts,setposts]=useState([])
  const use=useSelector(state=>state.userstore.user)
  var d = new Date("2022-03-25");
   let dat = d.toString().slice(0,25);


useEffect(()=>{
getDocs(colRef).then((snap)=>{setposts(snap.docs.map((doc)=>(
{id:doc.id,
data:doc.data()})))
    })
},[input])
   dispatch(fetchTostat(posts))
   
const sendpost=(e)=>{
  e.preventDefault();
 addDoc(collection(db,"posts"),{
    name:"Ali bentiba",
    photoUrl:'',
    message:input,
    timeS:dat
   })
    setinput('')
  
}
 console.log('posts',posts)

  return (
    <div className='Feed'> 
    
        <div className="FeedInputContainer">
        <div className="FeedInputContainer-top">
        <img src={use?.photoURL} alt='avatar' className=''/>
           <div className="FeedInput">
            <FaRegEdit className='FaRegEdit'/>
            <form action="" className='FeedForm'>
            <input onChange={e=>setinput(e.target.value)} value={input} type="text" placeholder='Start a Post' />
            <button type='submit' onClick={sendpost}>Send</button>
             </form>
           </div>
           </div>

           <div className="FeedInputOption">
            <InputOption  Icon={BsFillImageFill} title='image' color='rgb(21, 103, 255)' />
            <InputOption Icon={RiVideoLine} title='Vidio' color='rgb(110, 206, 0)' />
            <InputOption Icon={BsFillCalendarEventFill} title='Event' color='rgb(250, 168, 45)' />
            <InputOption Icon={RiArticleFill} title='Write article' color='rgb(255, 145, 0)'/>
           </div>


        </div>
         
         
          
        <div className="Posts">


       <FlipMove>

           {posts?.map(({id,data:{name,pho,message,timeS}})=>(
           <Post 
           key={id}
           name={name}
           timeS={timeS}
            pho={avatar} 
           message={message}

          />))
            }  
              
            </FlipMove> 
            
   
            </div>
        
        
    </div>
  )}

  export default  Feed
