

import React, { useState } from 'react'
import {FaEthereum, FaRegEdit} from 'react-icons/fa'
import InputOption from '../InputOption/InputOption'
import {BsFillImageFill,BsFillCalendarEventFill, BsXCircle, BsForward} from 'react-icons/bs'
import {RiVideoLine,RiArticleFill} from 'react-icons/ri'
import avatar from '../header/avatar.jpg'
import './Feed.css'
import {fetchTostat} from '../Re/Slice'
import Post from '../Post/Post'
import { useEffect } from 'react'
import {db} from "../firebaseConfig";
import { collection, getDocs ,addDoc} from "firebase/firestore"; 
import { useDispatch, useSelector } from 'react-redux'
import FlipMove from 'react-flip-move'
import {modelOPen} from '../Re/Slice'
import Modal1 from '../Modal/Model'


const Feed = () => {
  const model1=useSelector(state=>state.userStore.ModelState)

  const dispatch =useDispatch()
  const colRef= collection(db,'posts')
  const [posts,setposts]=useState(null)
  const use=useSelector(state=>state.userStore.user)

useEffect(()=>{
getDocs(colRef).then((snap)=>{setposts(snap.docs.map((doc)=>(
{id:doc.id,
data:doc.data()})))
    })
    dispatch(fetchTostat(posts))
},[model1])

console.log('the user is',use)
   
const handelModel=()=>{
  dispatch(modelOPen(!model1))
}

  return (
    <div className='Feed'>
        <Modal1/> 
        <div className="FeedInputContainer">
        <div className="FeedInputContainer-top">
        <img src={use?.photoURL} alt='avatar'/>
           <div className="FeedInput" onClick={handelModel} >

        
              <p>Start a Post</p>
            
            
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
           {posts?.map(({id,data:{name,pho,message,timeS,file,Extension}})=>(
           <Post 
           key={id}
           name={name}
           timeS={timeS}
            pho={avatar} 
           message={message}
           file={file}
           Extension={Extension}
           />))
            }  
              
  
            
   
            </div>
          
        
    </div>
  )}

  export default  Feed
