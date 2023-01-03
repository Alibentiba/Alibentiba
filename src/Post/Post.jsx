import React, {forwardRef } from 'react'
import './Post.css'
import InputOption from '../InputOption/InputOption'
import {SlLike} from 'react-icons/sl'
import {TfiCommentAlt} from 'react-icons/tfi'
import {VscLiveShare} from 'react-icons/vsc'
import {RiSendPlaneFill} from 'react-icons/ri'
import { useSelector } from 'react-redux'

const Post =forwardRef(({name,pho,message,timeS,image},ref) => {
  const use=useSelector(state=>state.userStore.user)


  return (
    <div ref={ref} className='Post'>
        <div className="Post-info">
        <img src={use?.photoURL} alt="" className='Post-info-img' />
         <div className="Post-user-info">
            <h4>{name}</h4>
            <p>{timeS}</p>
         </div>
        </div>
        <div className="Post-body">
         <p>{message}</p>
         {image&& <img src={image} alt="fgf" className='image-post-pub' />}
        </div>
        <div className="Post-reaction">
            <InputOption Icon={SlLike} title='Like' color='rgb(118, 118, 117)' />
            <InputOption Icon={TfiCommentAlt} title='comment' color='rgb(118, 118, 117)' />
            <InputOption Icon={VscLiveShare} title='Share' color='rgb(118, 118, 117)' />
            <InputOption Icon={RiSendPlaneFill}  title='Send' color='rgb(118, 118, 117)'/>
            
        </div>
    </div>
  )
})

export default Post