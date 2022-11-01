import React from 'react'
import './Post.css'
import InputOption from '../InputOption/InputOption'
import {SlLike} from 'react-icons/sl'
import {TfiCommentAlt} from 'react-icons/tfi'
import {VscLiveShare} from 'react-icons/vsc'
import {RiSendPlaneFill} from 'react-icons/ri'
const Post = ({name,descreption,photoUrl,message}) => {

    
  return (
    <div className='Post'>
        <div className="Post-info">
        <img src={photoUrl} alt="" className='Post-info-img' />
         <div className="Post-user-info">
            <h4>{name}</h4>
            <p>{descreption}</p>
         </div>
        </div>
        <div className="Post-body">
         <p>{message}</p>
        </div>
        <div className="Post-reaction">
            <InputOption Icon={SlLike} title='Like' color='rgb(118, 118, 117)' />
            <InputOption Icon={TfiCommentAlt} title='comment' color='rgb(118, 118, 117)' />
            <InputOption Icon={VscLiveShare} title='Share' color='rgb(118, 118, 117)' />
            <InputOption Icon={RiSendPlaneFill} title='Send' color='rgb(118, 118, 117)'/>
            
        </div>
    </div>
  )
}

export default Post