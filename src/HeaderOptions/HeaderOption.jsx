import React from 'react'
import './HeaderOption.css'
const HeaderOption = ({avatar,Icon,title}) => {
  return (
    <div className='headerOption'>
     {Icon&& <Icon className='headerOption-icon'/>}
     {avatar&& <img src={avatar} className='headerOption-icon'/>}

       <p className='HeaderOption-title'>{title}</p>
    </div>
  )
}

export default HeaderOption