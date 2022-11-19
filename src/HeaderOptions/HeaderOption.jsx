import React from 'react'
import './HeaderOption.css'
import {  useSelector } from 'react-redux';

const HeaderOption = ({avatar,Icon,title,Click}) => {
const user1=useSelector(state=>state.userstore.user)

  return (
    <div onClick={Click} className='headerOption'>
     {Icon&& <Icon className='headerOption-icon'/>}
     {avatar&& <img src={user1?.photoURL} className='headerOption-icon'/>}

       <p className='HeaderOption-title'>{title}</p>
    </div>
  )
}

export default HeaderOption